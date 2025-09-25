'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../packages/design-system/components/Card';
import { Button } from '../../../../packages/design-system/components/Button';
import { 
  Lightbulb, 
  Users, 
  FileText, 
  TrendingUp, 
  Award, 
  Globe, 
  Calendar,
  MessageSquare,
  BookOpen,
  Sparkles,
  Play,
  Camera,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';
import type { Language } from '../../../../packages/types';

interface FeaturesPageProps {
  language: Language;
  onAuthClick: () => void;
}

export default function FeaturesPage({ language, onAuthClick }: FeaturesPageProps) {
  const isEnglish = language === 'en';

  const roadmapItems = [
    {
      quarter: 'Q1 2025',
      status: 'completed',
      items: [
        {
          title: isEnglish ? 'AI Lesson Generator' : 'Générateur de Leçons IA',
          description: isEnglish ? 'Core lesson planning with framework alignment' : 'Planification de base des leçons avec alignement des cadres',
          icon: <FileText className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Child Development Tracking' : 'Suivi du Développement de l\'Enfant',
          description: isEnglish ? 'Milestone tracking and progress monitoring' : 'Suivi des étapes et surveillance du progrès',
          icon: <Users className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Compliance Reports' : 'Rapports de Conformité',
          description: isEnglish ? 'Regulatory compliance documentation' : 'Documentation de conformité réglementaire',
          icon: <Award className="h-5 w-5" />
        }
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'in-progress',
      items: [
        {
          title: isEnglish ? 'Parent Portal' : 'Portail Parent',
          description: isEnglish ? 'Family communication and engagement' : 'Communication et engagement familial',
          icon: <MessageSquare className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Template Marketplace' : 'Marché de Modèles',
          description: isEnglish ? 'Community-driven lesson templates' : 'Modèles de leçons communautaires',
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Lesson Planner Calendar' : 'Calendrier Planificateur de Leçons',
          description: isEnglish ? 'Advanced scheduling and organization' : 'Planification et organisation avancées',
          icon: <Calendar className="h-5 w-5" />
        }
      ]
    },
    {
      quarter: 'Q3 2025',
      status: 'planned',
      items: [
        {
          title: isEnglish ? 'Yearbook Builder' : 'Constructeur d\'Album Souvenir',
          description: isEnglish ? 'Create beautiful digital yearbooks' : 'Créer de beaux albums souvenirs numériques',
          icon: <Camera className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Quiz Maker' : 'Créateur de Quiz',
          description: isEnglish ? 'Interactive assessment tools' : 'Outils d\'évaluation interactifs',
          icon: <Play className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Story Maker' : 'Créateur d\'Histoires',
          description: isEnglish ? 'AI-powered story creation' : 'Création d\'histoires alimentée par IA',
          icon: <Sparkles className="h-5 w-5" />
        }
      ]
    },
    {
      quarter: 'Q4 2025',
      status: 'planned',
      items: [
        {
          title: isEnglish ? 'Translator Tutor' : 'Tuteur Traducteur',
          description: isEnglish ? 'Real-time language translation' : 'Traduction linguistique en temps réel',
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: isEnglish ? '3D Game World' : 'Monde de Jeu 3D',
          description: isEnglish ? 'Immersive learning experiences' : 'Expériences d\'apprentissage immersives',
          icon: <Zap className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Advanced Analytics' : 'Analyses Avancées',
          description: isEnglish ? 'Deep insights and reporting' : 'Aperçus approfondis et rapports',
          icon: <TrendingUp className="h-5 w-5" />
        }
      ]
    },
    {
      quarter: 'Q1 2026',
      status: 'planned',
      items: [
        {
          title: isEnglish ? 'API Platform' : 'Plateforme API',
          description: isEnglish ? 'Integration with third-party tools' : 'Intégration avec des outils tiers',
          icon: <Globe className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'White-label Solutions' : 'Solutions Marque Blanche',
          description: isEnglish ? 'Custom branding for organizations' : 'Image de marque personnalisée pour les organisations',
          icon: <Award className="h-5 w-5" />
        },
        {
          title: isEnglish ? 'Mobile Apps' : 'Applications Mobiles',
          description: isEnglish ? 'iOS and Android applications' : 'Applications iOS et Android',
          icon: <Lightbulb className="h-5 w-5" />
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500';
      case 'in-progress': return 'text-blue-500';
      case 'planned': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-blue-500" />;
      case 'planned': return <Clock className="h-5 w-5 text-muted-foreground" />;
      default: return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return isEnglish ? 'Live' : 'En Direct';
      case 'in-progress': return isEnglish ? 'In Development' : 'En Développement';
      case 'planned': return isEnglish ? 'Planned' : 'Planifié';
      default: return status;
    }
  };

  return (
    <div className="page-layout">
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
              {isEnglish ? 'Product Roadmap 2025-2026' : 'Feuille de Route Produit 2025-2026'}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {isEnglish 
                ? 'Discover what\'s coming next to KatoSuite. Our commitment to innovation and excellence in early childhood education continues.'
                : 'Découvrez ce qui arrive ensuite à KatoSuite. Notre engagement envers l\'innovation et l\'excellence en éducation de la petite enfance continue.'
              }
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={onAuthClick}
              className="btn-kato-large"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              {isEnglish ? 'Start Your Journey' : 'Commencez Votre Voyage'}
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Feature Development Timeline' : 'Chronologie de Développement des Fonctionnalités'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Track our progress as we build the most comprehensive early childhood education platform.'
                : 'Suivez notre progrès alors que nous construisons la plateforme d\'éducation de la petite enfance la plus complète.'
              }
            </p>
          </div>

          <div className="space-y-12">
            {roadmapItems.map((quarter, quarterIndex) => (
              <div key={quarter.quarter} className="relative">
                {/* Quarter Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(quarter.status)}
                    <h3 className="text-2xl font-semibold">{quarter.quarter}</h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full bg-muted ${getStatusColor(quarter.status)}`}>
                      {getStatusText(quarter.status)}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                {/* Features Grid */}
                <div className="grid-kato-3">
                  {quarter.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      variant="feature"
                      hover={quarter.status === 'completed'}
                      className={quarter.status !== 'completed' ? 'opacity-75' : ''}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className={`p-3 rounded-lg ${
                            quarter.status === 'completed' 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {item.icon}
                          </div>
                          {quarter.status === 'completed' && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      {quarter.status === 'completed' && (
                        <CardContent>
                          <Button variant="outline" fullWidth>
                            {isEnglish ? 'Learn More' : 'En Savoir Plus'}
                          </Button>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>

                {/* Timeline connector */}
                {quarterIndex < roadmapItems.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Support */}
      <section className="section-kato bg-accent/30">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-6">
              {isEnglish ? 'Built for Educational Excellence' : 'Conçu pour l\'Excellence Éducative'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isEnglish 
                ? 'Every feature is designed with Canadian and US early childhood education frameworks in mind.'
                : 'Chaque fonctionnalité est conçue en tenant compte des cadres d\'éducation de la petite enfance canadiens et américains.'
              }
            </p>
          </div>

          <div className="grid-kato-2 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="text-6xl mb-4">🇨🇦</div>
                <CardTitle>{isEnglish ? 'Canada' : 'Canada'}</CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'HDLH, Flight Framework, and Accueillir la petite enfance support with full bilingual capabilities.'
                    : 'Support HDLH, Cadre Flight, et Accueillir la petite enfance avec des capacités bilingues complètes.'
                  }
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-6xl mb-4">🇺🇸</div>
                <CardTitle>{isEnglish ? 'United States' : 'États-Unis'}</CardTitle>
                <CardDescription>
                  {isEnglish 
                    ? 'ELDG and Head Start ELOF framework compliance with state-specific adaptations.'
                    : 'Conformité aux cadres ELDG et Head Start ELOF avec des adaptations spécifiques aux états.'
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
              {isEnglish ? 'Be Part of the Future' : 'Faites Partie du Futur'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {isEnglish 
                ? 'Join us on this journey to revolutionize early childhood education. Start your free trial today.'
                : 'Rejoignez-nous dans ce voyage pour révolutionner l\'éducation de la petite enfance. Commencez votre essai gratuit aujourd\'hui.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={onAuthClick}
                className="btn-kato-large"
                icon={<ArrowRight className="h-5 w-5" />}
              >
                {isEnglish ? 'Start Free Trial' : 'Commencer l\'Essai Gratuit'}
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
                ? 'No credit card required • Access to core features • Cancel anytime'
                : 'Aucune carte de crédit requise • Accès aux fonctionnalités de base • Annulez à tout moment'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}