'use client';

import { useState } from 'react';
import { usePlanContext } from '../../packages/utils/hooks/usePlanContext';
import { useAuth } from '../../packages/utils/hooks/useAuth';
import { useStripeCheckout } from '../../packages/utils/hooks/useStripeCheckout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { UpgradeAlert } from './components/UpgradeAlert';
import { AIVideoModal } from './components/AIVideoModal';
import { UnifiedAppRouter } from './components/UnifiedAppRouter';
import { KatoSuiteLaunchChecker } from './components/KatoSuiteLaunchChecker';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AdvancedSEOOptimizer } from './components/seo/AdvancedSEOOptimizer';
import { LoadingScreen } from './components/LoadingScreen';
import { Providers } from './components/Providers';
import { useKatoSuiteNavigation } from './hooks/useKatoSuiteNavigation';
import { generateSEOProps } from './utils/seo-props';
import { handleApplicationError, getUserRolePermissions } from './utils/error-handling';
import { navigateToRoute } from './constants/route-paths';
import { Settings } from 'lucide-react';
import { Button } from '../../packages/design-system/components/Button';
import type { User, PlanType, Language } from '../../packages/types';

// Environment-safe way to check if we're in development
const isDevelopment = typeof window !== 'undefined' 
  ? window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  : false;

function AppContent() {
  const { user, loading: authLoading, isAdmin } = useAuth();
  const { loading: planLoading, plan } = usePlanContext();
  const { createCheckout } = useStripeCheckout(user?.id || '');
  
  const [language, setLanguage] = useState<Language>('en');
  const [showLaunchChecker, setShowLaunchChecker] = useState(false);
  
  const {
    currentRoute,
    showAuthModal,
    setShowAuthModal,
    showUpgradeAlert,
    setShowUpgradeAlert,
    upgradeContext,
    showDemoModal,
    setShowDemoModal
  } = useKatoSuiteNavigation();

  // Enhanced loading state with professional design
  const loading = authLoading || planLoading;

  // Enhanced user role and permission system
  const { role, isSupport, isEducator, isParent } = getUserRolePermissions(user);

  const handleAuthClick = () => {
    if (!user) {
      setShowAuthModal(true);
    }
  };

  const handleUpgradeClick = async (planId?: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    
    // Create checkout session for upgrade
    if (planId) {
      await createCheckout({
        priceId: planId, // This would map to actual Stripe price IDs
        planId,
      });
    } else {
      // Navigate to pricing page
      navigateToRoute('pricing');
    }
  };

  // Professional loading screen with KatoSuite branding
  if (loading) {
    return <LoadingScreen language={language} />;
  }

  return (
    <ErrorBoundary onError={handleApplicationError}>
      <div className="min-h-screen bg-background">
        {/* Enhanced SEO optimization with live data */}
        <AdvancedSEOOptimizer {...generateSEOProps(currentRoute, language, plan)} />
        
        {/* Professional header with enhanced styling */}
        <header className="nav-kato">
          <Header 
            currentView={currentRoute}
            setCurrentView={(view: string) => navigateToRoute(view)}
            language={language}
            setLanguage={setLanguage}
            user={user}
            onAuthClick={handleAuthClick}
            isSaaSMode={true}
          />
        </header>
        
        {/* Enhanced Launch Readiness Checker (Admin/Dev Only) */}
        {(isAdmin || isDevelopment) && (
          <div className="fixed bottom-6 right-6 z-40">
            <Button
              onClick={() => setShowLaunchChecker(true)}
              variant="outline"
              size="sm"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              icon={<Settings className="h-4 w-4" />}
            >
              Launch Check
            </Button>
          </div>
        )}
        
        {/* Enhanced Upgrade Alert with professional styling */}
        <UpgradeAlert
          show={showUpgradeAlert}
          onClose={() => setShowUpgradeAlert(false)}
          onUpgrade={handleUpgradeClick}
          message={upgradeContext.message}
          feature={upgradeContext.feature}
          language={language}
          position="top"
          persistent={upgradeContext.persistent}
        />
        
        {/* Main Content with enhanced layout */}
        <main 
          id="main-content"
          className="page-layout"
          role="main"
        >
          <UnifiedAppRouter
            language={language}
            user={user as User | null}
            userRole={role}
            isAdmin={isAdmin}
            isSupport={isSupport}
            isEducator={isEducator}
            isParent={isParent}
            onAuthClick={handleAuthClick}
            onShowDemo={() => setShowDemoModal(true)}
            onUpgrade={handleUpgradeClick}
          />
        </main>

        {/* Professional Footer */}
        <footer className="bg-background border-t border-border">
          <Footer 
            language={language}
            setCurrentView={(view: string) => navigateToRoute(view)}
          />
        </footer>
        
        {/* Enhanced Modal System */}
        <AuthModal 
          open={showAuthModal}
          onOpenChange={setShowAuthModal}
          language={language}
        />

        <AIVideoModal 
          open={showDemoModal}
          onOpenChange={setShowDemoModal}
          language={language}
          onStartTrial={() => {
            setShowDemoModal(false);
            setShowAuthModal(true);
          }}
        />

        {/* Enhanced Launch Readiness Checker - 2025 Production Version */}
        {showLaunchChecker && (
          <KatoSuiteLaunchChecker
            language={language}
            onClose={() => setShowLaunchChecker(false)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <ErrorBoundary
      onError={(error: Error, errorInfo: any) => {
        handleApplicationError(error, errorInfo);
      }}
    >
      <Providers>
        <AppContent />
      </Providers>
    </ErrorBoundary>
  );
}