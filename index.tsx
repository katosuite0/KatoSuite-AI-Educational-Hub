'use client';

import { useState } from 'react';
import { useAuth } from '../../../../packages/utils/hooks/useAuth';
import { usePlanContext } from '../../../../packages/utils/hooks/usePlanContext';
import { Button } from '../../../../packages/design-system/components/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../packages/design-system/components/Card';
import { Lightbulb, Users, FileText, TrendingUp, Award, Globe, ArrowRight, Play } from 'lucide-react';
import type { Language } from '../../../../packages/types';

interface HomePageProps {
  language: Language;
  onAuthClick: () => void;
  onShowDemo: () => void;
}

export default function HomePage({ language, onAuthClick, onShowDemo }: HomePageProps) {
  const { user } = useAuth();
  const { plan } = usePlanContext();

  const isEnglish = language === 'en';

  const heroContent = {
    en: {
      title: "AI-Powered Lesson Plans for Early Childhood Educators",
      subtitle: "Create curriculum-aligned, bilingual lesson plans in minutes. Trusted by educators across Canada and the United States.",
      cta: "Start Free Trial",
      demo: "Watch Demo",
      features: [
        "HDLH & Flight Framework Compliant",
        "English & French Bilingual Support", 
        "Child Development Tracking",
        "Compliance Reporting Ready"
      ]
    },
    fr: {
      title: "Plans de Leçon IA pour Éducateurs de la Petite Enfance",
      subtitle: "Créez des plans de leçon bilingues alignés sur les programmes en quelques minutes. Utilisé par les éducateurs au Canada et aux États-Unis.",
      cta: "Commencer l'Essai Gratuit",
      demo: "Voir la Démo",
      features: [
        "Conforme aux Cadres HDLH et Flight",
        "Support Bilingue Anglais et Français",
        "Suivi du Développement de l'Enfant", 
        "Rapports de Conformité Prêts"
      ]
    }
  };

  const content = heroContent[language];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-kato">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Lightbulb className="lightbulb-logo-large mr-4" />
              <span className="text-4xl font-inter font-bold gradient-text-main">
                KatoSuite
              </span>
            </div>
            
            <h1 className="text-heading mb-6">
              {content.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="primary"
                size="lg"
                onClick={user ? () => window.location.href = '/dashboard' : onAuthClick}
                className="btn-kato-large"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                {content.cta}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onShowDemo}
                icon={<Play className="h-5 w-5" />}
              >
                {content.demo}
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Everything You Need for Excellence in Early Childhood Education' : 'Tout ce dont vous avez besoin pour l\'excellence en éducation de la petite enfance'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Comprehensive tools designed specifically for Canadian and US early childhood education frameworks.'
                : 'Outils complets conçus spécifiquement pour les cadres d\'éducation de la petite enfance canadiens et américains.'
              }
            </p>
          </div>

          <div className="grid-kato-3">
            <Card variant="feature" hover className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-btn-indigo mx-auto mb-4" />
                <CardTitle>
                  {isEnglish ? 'AI Lesson Generator' : 'Générateur de Leçons IA'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Create comprehensive lesson plans aligned with HDLH, Flight, and ELOF frameworks in minutes.'
                    : 'Créez des plans de leçon complets alignés sur les cadres HDLH, Flight et ELOF en quelques minutes.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="feature" hover className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-btn-mint mx-auto mb-4" />
                <CardTitle>
                  {isEnglish ? 'Child Development Tracking' : 'Suivi du Développement de l\'Enfant'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Monitor and document child progress with milestone tracking and observation tools.'
                    : 'Surveillez et documentez le progrès des enfants avec des outils de suivi des étapes et d\'observation.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="feature" hover className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-btn-coral mx-auto mb-4" />
                <CardTitle>
                  {isEnglish ? 'Compliance Reporting' : 'Rapports de Conformité'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Generate professional reports that meet regulatory requirements and licensing standards.'
                    : 'Générez des rapports professionnels qui répondent aux exigences réglementaires et aux normes de licence.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="feature" hover className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-btn-yellow mx-auto mb-4" />
                <CardTitle>
                  {isEnglish ? 'Bilingual Support' : 'Support Bilingue'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Full English and French language support for Canadian bilingual education requirements.'
                    : 'Support complet en anglais et en français pour les exigences d\'éducation bilingue canadienne.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="feature" hover className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-btn-indigo mx-auto mb-4" />
                <CardTitle>
                  {isEnglish ? 'Analytics & Insights' : 'Analyses et Aperçus'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Track classroom performance and identify learning opportunities with detailed analytics.'
                    : 'Suivez les performances de la classe et identifiez les opportunités d\'apprentissage avec des analyses détaillées.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="feature" hover className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-btn-mint mx-auto mb-4" />
                <CardTitle>
                  {isEnglish ? 'Smart Templates' : 'Modèles Intelligents'}
                </CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Access hundreds of pre-built templates and activities tailored to different age groups.'
                    : 'Accédez à des centaines de modèles et d\'activités pré-construits adaptés aux différents groupes d\'âge.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Support Section */}
      <section className="section-kato bg-accent/30">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Trusted Framework Support' : 'Support de Cadre de Confiance'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Built specifically for Canadian and US early childhood education standards.'
                : 'Conçu spécifiquement pour les normes d\'éducation de la petite enfance canadiennes et américaines.'
              }
            </p>
          </div>

          <div className="grid-kato-2 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="text-4xl mb-4">🇨🇦</div>
                <CardTitle>Canada</CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'HDLH (How Does Learning Happen?), Flight Framework, and Accueillir la petite enfance'
                    : 'HDLH (Comment l\'apprentissage se déroule-t-il ?), Cadre Flight, et Accueillir la petite enfance'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="text-4xl mb-4">🇺🇸</div>
                <CardTitle>United States</CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'Early Learning and Development Guidelines (ELDG) and Head Start Early Learning Outcomes Framework (ELOF)'
                    : 'Directives d\'apprentissage et de développement précoce (ELDG) et Cadre des résultats d\'apprentissage précoce Head Start (ELOF)'
                  }
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Ready to Transform Your Teaching?' : 'Prêt à Transformer Votre Enseignement?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {isEnglish 
                ? 'Join thousands of educators who trust KatoSuite for their lesson planning and child development needs.'
                : 'Rejoignez des milliers d\'éducateurs qui font confiance à KatoSuite pour leurs besoins de planification de leçons et de développement de l\'enfant.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={user ? () => window.location.href = '/dashboard' : onAuthClick}
                className="btn-kato-large"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                {content.cta}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/pricing'}
              >
                {isEnglish ? 'View Pricing' : 'Voir la Tarification'}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              {isEnglish 
                ? 'Free trial • No credit card required • Cancel anytime'
                : 'Essai gratuit • Aucune carte de crédit requise • Annulez à tout moment'
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
}