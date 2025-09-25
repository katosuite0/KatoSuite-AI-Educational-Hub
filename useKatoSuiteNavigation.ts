import { useState, useEffect, useCallback } from 'react';

interface NavigationState {
  currentRoute: string;
  previousRoute: string | null;
  showAuthModal: boolean;
  showUpgradeAlert: boolean;
  upgradeContext: {
    message: string;
    feature: string;
    persistent: boolean;
  };
  showDemoModal: boolean;
  navigationHistory: string[];
  userJourney: {
    sessionStart: Date;
    pageViews: number;
    timeOnCurrentPage: Date;
    conversionGoals: string[];
  };
}

// Enhanced KatoSuite Navigation Hook with Analytics
export function useKatoSuiteNavigation() {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    currentRoute: 'home',
    previousRoute: null,
    showAuthModal: false,
    showUpgradeAlert: false,
    upgradeContext: {
      message: 'Upgrade to unlock all premium features and tools',
      feature: 'premium-features',
      persistent: false
    },
    showDemoModal: false,
    navigationHistory: ['home'],
    userJourney: {
      sessionStart: new Date(),
      pageViews: 1,
      timeOnCurrentPage: new Date(),
      conversionGoals: []
    }
  });

  // Track analytics and user behavior
  const trackPageView = useCallback((route: string, fromRoute?: string) => {
    // In production, this would send to analytics (GA4, etc.)
    console.log(`📊 Navigation: ${fromRoute || 'direct'} → ${route}`);
    
    // Track user journey patterns for conversion optimization
    setNavigationState(prev => ({
      ...prev,
      userJourney: {
        ...prev.userJourney,
        pageViews: prev.userJourney.pageViews + 1,
        timeOnCurrentPage: new Date()
      }
    }));
  }, []);

  // Update route based on URL changes
  useEffect(() => {
    const updateRoute = () => {
      const path = window.location.pathname;
      const urlParams = new URLSearchParams(window.location.search);
      const viewParam = urlParams.get('view');
      
      let route = 'home';
      
      if (viewParam) {
        route = viewParam;
      } else if (path === '/' || path === '') {
        route = 'home';
      } else if (path.startsWith('/pricing')) {
        route = 'pricing';
      } else if (path.startsWith('/blog')) {
        route = 'blog';
      } else if (path.startsWith('/help')) {
        route = 'help';
      } else if (path.startsWith('/store')) {
        route = 'marketplace';
      } else if (path.startsWith('/dashboard')) {
        route = 'dashboard';
      } else {
        route = 'home';
      }
      
      setNavigationState(prev => ({
        ...prev,
        currentRoute: route,
        previousRoute: prev.currentRoute !== route ? prev.currentRoute : prev.previousRoute
      }));

      // Track initial page load
      trackPageView(route);
    };

    updateRoute();
    window.addEventListener('popstate', updateRoute);
    return () => window.removeEventListener('popstate', updateRoute);
  }, [trackPageView]);

  // Enhanced route tracking with analytics
  const setCurrentRoute = useCallback((route: string) => {
    setNavigationState(prev => {
      const fromRoute = prev.currentRoute;
      
      // Update navigation history (keep last 10 pages)
      const updatedHistory = [...prev.navigationHistory, route].slice(-10);
      
      // Track page view
      trackPageView(route, fromRoute);
      
      // Update URL without page reload
      const url = new URL(window.location.href);
      url.searchParams.set('view', route);
      window.history.pushState({}, '', url);
      
      return {
        ...prev,
        previousRoute: prev.currentRoute,
        currentRoute: route,
        navigationHistory: updatedHistory
      };
    });
  }, [trackPageView]);

  // Conversion goal tracking
  const trackConversionGoal = useCallback((goal: string) => {
    setNavigationState(prev => ({
      ...prev,
      userJourney: {
        ...prev.userJourney,
        conversionGoals: [...prev.userJourney.conversionGoals, goal]
      }
    }));
    
    console.log('🎯 Conversion goal tracked:', goal);
  }, []);

  const setShowAuthModal = useCallback((show: boolean) => {
    if (show) {
      // Track auth modal opens for conversion optimization
      console.log('🔐 Auth modal opened from:', navigationState.currentRoute);
      trackConversionGoal('auth_modal_opened');
    }
    
    setNavigationState(prev => ({
      ...prev,
      showAuthModal: show
    }));
  }, [navigationState.currentRoute, trackConversionGoal]);

  const setShowUpgradeAlert = useCallback((show: boolean) => {
    setNavigationState(prev => ({
      ...prev,
      showUpgradeAlert: show
    }));
  }, []);

  const setUpgradeContext = useCallback((context: Partial<NavigationState['upgradeContext']>) => {
    setNavigationState(prev => ({
      ...prev,
      upgradeContext: {
        ...prev.upgradeContext,
        ...context
      }
    }));
  }, []);

  const setShowDemoModal = useCallback((show: boolean) => {
    if (show) {
      // Track demo video views
      console.log('🎥 Demo modal opened from:', navigationState.currentRoute);
      trackConversionGoal('demo_video_opened');
    }
    
    setNavigationState(prev => ({
      ...prev,
      showDemoModal: show
    }));
  }, [navigationState.currentRoute, trackConversionGoal]);

  const showUpgradePrompt = useCallback((feature: string, message: string, persistent = false) => {
    // Track upgrade prompts for conversion optimization
    console.log('💎 Upgrade prompt shown:', { feature, route: navigationState.currentRoute, persistent });
    
    setUpgradeContext({ feature, message, persistent });
    setShowUpgradeAlert(true);
    trackConversionGoal('upgrade_prompt_shown');
  }, [navigationState.currentRoute, setUpgradeContext, trackConversionGoal]);

  // Enhanced navigation helpers
  const goBack = useCallback(() => {
    if (navigationState.previousRoute) {
      setCurrentRoute(navigationState.previousRoute);
    } else {
      setCurrentRoute('home');
    }
  }, [navigationState.previousRoute, setCurrentRoute]);

  const navigateWithAnalytics = useCallback((route: string, analyticsData?: Record<string, any>) => {
    // Track custom analytics data with navigation
    if (analyticsData) {
      console.log('📈 Navigation with analytics:', { route, data: analyticsData });
    }
    setCurrentRoute(route);
  }, [setCurrentRoute]);

  // Get user journey insights
  const getUserJourneyInsights = useCallback(() => {
    const { userJourney, navigationHistory } = navigationState;
    const sessionDuration = Date.now() - userJourney.sessionStart.getTime();
    
    return {
      sessionDurationMinutes: Math.round(sessionDuration / 60000),
      pageViews: userJourney.pageViews,
      navigationPath: navigationHistory.join(' → '),
      conversionGoals: userJourney.conversionGoals,
      bounceRate: userJourney.pageViews === 1 && sessionDuration < 30000,
      engagementLevel: userJourney.pageViews > 3 ? 'high' : userJourney.pageViews > 1 ? 'medium' : 'low'
    };
  }, [navigationState]);

  return {
    ...navigationState,
    setCurrentRoute,
    setShowAuthModal,
    setShowUpgradeAlert,
    setShowDemoModal,
    showUpgradePrompt,
    goBack,
    navigateWithAnalytics,
    trackConversionGoal,
    getUserJourneyInsights
  };
}

export default useKatoSuiteNavigation;