import { useState, useEffect, useCallback } from 'react';
import { usePlan } from '../components/PlanContext';
import { useAuth } from '../components/Providers';
import { useUpgradeModal } from '../components/UpgradeModal';

// Updated plan limits to match Step 3 requirements
const PLAN_LIMITS = {
  free: {
    lessonPlans: 10, // 10 lessons/month as specified
    childProfiles: 1, // 1 child as specified
    reports: 0,
    forms: 0,
    parentAccounts: 0,
    storage: 0.05, // 50MB
    messages: 0,
    staffAccounts: 1,
    pdfExports: 0,
    features: ['basic-lesson-generator']
  },
  starter: {
    lessonPlans: 25,
    childProfiles: 5,
    reports: 10,
    forms: 10,
    parentAccounts: 2,
    storage: 1, // 1GB
    messages: 50,
    staffAccounts: 1,
    pdfExports: 5,
    features: ['lesson-generator', 'basic-tracking', 'pdf-export']
  },
  educator: {
    lessonPlans: 100, // 100 lessons/month as specified
    childProfiles: 20, // 20 profiles as specified
    reports: 50,
    forms: 25,
    parentAccounts: 5,
    storage: 5, // 5GB
    messages: 200,
    staffAccounts: 1,
    pdfExports: 25,
    features: ['advanced-lesson-generator', 'child-tracking', 'parent-portal', 'compliance-reports']
  },
  ai_library: {
    lessonPlans: 200,
    childProfiles: 20,
    reports: 50,
    forms: 25,
    parentAccounts: 10,
    storage: 10, // 10GB
    messages: 250,
    staffAccounts: 2,
    pdfExports: 50,
    features: ['premium-library', 'ai-assessment', 'framework-alignment']
  },
  premium: {
    lessonPlans: -1, // Unlimited
    childProfiles: 100,
    reports: -1, // Unlimited
    forms: 100,
    parentAccounts: 20,
    storage: 20, // 20GB
    messages: 500,
    staffAccounts: 3,
    pdfExports: -1, // Unlimited
    features: ['unlimited-lessons', 'advanced-analytics', 'team-collaboration']
  },
  pro: {
    lessonPlans: -1, // Unlimited
    childProfiles: 100, // 100 profiles + compliance as specified
    reports: -1, // Unlimited
    forms: -1, // Unlimited
    parentAccounts: 50,
    storage: 50, // 50GB
    messages: -1, // Unlimited
    staffAccounts: 10,
    pdfExports: -1, // Unlimited
    features: ['multi-site', 'admin-dashboard', 'advanced-compliance']
  },
  max: {
    lessonPlans: -1, // All-in → Unlimited as specified
    childProfiles: 250,
    reports: -1, // Unlimited
    forms: -1, // Unlimited
    parentAccounts: 250,
    storage: 100, // 100GB
    messages: -1, // Unlimited
    staffAccounts: 25,
    pdfExports: -1, // Unlimited
    features: ['enterprise-features', 'white-label', 'api-access']
  }
};

interface UsageData {
  lessonPlans: number;
  childProfiles: number;
  reports: number;
  forms: number;
  parentAccounts: number;
  storage: number; // in MB
  messages: number;
  staffAccounts: number;
  pdfExports: number;
}

interface UsageCheckResult {
  allowed: boolean;
  reason?: string;
  upgradeMessage?: string;
  suggestedPlan?: string;
  currentUsage?: number;
  limit?: number;
}

