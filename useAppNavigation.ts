'use client';

import { useState, useCallback, useEffect } from 'react';
import { useAuth } from '../components/Providers';
import { usePlan } from '../components/PlanContext';
import { useUpgradeModal } from '../components/UpgradeModal';

// Types for navigation state
export type ViewType = 
  | 'saas-home' 
  | 'how-it-works'
  | 'pricing'
  | 'blog'
  | 'free-tools'
  | 'library'
  | 'marketplace'
  | 'coming-soon'
  | 'resources-hub'
  | 'framework-landing'
  | 'yearbook-landing'
  | 'dashboard'
  | 'account'
  | 'settings'
  | 'lesson-generator'
  | 'generator'
  | 'tracking'
  | 'child-tracking'
  | 'main-dashboard'
  | 'new-dashboard'
  | 'advanced-dashboard'
  | 'analytics-dashboard'
  | 'business-dashboard'
  | 'parent-portal'
  | 'parent-dashboard'
  | 'role-dashboard'
  | 'cto'
  | 'developer'
  | 'ai-engineer'
  | 'kids-language';

export interface UpgradeContext {
  message: string;
  feature: string;
  persistent: boolean;
  urgency?: 'low' | 'medium' | 'high';
}

export interface LessonPlan {
  id: string;
  title: string;
  theme: string;
  ageGroup: string;
  duration: string;
  framework: string;
  objectives: string;
  materials: string[];
  activities: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AppNavigationState {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  generatedLessonPlan: LessonPlan | null;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  showUpgradeAlert: boolean;
  setShowUpgradeAlert: (show: boolean) => void;
  upgradeContext: UpgradeContext;
  showDemoModal: boolean;
  setShowDemoModal: (show: boolean) => void;
  
  // Action handlers
  handleLessonPlanGenerated: (plan: LessonPlan) => void;
  handleViewLessonPlan: (planId: string) => void;
  handleEditLessonPlan: (planId: string) => void;
  handleUpgrade: (planId?: string) => void;
  handleUsageLimit: (feature: string) => void;
  handleFeatureGate: (feature: string, requiredPlan?: string) => void;
  handleQuizComplete: (results: any) => void;
  handleDashboardNavigate: (section: string) => void;
  handlePDFDownload: (planId: string) => void;
}

export function useAppNavigation(): AppNavigationState {
  const { user } = useAuth();
  const { plan, canUse, hasReachedLimit } = usePlan();
  const { showUpgradeModal } = useUpgradeModal();
  
  // Core navigation state
  const [currentView, setCurrentView] = useState<ViewType>('saas-home');
  const [generatedLessonPlan, setGeneratedLessonPlan] = useState<LessonPlan | null>(null);
  
  // Modal states
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUpgradeAlert, setShowUpgradeAlert] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  
  // Upgrade context state
  const [upgradeContext, setUpgradeContext] = useState<UpgradeContext>({
    message: 'Upgrade to unlock all premium features and tools',
    feature: 'premium-features',
    persistent: false,
    urgency: 'medium'
  });

  // Initialize view based on URL or user state
  useEffect(() => {
    const initializeView = () => {
      const path = typeof window !== 'undefined' ? window.location.pathname : '/';
      
      // Map URL paths to view types
      switch (path) {
        case '/':
          setCurrentView('saas-home');
          break;
        case '/how-it-works':
          setCurrentView('how-it-works');
          break;
        case '/pricing':
          setCurrentView('pricing');
          break;
        case '/blog':
          setCurrentView('blog');
          break;
        case '/dashboard':
          setCurrentView(user ? 'dashboard' : 'saas-home');
          break;
        case '/generator':
        case '/lesson-generator':
          setCurrentView('lesson-generator');
          break;
        case '/library':
          setCurrentView('library');
          break;
        case '/tracking':
          setCurrentView('tracking');
          break;
        case '/account':
          setCurrentView('account');
          break;
        default:
          // Handle dynamic routes or fallback
          if (path.startsWith('/blog/')) {
            setCurrentView('blog');
          } else if (user && path.startsWith('/dashboard')) {
            setCurrentView('dashboard');
          } else {
            setCurrentView('saas-home');
          }
      }
    };

    initializeView();
  }, [user]);

