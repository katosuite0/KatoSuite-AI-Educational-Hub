import type { Metadata } from 'next';
import FeatureGrid, { FeatureItem } from '../../components/FeatureGrid';
import { Crown, Star, Building, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free AI Lesson Plans + Affordable Pricing - KatoSuite | Launch August 2025',
  description: 'Start FREE with 3 AI lesson plans monthly. Upgrade for unlimited plans, library access, and child tracking. No credit card required for free tier.',
  keywords: [
    'free lesson plan generator',
    'free ECE software', 
    'affordable educator tools',
    'preschool lesson plan pricing',
    'daycare management software',
    'ECE subscription plans'
  ],
  openGraph: {
    title: 'Affordable Pricing for Early Childhood Educators - KatoSuite',
    description: 'Start free with 3 AI lesson plans monthly. Professional plans from $14.99. Perfect for individual educators and daycares.',
    type: 'website',
  },
};

// Individual Plans
const individualPlans: FeatureItem[] = [
  {
    id: 'free',
    type: 'plan',
    icon: '🆓',
    title: 'Free',
    description: 'Perfect for trying out KatoSuite with essential features',
    price: '$0',
    gradient: 'from-gray-500 to-gray-600',
    status: 'available',
    link: '/checkout?plan=free',
    button: 'Start Free',
    features: [
      '3 lesson plans per month',
      '1 child profile',
      'HDLH & ELOF frameworks',
      'Watermarked exports',
      'Community support'
    ],
    tags: ['Most Popular', 'No Credit Card']
  },
  {
    id: 'starter',
    type: 'plan',
    icon: <Zap className="h-6 w-6" />,
    title: 'Starter',
    description: 'Entry-level plan for tutors and small home daycares',
    price: '$14.99',
    gradient: 'from-blue-500 to-indigo-600',
    status: 'available',
    link: '/checkout?plan=starter',
    button: 'Choose Starter',
    features: [
      '50 lesson plans per month',
      '5 child profiles',
      '2 frameworks',
      'PDF exports',
      'Email support'
    ],
    tags: ['Tutors', 'Home Daycare']
  },
  {
    id: 'educator',
    type: 'plan',
    icon: <Crown className="h-6 w-6" />,
    title: 'Educator',
    description: 'Most popular plan for individual educators',
    price: '$34.99',
    originalPrice: '$49.99',
    gradient: 'from-indigo-500 to-purple-600',
    status: 'popular',
    link: '/checkout?plan=educator',
    button: 'Choose Educator',
    features: [
      '200 lesson plans per month',
      '20 child profiles',
      '3 frameworks',
      'Progress reports',
      'Priority support'
    ],
    tags: ['Most Popular', 'Individual']
  },
  {
    id: 'ai_library',
    type: 'plan',
    icon: <Star className="h-6 w-6" />,
    title: 'AI + Library',
    description: 'Unlimited plans with access to global lesson library',
    price: '$54.99',
    gradient: 'from-purple-500 to-pink-600',
    status: 'available',
    link: '/checkout?plan=ai_library',
    button: 'Choose AI + Library',
    features: [
      'Unlimited lesson plans',
      '50 child profiles',
      '6 frameworks',
      '200+ lesson library',
      'Advanced reports'
    ],
    tags: ['Unlimited', 'Library Access']
  },
  {
    id: 'premium',
    type: 'plan',
    icon: '👑',
    title: 'Premium Solo',
    description: 'For private educators and consultants',
    price: '$79.99',
    gradient: 'from-amber-500 to-orange-600',
    status: 'available',
    link: '/checkout?plan=premium',
    button: 'Choose Premium',
    features: [
      'Unlimited lesson plans',
      '100 child profiles',
      'All 13 CA frameworks',
      'Compliance exports',
      'White-label options'
    ],
    tags: ['Professional', 'Compliance']
  }
];