export function useUsageEnforcement() {
  const { user } = useAuth();
  const { plan, loading: planLoading } = usePlan();
  const { showUpgradeModal } = useUpgradeModal();
  const [usage, setUsage] = useState<UsageData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch current usage data
  const fetchUsage = useCallback(async () => {
    if (!user || planLoading) return;

    try {
      setLoading(true);
      const token = await user.getIdToken();
      
      const response = await fetch('/api/usage', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUsage({
          lessonPlans: data.usage.lessonPlans?.used || 0,
          childProfiles: data.usage.childProfiles?.used || 0,
          reports: data.usage.reports?.used || 0,
          forms: data.usage.forms?.used || 0,
          parentAccounts: data.usage.parentAccounts?.used || 0,
          storage: data.usage.storage?.used || 0,
          messages: data.usage.messages?.used || 0,
          staffAccounts: data.usage.staffAccounts?.used || 1,
          pdfExports: data.usage.pdfExports?.used || 0
        });
      }
    } catch (error) {
      console.error('Error fetching usage:', error);
    } finally {
      setLoading(false);
    }
  }, [user, planLoading]);

  useEffect(() => {
    fetchUsage();
  }, [fetchUsage]);

  // Get plan limits
  const getLimits = useCallback(() => {
    return PLAN_LIMITS[plan as keyof typeof PLAN_LIMITS] || PLAN_LIMITS.free;
  }, [plan]);

  // Check if user can perform an action
  const checkUsage = useCallback((
    resource: keyof UsageData,
    amount: number = 1
  ): UsageCheckResult => {
    if (!usage) {
      return { allowed: false, reason: 'Usage data not loaded' };
    }

    const limits = getLimits();
    const limit = limits[resource];
    const currentUsage = usage[resource];

    // Unlimited access
    if (limit === -1) {
      return { allowed: true };
    }

    // No access on current plan
    if (limit === 0) {
      return {
        allowed: false,
        reason: 'Feature not available in current plan',
        upgradeMessage: getUpgradeMessage(resource, plan),
        suggestedPlan: getSuggestedPlan(plan),
        currentUsage,
        limit
      };
    }

    // Check if adding the amount would exceed the limit
    if (currentUsage + amount > limit) {
      return {
        allowed: false,
        reason: 'Usage limit exceeded',
        upgradeMessage: getUpgradeMessage(resource, plan),
        suggestedPlan: getSuggestedPlan(plan),
        currentUsage,
        limit
      };
    }

    return { allowed: true, currentUsage, limit };
  }, [usage, getLimits, plan]);

  // Check if user can perform an action and trigger upgrade modal if not
  const checkAndEnforce = useCallback(async (
    resource: keyof UsageData,
    amount: number = 1,
    featureName?: string
  ): Promise<boolean> => {
    const result = checkUsage(resource, amount);

    if (!result.allowed) {
      // Trigger upgrade modal
      showUpgradeModal({
        feature: featureName || resource,
        urgency: 'high',
        source: 'usage-limit',
        title: `${resource === 'lessonPlans' ? 'Lesson Plan' : 
                resource === 'childProfiles' ? 'Child Profile' : 
                resource.charAt(0).toUpperCase() + resource.slice(1)} Limit Reached`,
        message: result.upgradeMessage || `You've reached your ${resource} limit.`,
        currentUsage: result.currentUsage,
        limit: result.limit,
        suggestedPlan: result.suggestedPlan
      });

      return false;
    }

    return true;
  }, [checkUsage, showUpgradeModal]);

  // Increment usage after a successful action
  const incrementUsage = useCallback(async (
    resource: keyof UsageData,
    amount: number = 1
  ): Promise<boolean> => {
    if (!user) return false;

    try {
      const token = await user.getIdToken();
      
      const response = await fetch('/api/usage/increment', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resource, amount })
      });

      if (response.ok) {
        // Update local usage state
        setUsage(prev => prev ? {
          ...prev,
          [resource]: prev[resource] + amount
        } : null);
        
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error incrementing usage:', error);
      return false;
    }
  }, [user]);

  // Get usage percentage for a resource
  const getUsagePercentage = useCallback((resource: keyof UsageData): number => {
    if (!usage) return 0;
    
    const limits = getLimits();
    const limit = limits[resource];
    const currentUsage = usage[resource];

    if (limit === -1) return 0; // Unlimited
    if (limit === 0) return 100; // No access
    
    return Math.min((currentUsage / limit) * 100, 100);
  }, [usage, getLimits]);

  // Check if user is near a limit (80% or more)
  const isNearLimit = useCallback((resource: keyof UsageData): boolean => {
    return getUsagePercentage(resource) >= 80;
  }, [getUsagePercentage]);

  // Check if user has exceeded a limit
  const hasExceededLimit = useCallback((resource: keyof UsageData): boolean => {
    return getUsagePercentage(resource) >= 100;
  }, [getUsagePercentage]);

  // Get all current usage with limits
  const getUsageWithLimits = useCallback(() => {
    if (!usage) return null;

    const limits = getLimits();
    
    return Object.keys(usage).reduce((acc, key) => {
      const resource = key as keyof UsageData;
      const currentUsage = usage[resource];
      const limit = limits[resource];
      
      acc[resource] = {
        used: currentUsage,
        limit: limit,
        percentage: getUsagePercentage(resource),
        isNearLimit: isNearLimit(resource),
        hasExceeded: hasExceededLimit(resource),
        remaining: limit === -1 ? 'unlimited' : Math.max(0, limit - currentUsage)
      };
      
      return acc;
    }, {} as any);
  }, [usage, getLimits, getUsagePercentage, isNearLimit, hasExceededLimit]);

  return {
    usage,
    limits: getLimits(),
    loading,
    checkUsage,
    checkAndEnforce,
    incrementUsage,
    getUsagePercentage,
    isNearLimit,
    hasExceededLimit,
    getUsageWithLimits,
    refreshUsage: fetchUsage,
    plan
  };
}