  // Handle lesson plan generation
  const handleLessonPlanGenerated = useCallback((plan: LessonPlan) => {
    setGeneratedLessonPlan(plan);
    
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lesson_plan_generated', {
        theme: plan.theme,
        framework: plan.framework,
        age_group: plan.ageGroup
      });
    }
    
    // Navigate to view
    setCurrentView('lesson-generator');
  }, []);

  // Handle viewing a lesson plan
  const handleViewLessonPlan = useCallback((planId: string) => {
    // In a real app, this would fetch the plan from the database
    console.log('Viewing lesson plan:', planId);
    setCurrentView('lesson-generator');
  }, []);

  // Handle editing a lesson plan
  const handleEditLessonPlan = useCallback((planId: string) => {
    // Check if user can edit (might require certain plan)
    if (!canUse('lesson-editing')) {
      handleFeatureGate('lesson-editing', 'educator');
      return;
    }
    
    console.log('Editing lesson plan:', planId);
    setCurrentView('lesson-generator');
  }, [canUse]);

  // Handle upgrade flow
  const handleUpgrade = useCallback((planId?: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    // Construct upgrade URL with tracking parameters
    const upgradeUrl = planId 
      ? `/pricing?plan=${planId}&source=app&feature=${upgradeContext.feature}`
      : `/pricing?source=app&feature=${upgradeContext.feature}`;
    
    // Navigate to pricing page
    if (typeof window !== 'undefined') {
      window.location.href = upgradeUrl;
    }
    
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'upgrade_initiated', {
        current_plan: plan,
        target_plan: planId,
        source: 'app',
        feature: upgradeContext.feature
      });
    }
  }, [user, plan, upgradeContext]);

  // Handle usage limit reached
  const handleUsageLimit = useCallback((feature: string) => {
    const featureMessages: Record<string, UpgradeContext> = {
      'lesson-plans': {
        message: 'You\'ve reached your monthly lesson plan limit. Upgrade to generate unlimited plans!',
        feature: 'unlimited-lesson-plans',
        persistent: true,
        urgency: 'high'
      },
      'child-profiles': {
        message: 'Upgrade to track more children and create detailed development profiles.',
        feature: 'child-tracking',
        persistent: false,
        urgency: 'medium'
      },
      'observations': {
        message: 'You\'ve reached your observation limit. Upgrade to document unlimited learning moments.',
        feature: 'unlimited-observations',
        persistent: true,
        urgency: 'medium'
      },
      'reports': {
        message: 'Generate professional compliance reports with an upgraded plan.',
        feature: 'compliance-reports',
        persistent: false,
        urgency: 'medium'
      }
    };

    const context = featureMessages[feature] || {
      message: 'Upgrade your plan to unlock this feature.',
      feature: feature,
      persistent: false,
      urgency: 'medium' as const
    };

    setUpgradeContext(context);
    setShowUpgradeAlert(true);

    // Also show upgrade modal for high urgency
    if (context.urgency === 'high') {
      showUpgradeModal({
        feature: context.feature,
        urgency: context.urgency,
        source: currentView,
        customMessage: context.message
      });
    }
  }, [currentView, showUpgradeModal]);

  // Handle feature gating
  const handleFeatureGate = useCallback((feature: string, requiredPlan?: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    // Check if user can access feature
    if (canUse(feature)) {
      return; // User has access
    }

    // Show upgrade modal for gated feature
    showUpgradeModal({
      feature,
      urgency: 'medium',
      source: currentView,
      customMessage: requiredPlan 
        ? `This feature requires the ${requiredPlan.charAt(0).toUpperCase() + requiredPlan.slice(1)} plan or higher.`
        : undefined
    });

    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feature_gate_hit', {
        feature,
        required_plan: requiredPlan,
        current_plan: plan,
        source: currentView
      });
    }
  }, [user, canUse, showUpgradeModal, currentView, plan]);

  // Handle quiz completion
  const handleQuizComplete = useCallback((results: any) => {
    console.log('Quiz completed:', results);
    
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_completed', {
        score: results.score,
        topic: results.topic
      });
    }
    
    // Could trigger upgrade prompts based on results
    if (results.shouldUpgrade) {
      handleFeatureGate('advanced-features', 'educator');
    }
  }, [handleFeatureGate]);

  // Handle dashboard navigation
  const handleDashboardNavigate = useCallback((section: string) => {
    // Check feature access for certain sections
    const restrictedSections = ['team-management', 'compliance-reports', 'parent-portal'];
    
    if (restrictedSections.includes(section) && !canUse(section)) {
      handleFeatureGate(section);
      return;
    }
    
    // Navigate to dashboard with section
    setCurrentView('dashboard');
    
    // In a real app, you might set a dashboard section state
    console.log('Navigating to dashboard section:', section);
  }, [canUse, handleFeatureGate]);

  // Handle PDF download
  const handlePDFDownload = useCallback((planId: string) => {
    // Check if user can download PDFs
    if (!canUse('pdf-export')) {
      handleFeatureGate('pdf-export', 'starter');
      return;
    }

    // In a real app, this would trigger PDF generation
    console.log('Downloading PDF for plan:', planId);
    
    // Track analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pdf_download', {
        plan_id: planId,
        plan_type: plan
      });
    }
  }, [canUse, handleFeatureGate, plan]);

  return {
    currentView,
    setCurrentView,
    generatedLessonPlan,
    showAuthModal,
    setShowAuthModal,
    showUpgradeAlert,
    setShowUpgradeAlert,
    upgradeContext,
    showDemoModal,
    setShowDemoModal,
    handleLessonPlanGenerated,
    handleViewLessonPlan,
    handleEditLessonPlan,
    handleUpgrade,
    handleUsageLimit,
    handleFeatureGate,
    handleQuizComplete,
    handleDashboardNavigate,
    handlePDFDownload
  };
}

export default useAppNavigation;