// Daycare & School Plans
const institutionalPlans: FeatureItem[] = [
  {
    id: 'pro',
    type: 'plan',
    icon: <Building className="h-6 w-6" />,
    title: 'All-In Pro (Daycare)',
    description: 'Perfect for single-site daycares and preschools',
    price: '$149.99',
    gradient: 'from-green-500 to-emerald-600',
    status: 'available',
    link: '/checkout?plan=pro',
    button: 'Choose Pro',
    features: [
      'Unlimited lesson plans',
      '100 child profiles',
      '16 frameworks',
      'Compliance reports',
      'Parent portal included',
      'Multi-teacher accounts'
    ],
    tags: ['Daycare', 'Compliance']
  },
  {
    id: 'max',
    type: 'plan',
    icon: '🏫',
    title: 'All-In Max (School)',
    description: 'For schools and multi-classroom centers',
    price: '$299.99',
    originalPrice: '$399.99',
    gradient: 'from-blue-600 to-purple-700',
    status: 'popular',
    link: '/checkout?plan=max',
    button: 'Choose Max',
    features: [
      'Unlimited lesson plans',
      '250 child profiles',
      '20 frameworks',
      'Advanced analytics',
      'Parent portal',
      'Admin dashboard',
      'Priority support'
    ],
    tags: ['Most Popular', 'Schools']
  },
  {
    id: 'enterprise',
    type: 'plan',
    icon: '🏢',
    title: 'Enterprise',
    description: 'Multi-site operators with custom needs',
    price: '$499.99+',
    gradient: 'from-gray-600 to-gray-800',
    status: 'available',
    link: '/contact?plan=enterprise',
    button: 'Contact Sales',
    features: [
      'Unlimited everything',
      '500+ child profiles',
      '30+ frameworks',
      'White-label platform',
      'API access',
      'Custom integrations',
      'Dedicated support'
    ],
    tags: ['Enterprise', 'Custom']
  }
];