// Helper functions
function getUpgradeMessage(resource: keyof UsageData, currentPlan: string): string {
  const messages: Record<keyof UsageData, Record<string, string>> = {
    lessonPlans: {
      free: "You've reached your 10 lesson plan limit. Upgrade to Educator for 100 monthly lesson plans.",
      starter: "You've reached your 25 lesson plan limit. Upgrade to Educator for 100 monthly lesson plans.",
      educator: "You've reached your 100 lesson plan limit. Upgrade to Premium for unlimited lesson plans."
    },
    childProfiles: {
      free: "You've reached your 1 child limit. Upgrade to Starter to track up to 5 children.",
      starter: "You've reached your 5 child limit. Upgrade to Educator to track up to 20 children.",
      educator: "You've reached your 20 child limit. Upgrade to Premium to track up to 100 children."
    },
    pdfExports: {
      free: "PDF exports require a paid plan. Upgrade to Starter to export up to 5 PDFs monthly.",
      starter: "You've reached your 5 PDF export limit. Upgrade to Educator for 25 monthly exports.",
      educator: "You've reached your 25 PDF export limit. Upgrade to Premium for unlimited exports."
    },
    reports: {
      free: "Compliance reports require a paid plan. Upgrade to Starter for basic reporting.",
      starter: "You've reached your 10 report limit. Upgrade to Educator for 50 monthly reports.",
      educator: "You've reached your 50 report limit. Upgrade to Premium for unlimited reports."
    },
    forms: {
      free: "Compliance forms require a paid plan. Upgrade to Starter for form management.",
      starter: "You've reached your 10 form limit. Upgrade to Educator for 25 monthly forms.",
      educator: "You've reached your 25 form limit. Upgrade to Premium for unlimited forms."
    },
    parentAccounts: {
      free: "Parent portal access requires a paid plan. Upgrade to Starter for parent communication.",
      starter: "You've reached your 2 parent account limit. Upgrade to Educator for 5 parent accounts.",
      educator: "You've reached your 5 parent account limit. Upgrade to Premium for 20 parent accounts."
    },
    storage: {
      free: "You've reached your 50MB storage limit. Upgrade to Starter for 1GB storage.",
      starter: "You've reached your 1GB storage limit. Upgrade to Educator for 5GB storage.",
      educator: "You've reached your 5GB storage limit. Upgrade to Premium for 20GB storage."
    },
    messages: {
      free: "Messaging requires a paid plan. Upgrade to Starter for parent communication.",
      starter: "You've reached your 50 message limit. Upgrade to Educator for 200 monthly messages.",
      educator: "You've reached your 200 message limit. Upgrade to Premium for 500 monthly messages."
    },
    staffAccounts: {
      free: "Additional staff accounts require a paid plan. Upgrade to Educator for team collaboration.",
      starter: "Additional staff accounts require Educator plan. Upgrade for team collaboration.",
      educator: "You've reached your staff limit. Upgrade to Premium for 3 staff accounts."
    }
  };

  return messages[resource]?.[currentPlan] || `This feature requires a higher plan. Please upgrade to continue.`;
}

function getSuggestedPlan(currentPlan: string): string {
  const upgradePath: Record<string, string> = {
    free: 'starter',
    starter: 'educator', 
    educator: 'premium',
    ai_library: 'premium',
    premium: 'pro',
    pro: 'max'
  };

  return upgradePath[currentPlan] || 'educator';
}

export default useUsageEnforcement;