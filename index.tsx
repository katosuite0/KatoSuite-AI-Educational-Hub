'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mic, 
  Brain, 
  Zap, 
  Sparkles, 
  Volume2, 
  FileText, 
  Users, 
  Globe, 
  CheckCircle, 
  Star,
  Play,
  ArrowRight,
  Headphones,
  MessageSquare,
  Languages,
  Shield,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { VoiceAILessonGenerator } from '../../components/ai-systems/VoiceAILessonGenerator';
import { MultiProviderAIPipeline } from '../../components/ai-systems/MultiProviderAIPipeline';
import { useAuth } from '../../packages/utils/hooks/useAuth';
import { usePlanContext } from '../../packages/utils/hooks/usePlanContext';
import { checkFeatureAccess } from '../../utils/checkFeatureAccess';
import { AdvancedSEOOptimizer } from '../../components/seo/AdvancedSEOOptimizer';

interface VoiceAIPageProps {
  language: 'en' | 'fr';
}

export function VoiceAIPage({ language }: VoiceAIPageProps) {
  const { user } = useAuth();
  const { plan } = usePlanContext();
  const [activeTab, setActiveTab] = useState<'overview' | 'generator' | 'pipeline'>('overview');
  const [showDemo, setShowDemo] = useState(false);

  // Check feature access
  const hasVoiceAI = checkFeatureAccess(user, plan, 'voiceAI');
  const hasAdvancedVoice = checkFeatureAccess(user, plan, 'advancedVoice');
  const hasBilingualVoice = checkFeatureAccess(user, plan, 'bilingualVoice');

  // SEO configuration for Voice AI page
  const seoConfig = {
    title: language === 'fr' 
      ? 'IA Vocale pour Éducateurs - KatoSuite | Génération de Plans de Leçons par la Voix'
      : 'Voice AI for Educators - KatoSuite | Voice-Powered Lesson Plan Generation',
    description: language === 'fr'
      ? 'Révolutionnez votre enseignement avec l\'IA vocale KatoSuite. Créez des plans de leçons conformes aux cadres canadiens simplement en parlant. Technologie Deepgram + Claude AI.'
      : 'Revolutionize your teaching with KatoSuite Voice AI. Create Canadian framework-compliant lesson plans simply by speaking. Powered by Deepgram + Claude AI.',
    keywords: language === 'fr'
      ? 'IA vocale éducation, plans de leçons voix, éducateurs Canada, HDLH Ontario, Flight Alberta, technologie éducative, reconnaissance vocale'
      : 'voice AI education, voice lesson plans, Canadian educators, HDLH Ontario, Flight Alberta, educational technology, speech recognition',
    ogImage: '/images/voice-ai-hero.jpg',
    canonicalUrl: '/voice-ai'
  };

  // Demo statistics
  const demoStats = [
    {
      icon: Clock,
      value: '< 3s',
      label: language === 'fr' ? 'Temps de réponse' : 'Response Time',
      color: 'text-green-600'
    },
    {
      icon: CheckCircle,
      value: '98.5%',
      label: language === 'fr' ? 'Précision' : 'Accuracy',
      color: 'text-blue-600'
    },
    {
      icon: Languages,
      value: '2',
      label: language === 'fr' ? 'Langues' : 'Languages',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      value: '100%',
      label: language === 'fr' ? 'Conformité' : 'Compliance',
      color: 'text-orange-600'
    }
  ];

  // Feature highlights
  const features = [
    {
      icon: Mic,
      title: language === 'fr' ? 'Reconnaissance Vocale Avancée' : 'Advanced Speech Recognition',
      description: language === 'fr' 
        ? 'Technologie Deepgram de pointe pour une transcription précise en français et anglais'
        : 'Cutting-edge Deepgram technology for accurate transcription in French and English',
      premium: false
    },
    {
      icon: Brain,
      title: language === 'fr' ? 'IA Multi-Fournisseurs' : 'Multi-Provider AI',
      description: language === 'fr'
        ? 'Claude AI principal avec basculement automatique vers GPT-4 pour une fiabilité maximale'
        : 'Primary Claude AI with automatic GPT-4 fallover for maximum reliability',
      premium: true
    },
    {
      icon: Globe,
      title: language === 'fr' ? 'Conformité Cadres Canadiens' : 'Canadian Framework Compliance',
      description: language === 'fr'
        ? 'Validation automatique HDLH, Flight, ELOF et Accueillir en temps réel'
        : 'Automatic HDLH, Flight, ELOF and Accueillir validation in real-time',
      premium: false
    },
    {
      icon: FileText,
      title: language === 'fr' ? 'Génération Instantanée' : 'Instant Generation',
      description: language === 'fr'
        ? 'Plans de leçons complets générés en moins de 3 secondes avec scoring qualité'
        : 'Complete lesson plans generated in under 3 seconds with quality scoring',
      premium: true
    },
    {
      icon: Languages,
      title: language === 'fr' ? 'Mode Bilingue Intelligent' : 'Smart Bilingual Mode',
      description: language === 'fr'
        ? 'Génération automatique de contenu bilingue adapté aux besoins québécois'
        : 'Automatic bilingual content generation adapted to Quebec needs',
      premium: true
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Analyse de Performance' : 'Performance Analytics',
      description: language === 'fr'
        ? 'Suivi en temps réel de l\'utilisation et optimisation des coûts IA'
        : 'Real-time usage tracking and AI cost optimization',
      premium: true
    }
  ];

  // Voice command examples
  const voiceExamples = [
    {
      category: language === 'fr' ? 'Développement Moteur' : 'Motor Development',
      examples: [
        language === 'fr' 
          ? "Créer une activité de motricité fine pour les 3-4 ans avec des ciseaux"
          : "Create a fine motor activity for 3-4 year olds using scissors",
        language === 'fr'
          ? "Plan d'activité physique extérieure pour développer l'équilibre"
          : "Outdoor physical activity plan to develop balance"
      ]
    },
    {
      category: language === 'fr' ? 'Apprentissage Cognitif' : 'Cognitive Learning',
      examples: [
        language === 'fr'
          ? "Leçon de mathématiques sur le comptage jusqu'à 10 avec manipulatifs"
          : "Math lesson on counting to 10 with manipulatives",
        language === 'fr'
          ? "Activité de résolution de problèmes pour préscolaires"
          : "Problem-solving activity for preschoolers"
      ]
    },
    {
      category: language === 'fr' ? 'Développement Social' : 'Social Development',
      examples: [
        language === 'fr'
          ? "Jeu coopératif pour apprendre à partager et à tour de rôle"
          : "Cooperative game to learn sharing and turn-taking",
        language === 'fr'
          ? "Activité de gestion des émotions avec livres d'images"
          : "Emotion management activity with picture books"
      ]
    }
  ];

  // Render hero section
  const renderHeroSection = () => (
    <div className="hero-gradient-bg py-20">
      <div className="container-kato text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Technologie Révolutionnaire' : 'Revolutionary Technology'}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold gradient-text-main leading-tight">
            {language === 'fr' 
              ? 'IA Vocale pour Éducateurs'
              : 'Voice AI for Educators'
            }
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Créez des plans de leçons conformes aux cadres canadiens simplement en parlant. Technologie de pointe avec Deepgram et Claude AI.'
              : 'Create Canadian framework-compliant lesson plans simply by speaking. Powered by cutting-edge Deepgram and Claude AI technology.'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {demoStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="btn-kato-large"
            onClick={() => setActiveTab('generator')}
          >
            <Mic className="w-5 h-5 mr-2" />
            {language === 'fr' ? 'Essayer Maintenant' : 'Try Now'}
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setShowDemo(true)}
          >
            <Play className="w-5 h-5 mr-2" />
            {language === 'fr' ? 'Voir la Démo' : 'Watch Demo'}
          </Button>
        </motion.div>
      </div>
    </div>
  );

  // Render features section
  const renderFeaturesSection = () => (
    <section className="section-kato">
      <div className="container-kato">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'fr' 
              ? 'Fonctionnalités Révolutionnaires'
              : 'Revolutionary Features'
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Une technologie de pointe conçue spécifiquement pour les éducateurs canadiens'
              : 'Cutting-edge technology designed specifically for Canadian educators'
            }
          </p>
        </div>

        <div className="grid-kato-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="edu-card-hover h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-purple-blue to-orange rounded-xl">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    {feature.premium && (
                      <Badge className="bg-orange-100 text-orange-700">
                        {language === 'fr' ? 'Pro+' : 'Pro+'}
                      </Badge>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render voice examples section
  const renderVoiceExamplesSection = () => (
    <section className="section-kato bg-gray-50">
      <div className="container-kato">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'fr' 
              ? 'Exemples de Commandes Vocales'
              : 'Voice Command Examples'
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Parlez naturellement pour créer des plans de leçons personnalisés'
              : 'Speak naturally to create personalized lesson plans'
            }
          </p>
        </div>

        <div className="grid-kato-3 mb-8">
          {voiceExamples.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-blue" />
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.examples.map((example, exIndex) => (
                    <div key={exIndex} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Mic className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <p className="text-sm italic">"{example}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => setActiveTab('generator')}
            className="btn-kato-primary"
          >
            <Headphones className="w-5 h-5 mr-2" />
            {language === 'fr' ? 'Commencer à Parler' : 'Start Speaking'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );

  // Render main content based on active tab
  const renderMainContent = () => {
    switch (activeTab) {
      case 'generator':
        return (
          <section className="section-kato">
            <div className="container-kato">
              <VoiceAILessonGenerator
                language={language}
                onUpgradeNeeded={() => {
                  // Handle upgrade needed
                  console.log('Upgrade needed for voice AI');
                }}
                onLessonGenerated={(lesson) => {
                  console.log('Lesson generated:', lesson);
                }}
              />
            </div>
          </section>
        );
      
      case 'pipeline':
        return (
          <section className="section-kato">
            <div className="container-kato">
              <MultiProviderAIPipeline
                language={language}
                onSettingsChange={(settings) => {
                  console.log('Settings changed:', settings);
                }}
              />
            </div>
          </section>
        );
      
      default:
        return (
          <>
            {renderFeaturesSection()}
            {renderVoiceExamplesSection()}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Optimization */}
      <AdvancedSEOOptimizer 
        {...seoConfig}
        language={language}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "KatoSuite Voice AI",
          "description": seoConfig.description,
          "applicationCategory": "Educational Software",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "19.99",
            "priceCurrency": "CAD"
          },
          "featureList": [
            "Voice-powered lesson planning",
            "Multi-language support",
            "Canadian framework compliance",
            "Real-time transcription",
            "AI-powered content generation"
          ]
        }}
      />

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-border">
        <div className="container-kato">
          <div className="flex items-center gap-1 py-3">
            <Button
              variant={activeTab === 'overview' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              {language === 'fr' ? 'Aperçu' : 'Overview'}
            </Button>
            
            <Button
              variant={activeTab === 'generator' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('generator')}
              className="flex items-center gap-2"
              disabled={!hasVoiceAI}
            >
              <Mic className="w-4 h-4" />
              {language === 'fr' ? 'Générateur' : 'Generator'}
              {!hasVoiceAI && (
                <Badge variant="outline" className="ml-2 text-xs">
                  Pro+
                </Badge>
              )}
            </Button>
            
            <Button
              variant={activeTab === 'pipeline' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('pipeline')}
              className="flex items-center gap-2"
              disabled={!hasAdvancedVoice}
            >
              <Brain className="w-4 h-4" />
              {language === 'fr' ? 'Pipeline IA' : 'AI Pipeline'}
              {!hasAdvancedVoice && (
                <Badge variant="outline" className="ml-2 text-xs">
                  Deluxe
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section (only show on overview) */}
      {activeTab === 'overview' && renderHeroSection()}

      {/* Main Content */}
      {renderMainContent()}

      {/* CTA Section (only show on overview) */}
      {activeTab === 'overview' && (
        <section className="section-kato bg-gradient-to-br from-purple-blue to-orange text-white">
          <div className="container-kato text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'fr' 
                  ? 'Prêt à Révolutionner Votre Enseignement ?'
                  : 'Ready to Revolutionize Your Teaching?'
                }
              </h2>
              
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Rejoignez des milliers d\'éducateurs canadiens qui utilisent déjà l\'IA vocale pour créer des plans de leçons exceptionnels.'
                  : 'Join thousands of Canadian educators already using voice AI to create exceptional lesson plans.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-purple-blue hover:bg-gray-100"
                  onClick={() => setActiveTab('generator')}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {language === 'fr' ? 'Essayer Gratuitement' : 'Try Free'}
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-blue"
                >
                  <Users className="w-5 h-5 mr-2" />
                  {language === 'fr' ? 'Voir les Plans' : 'View Plans'}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

export default VoiceAIPage;