// High-Margin Add-ons
const addons: FeatureItem[] = [
  {
    id: 'library_addon',
    type: 'addon',
    icon: '📚',
    title: 'Global Lesson Library',
    description: '200+ prebuilt lesson plans aligned to Canadian & US frameworks',
    price: '$14.99/mo',
    gradient: 'from-green-500 to-emerald-600',
    status: 'available',
    link: '/checkout?addon=library',
    button: 'Add Library',
    features: ['200+ lesson plans', 'Framework aligned', 'Instant downloads'],
    tags: ['Content', 'Templates']
  },
  {
    id: 'parent_portal_addon',
    type: 'addon',
    icon: <Users className="h-6 w-6" />,
    title: 'Parent Portal (5 parents)',
    description: 'Enable parent accounts with secure access to daily reports',
    price: '$6.99/mo',
    gradient: 'from-blue-500 to-indigo-600',
    status: 'available',
    link: '/checkout?addon=parent_portal',
    button: 'Enable Portal',
    features: ['5 parent accounts', 'Daily reports', 'Secure messaging'],
    tags: ['Communication', 'Parents']
  },
  {
    id: 'ratio_reports',
    type: 'addon',
    icon: '📊',
    title: 'Ratio Compliance Reports',
    description: 'Save and export professional compliance reports for inspections',
    price: '$9.99/mo',
    gradient: 'from-purple-500 to-pink-600',
    status: 'available',
    link: '/checkout?addon=ratio_reports',
    button: 'Add Reports',
    features: ['Professional reports', 'Export functionality', 'Compliance tracking'],
    tags: ['Compliance', 'Legal']
  },
  {
    id: 'worksheet_pack',
    type: 'addon',
    icon: '📝',
    title: 'Worksheet Pack (200+)',
    description: 'Unlock watermark-free printable worksheets for classroom use',
    price: '$14.99/mo',
    gradient: 'from-amber-500 to-orange-600',
    status: 'available',
    link: '/checkout?addon=worksheet_pack',
    button: 'Unlock Worksheets',
    features: ['200+ worksheets', 'No watermarks', 'All learning domains'],
    tags: ['Worksheets', 'Resources']
  },
  {
    id: 'title_generator_pro',
    type: 'addon',
    icon: '✨',
    title: 'Title Generator Pro',
    description: 'Generate unlimited SEO-optimized lesson plan titles',
    price: '$7.99/mo',
    gradient: 'from-indigo-500 to-purple-600',
    status: 'available',
    link: '/checkout?addon=title_generator_pro',
    button: 'Upgrade Generator',
    features: ['Unlimited generations', 'SEO optimization', 'Framework templates'],
    tags: ['AI', 'SEO']
  },
  {
    id: 'yearbook_builder',
    type: 'addon',
    icon: '📖',
    title: 'Yearbook Builder',
    description: 'AI-powered memory books and yearbooks for each child',
    price: '$19.99/mo',
    gradient: 'from-pink-500 to-rose-600',
    status: 'coming-soon',
    features: ['AI-powered design', 'Photo integration', 'Professional layouts'],
    tags: ['Premium', 'AI', 'Memories']
  },
  {
    id: 'advanced_reports',
    type: 'addon',
    icon: '📈',
    title: 'Advanced Reports',
    description: 'Detailed analytics and progress summaries with export capabilities',
    price: '$12.99/mo',
    gradient: 'from-teal-500 to-cyan-600',
    status: 'available',
    link: '/checkout?addon=advanced_reports',
    button: 'Add Analytics',
    features: ['Advanced analytics', 'Custom reports', 'Data exports'],
    tags: ['Analytics', 'Reports']
  },
  {
    id: 'extra_storage',
    type: 'addon',
    icon: '💾',
    title: 'Extra Storage (5GB)',
    description: 'Upload more photos and files with additional cloud storage',
    price: '$6.99/mo',
    gradient: 'from-gray-500 to-gray-600',
    status: 'available',
    link: '/checkout?addon=extra_storage',
    button: 'Add Storage',
    features: ['5GB additional storage', 'Photo uploads', 'File management'],
    tags: ['Storage', 'Files']
  },
  {
    id: 'teacher_account',
    type: 'addon',
    icon: '👥',
    title: 'Extra Teacher Account',
    description: 'Add additional educator logins for team collaboration',
    price: '$14.99/mo',
    gradient: 'from-violet-500 to-purple-600',
    status: 'available',
    link: '/checkout?addon=teacher_account',
    button: 'Add Teacher',
    features: ['Additional login', 'Role permissions', 'Shared access'],
    tags: ['Team', 'Collaboration']
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="hero-section text-center">
        <div className="container-kato">
          <h1 className="text-5xl font-bold gradient-text-main mb-6">
            Free AI Lesson Plans + Affordable Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-open-sans leading-relaxed">
            Start FREE with 3 AI lesson plans monthly. Upgrade for unlimited plans, library access, 
            and child tracking. No credit card required for free tier.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>30-day guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Plans */}
      <FeatureGrid
        title="👩‍🏫 Individual / Solo Educators"
        subtitle="Perfect for individual teachers, tutors, and small home daycares"
        items={individualPlans}
        columns="auto"
        size="large"
        showPricing={true}
        className="py-16"
      />

      {/* Institutional Plans */}
      <FeatureGrid
        title="🏫 Daycares & Schools (Higher Value)"
        subtitle="Comprehensive solutions for larger educational institutions"
        items={institutionalPlans}
        columns="3"
        size="large"
        showPricing={true}
        className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
      />

      {/* Add-ons Marketplace */}
      <FeatureGrid
        title="📦 Premium Add-Ons (High Margin)"
        subtitle="Enhance your plan with specialized features and premium content"
        items={addons}
        columns="3"
        size="medium"
        showPricing={true}
        className="py-16"
      />

      {/* Trust Section */}
      <div className="section-kato bg-white">
        <div className="container-kato text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🔑 Why Higher Pricing Works for KatoSuite
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="trust-callout">
              <h3 className="font-semibold text-lg mb-2">Daycare Budgets</h3>
              <p className="text-gray-600">$300–$500+ is realistic for schools (they pay per classroom, not per teacher)</p>
            </div>
            <div className="trust-callout mint">
              <h3 className="font-semibold text-lg mb-2">Ratio Compliance</h3>
              <p className="text-gray-600">2 educators × 16 children = ~32 max → daycare plans must scale</p>
            </div>
            <div className="trust-callout">
              <h3 className="font-semibold text-lg mb-2">Sticky Upsells</h3>
              <p className="text-gray-600">Library + Compliance Reports = must-have for licensing</p>
            </div>
            <div className="trust-callout mint">
              <h3 className="font-semibold text-lg mb-2">Enterprise Value</h3>
              <p className="text-gray-600">White-label + API → can push $499–$999/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}