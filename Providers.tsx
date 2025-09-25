'use client';

import { AuthProvider } from '../../../packages/utils/hooks/useAuth';
import { PlanProvider } from '../../../packages/utils/hooks/usePlanContext';
import { UpgradeModalProvider } from './UpgradeModal';
import { Toaster } from '../../../packages/design-system/components/Toaster';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <PlanProvider>
        <UpgradeModalProvider>
          {children}
          <Toaster 
            position="top-right"
            expand={false}
            richColors
            closeButton
            toastOptions={{
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </UpgradeModalProvider>
      </PlanProvider>
    </AuthProvider>
  );
}

export default Providers;