'use client';

import { useState } from 'react';
import { useAuth } from '../../../../packages/utils/hooks/useAuth';
import { useStripeCheckout } from '../../../../packages/utils/hooks/useStripeCheckout';
import { Button } from '../../../../packages/design-system/components/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../packages/design-system/components/Card';
import { Check, X, Star, Zap, Crown, Building } from 'lucide-react';
import { formatCurrency } from '../../../../packages/design-system/utils';
import type { Language, PlanType } from '../../../../packages/types';

interface PricingPageProps {
  language: Language;
  onAuthClick: () => void;
}

export default function PricingPage({ language, onAuthClick }: PricingPageProps) {
  const { user } = useAuth();
  const { createCheckout, loading } = useStripeCheckout(user?.id || '');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const isEnglish = language === 'en';

  const plans = [
    {
      id: 'free' as PlanType,
      name: isEnglish ? 'Free' : 'Gratuit',
      description: isEnglish ? 'Perfect for trying KatoSuite' : 'Parfait pour essayer KatoSuite',
      price: { monthly: 0, yearly: 0 },
      stripePriceId: { monthly: '', yearly: '' },
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      features: [
        isEnglish ? '3 AI lesson plans per month' : '3 plans de leçon IA par mois',
        isEnglish ? 'Basic templates' : 'Modèles de base',
        isEnglish ? 'Community support' : 'Support communautaire',
        isEnglish ? 'Framework compliance' : 'Conformité des cadres'
      ],
      limitations: [
        isEnglish ? 'No child tracking' : 'Pas de suivi des enfants',
        isEnglish ? 'No PDF exports' : 'Pas d\'exports PDF',
        isEnglish ? 'No compliance reports' : 'Pas de rapports de conformité'
      ]
    },
    {
      id: 'starter' as PlanType,
      name: isEnglish ? 'Starter' : 'Débutant',
      description: isEnglish ? 'For individual educators' : 'Pour les éducateurs individuels',
      price: { monthly: 19, yearly: 190 },
      stripePriceId: { monthly: 'price_starter_monthly', yearly: 'price_starter_yearly' },
      icon: <Star className="h-6 w-6" />,
      popular: true,
      features: [
        isEnglish ? '25 AI lesson plans per month' : '25 plans de leçon IA par mois',
        isEnglish ? 'Up to 10 child profiles' : 'Jusqu\'à 10 profils d\'enfants',
        isEnglish ? 'PDF exports' : 'Exports PDF',
        isEnglish ? 'Basic compliance reports' : 'Rapports de conformité de base',
        isEnglish ? 'Email support' : 'Support par email',
        isEnglish ? 'All frameworks' : 'Tous les cadres'
      ],
      limitations: []
    },
    {
      id: 'educator' as PlanType,
      name: isEnglish ? 'Educator Pro' : 'Éducateur Pro',
      description: isEnglish ? 'For professional educators' : 'Pour les éducateurs professionnels',
      price: { monthly: 39, yearly: 390 },
      stripePriceId: { monthly: 'price_educator_monthly', yearly: 'price_educator_yearly' },
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      features: [
        isEnglish ? 'Unlimited AI lesson plans' : 'Plans de leçon IA illimités',
        isEnglish ? 'Up to 30 child profiles' : 'Jusqu\'à 30 profils d\'enfants',
        isEnglish ? 'Advanced compliance reports' : 'Rapports de conformité avancés',
        isEnglish ? 'Parent portal access' : 'Accès au portail parent',
        isEnglish ? 'Priority support' : 'Support prioritaire',
        isEnglish ? 'Custom templates' : 'Modèles personnalisés',
        isEnglish ? 'Milestone tracking' : 'Suivi des étapes'
      ],
      limitations: []
    },
    {
      id: 'enterprise' as PlanType,
      name: isEnglish ? 'Enterprise' : 'Entreprise',
      description: isEnglish ? 'For centers and organizations' : 'Pour les centres et organisations',
      price: { monthly: 99, yearly: 990 },
      stripePriceId: { monthly: 'price_enterprise_monthly', yearly: 'price_enterprise_yearly' },
      icon: <Building className="h-6 w-6" />,
      popular: false,
      features: [
        isEnglish ? 'Everything in Educator Pro' : 'Tout dans Éducateur Pro',
        isEnglish ? 'Unlimited child profiles' : 'Profils d\'enfants illimités',
        isEnglish ? 'Multi-user management' : 'Gestion multi-utilisateurs',
        isEnglish ? 'Custom branding' : 'Image de marque personnalisée',
        isEnglish ? 'API access' : 'Accès API',
        isEnglish ? 'Dedicated support' : 'Support dédié',
        isEnglish ? 'Training sessions' : 'Sessions de formation'
      ],
      limitations: []
    }
  ];

  const addons = [
    {
      id: 'yearbook',
      name: isEnglish ? 'Yearbook Builder' : 'Constructeur d\'Album Souvenir',
      price: 19.99,
      description: isEnglish ? 'Create beautiful yearbooks' : 'Créez de beaux albums souvenirs'
    },
    {
      id: 'quiz',
      name: isEnglish ? 'Quiz Maker' : 'Créateur de Quiz',
      price: 12.99,
      description: isEnglish ? 'Interactive learning quizzes' : 'Quiz d\'apprentissage interactifs'
    },
    {
      id: 'story',
      name: isEnglish ? 'Story Maker' : 'Créateur d\'Histoires',
      price: 14.99,
      description: isEnglish ? 'AI-powered story creation' : 'Création d\'histoires alimentée par IA'
    }
  ];

  const handlePlanSelect = async (plan: typeof plans[0]) => {
    if (plan.id === 'free') {
      if (!user) {
        onAuthClick();
        return;
      }
      window.location.href = '/dashboard';
      return;
    }

    if (!user) {
      onAuthClick();
      return;
    }

    const priceId = plan.stripePriceId[billingCycle];
    if (priceId) {
      await createCheckout({
        priceId,
        planId: plan.id,
        successUrl: `${window.location.origin}/dashboard?upgrade=success`,
        cancelUrl: `${window.location.origin}/pricing?upgrade=cancelled`
      });
    }
  };

  const yearlyDiscount = (plan: typeof plans[0]) => {
    const monthlyTotal = plan.price.monthly * 12;
    const yearlyPrice = plan.price.yearly;
    if (monthlyTotal === 0 || yearlyPrice === 0) return 0;
    return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
  };

  return (
    <div className="page-layout">
      {/* Header */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-heading mb-6">
              {isEnglish ? 'Choose Your Perfect Plan' : 'Choisissez Votre Plan Parfait'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {isEnglish 
                ? 'Flexible pricing designed for educators, centers, and organizations of all sizes.'
                : 'Tarification flexible conçue pour les éducateurs, centres et organisations de toutes tailles.'
              }
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 p-1 bg-muted rounded-lg w-fit mx-auto">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isEnglish ? 'Monthly' : 'Mensuel'}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-md transition-all ${
                  billingCycle === 'yearly' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isEnglish ? 'Yearly' : 'Annuel'} 
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  {isEnglish ? 'Save 17%' : 'Économisez 17%'}
                </span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid-kato-pricing">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                variant={plan.popular ? 'pricing' : 'default'}
                className={`relative ${plan.popular ? 'border-2 border-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      {isEnglish ? 'Most Popular' : 'Plus Populaire'}
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="text-4xl font-bold">
                      {formatCurrency(plan.price[billingCycle], 'CAD')}
                    </div>
                    <div className="text-muted-foreground">
                      {billingCycle === 'monthly' 
                        ? (isEnglish ? 'per month' : 'par mois')
                        : (isEnglish ? 'per year' : 'par année')
                      }
                    </div>
                    {billingCycle === 'yearly' && yearlyDiscount(plan) > 0 && (
                      <div className="text-sm text-green-600 font-semibold mt-1">
                        {isEnglish ? `Save ${yearlyDiscount(plan)}%` : `Économisez ${yearlyDiscount(plan)}%`}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button
                    onClick={() => handlePlanSelect(plan)}
                    variant={plan.popular ? 'primary' : 'outline'}
                    fullWidth
                    className="mb-6"
                    loading={loading}
                  >
                    {plan.id === 'free' 
                      ? (isEnglish ? 'Get Started Free' : 'Commencer Gratuitement')
                      : (isEnglish ? 'Choose Plan' : 'Choisir le Plan')
                    }
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start gap-3 opacity-60">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-kato bg-accent/30">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Premium Add-ons' : 'Modules Complémentaires Premium'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Enhance your KatoSuite experience with specialized tools designed for modern educators.'
                : 'Améliorez votre expérience KatoSuite avec des outils spécialisés conçus pour les éducateurs modernes.'
              }
            </p>
          </div>

          <div className="grid-kato-3 max-w-4xl mx-auto">
            {addons.map((addon) => (
              <Card key={addon.id} hover className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary mt-4">
                    {formatCurrency(addon.price, 'CAD')}
                    <span className="text-sm text-muted-foreground font-normal">
                      /{isEnglish ? 'month' : 'mois'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" fullWidth>
                    {isEnglish ? 'Learn More' : 'En Savoir Plus'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {isEnglish ? 'Can I change plans anytime?' : 'Puis-je changer de plan à tout moment?'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                    : 'Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Les changements prennent effet immédiatement.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {isEnglish ? 'What frameworks are supported?' : 'Quels cadres sont supportés?'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'We support HDLH, Flight Framework, Accueillir la petite enfance (Canada), and ELOF (United States).'
                    : 'Nous supportons HDLH, Cadre Flight, Accueillir la petite enfance (Canada), et ELOF (États-Unis).'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {isEnglish ? 'Is there a free trial?' : 'Y a-t-il un essai gratuit?'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Yes, our Free plan allows you to try KatoSuite with 3 AI lesson plans per month.'
                    : 'Oui, notre plan Gratuit vous permet d\'essayer KatoSuite avec 3 plans de leçon IA par mois.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}