'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../../../packages/utils/hooks/useAuth';
import { usePlanContext } from '../../../../packages/utils/hooks/usePlanContext';
import { Button } from '../../../../packages/design-system/components/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../packages/design-system/components/Card';
import { Modal, ModalActions, ModalBody } from '../../../../packages/design-system/components/Modal';
import { 
  FileText, 
  Users, 
  TrendingUp, 
  Settings, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  Award,
  Play,
  Sparkles,
  ArrowRight,
  Plus,
  Crown
} from 'lucide-react';
import type { Language } from '../../../../packages/types';

interface DashboardPageProps {
  language: Language;
  onUpgrade: (planId?: string) => void;
}

export default function DashboardPage({ language, onUpgrade }: DashboardPageProps) {
  const { user } = useAuth();
  const { plan, limits, usage, hasReachedLimit, getUsagePercentage, canUse } = usePlanContext();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const isEnglish = language === 'en';

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      window.location.href = '/';
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const tools = [
    {
      id: 'lesson-generator',
      name: isEnglish ? 'AI Lesson Generator' : 'Générateur de Leçons IA',
      description: isEnglish ? 'Create curriculum-aligned lesson plans' : 'Créer des plans de leçon alignés sur le curriculum',
      icon: <FileText className="h-6 w-6" />,
      available: true,
      href: '/tools/lesson-generator',
      usage: `${usage.lesson_plans}/${limits.lesson_plans === -1 ? '∞' : limits.lesson_plans}`,
      color: 'text-btn-indigo'
    },
    {
      id: 'child-tracking',
      name: isEnglish ? 'Child Development Tracking' : 'Suivi du Développement de l\'Enfant',
      description: isEnglish ? 'Monitor child progress and milestones' : 'Surveiller le progrès et les étapes des enfants',
      icon: <Users className="h-6 w-6" />,
      available: canUse('child-tracking'),
      href: '/tools/child-tracking',
      usage: `${usage.child_profiles}/${limits.child_profiles === -1 ? '∞' : limits.child_profiles}`,
      color: 'text-btn-mint'
    },
    {
      id: 'compliance-reports',
      name: isEnglish ? 'Compliance Reports' : 'Rapports de Conformité',
      description: isEnglish ? 'Generate regulatory compliance reports' : 'Générer des rapports de conformité réglementaire',
      icon: <Award className="h-6 w-6" />,
      available: canUse('compliance-reporting'),
      href: '/tools/compliance-reports',
      usage: hasReachedLimit('pdf_exports') ? 'Limit reached' : 'Available',
      color: 'text-btn-coral'
    },
    {
      id: 'parent-portal',
      name: isEnglish ? 'Parent Portal' : 'Portail Parent',
      description: isEnglish ? 'Share updates with families' : 'Partager des mises à jour avec les familles',
      icon: <MessageSquare className="h-6 w-6" />,
      available: canUse('parent-portal'),
      href: '/tools/parent-portal',
      usage: 'Available',
      color: 'text-btn-yellow'
    },
    {
      id: 'planner',
      name: isEnglish ? 'Lesson Planner' : 'Planificateur de Leçons',
      description: isEnglish ? 'Organize and schedule lessons' : 'Organiser et programmer les leçons',
      icon: <Calendar className="h-6 w-6" />,
      available: true,
      href: '/tools/planner',
      usage: 'Available',
      color: 'text-btn-indigo'
    },
    {
      id: 'marketplace',
      name: isEnglish ? 'Template Marketplace' : 'Marché de Modèles',
      description: isEnglish ? 'Browse and download templates' : 'Parcourir et télécharger des modèles',
      icon: <BookOpen className="h-6 w-6" />,
      available: canUse('marketplace-access'),
      href: '/marketplace',
      usage: 'Available',
      color: 'text-btn-mint'
    }
  ];

  const addons = [
    {
      id: 'yearbook',
      name: isEnglish ? 'Yearbook Builder' : 'Constructeur d\'Album Souvenir',
      description: isEnglish ? 'Create beautiful yearbooks' : 'Créer de beaux albums souvenirs',
      price: '$19.99 CAD/month',
      icon: <BookOpen className="h-6 w-6" />,
      available: false
    },
    {
      id: 'quiz',
      name: isEnglish ? 'Quiz Maker' : 'Créateur de Quiz',
      description: isEnglish ? 'Interactive learning assessments' : 'Évaluations d\'apprentissage interactives',
      price: '$12.99 CAD/month',
      icon: <Play className="h-6 w-6" />,
      available: false
    },
    {
      id: 'story',
      name: isEnglish ? 'Story Maker' : 'Créateur d\'Histoires',
      description: isEnglish ? 'AI-powered story creation' : 'Création d\'histoires alimentée par IA',
      price: '$14.99 CAD/month',
      icon: <Sparkles className="h-6 w-6" />,
      available: false
    }
  ];

  const handleToolClick = (tool: typeof tools[0]) => {
    if (!tool.available) {
      setSelectedTool(tool.id);
      setShowUpgradeModal(true);
      return;
    }

    if (tool.id === 'lesson-generator' && hasReachedLimit('lesson_plans')) {
      setSelectedTool(tool.id);
      setShowUpgradeModal(true);
      return;
    }

    window.location.href = tool.href;
  };

  const getPlanName = () => {
    switch (plan) {
      case 'free': return isEnglish ? 'Free' : 'Gratuit';
      case 'starter': return isEnglish ? 'Starter' : 'Débutant';
      case 'educator': return isEnglish ? 'Educator Pro' : 'Éducateur Pro';
      case 'enterprise': return isEnglish ? 'Enterprise' : 'Entreprise';
      default: return plan;
    }
  };

  return (
    <div className="page-layout">
      <div className="container-kato">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-heading mb-4">
            {isEnglish ? `Welcome back, ${user.name || 'Educator'}!` : `Bienvenue, ${user.name || 'Éducateur'}!`}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isEnglish 
              ? 'Ready to create amazing learning experiences today?'
              : 'Prêt à créer des expériences d\'apprentissage incroyables aujourd\'hui?'
            }
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid-kato-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isEnglish ? 'Current Plan' : 'Plan Actuel'}
              </CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{getPlanName()}</div>
              <p className="text-xs text-muted-foreground">
                {plan === 'free' 
                  ? (isEnglish ? 'Upgrade for more features' : 'Mettez à niveau pour plus de fonctionnalités')
                  : (isEnglish ? 'Thank you for your support!' : 'Merci pour votre soutien!')
                }
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isEnglish ? 'Lesson Plans' : 'Plans de Leçon'}
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usage.lesson_plans}</div>
              <p className="text-xs text-muted-foreground">
                {limits.lesson_plans === -1 
                  ? (isEnglish ? 'Unlimited' : 'Illimité')
                  : `${limits.lesson_plans - usage.lesson_plans} ${isEnglish ? 'remaining' : 'restants'}`
                }
              </p>
              {limits.lesson_plans !== -1 && (
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getUsagePercentage('lesson_plans')}%` }}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isEnglish ? 'Child Profiles' : 'Profils d\'Enfants'}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usage.child_profiles}</div>
              <p className="text-xs text-muted-foreground">
                {limits.child_profiles === -1 
                  ? (isEnglish ? 'Unlimited' : 'Illimité')
                  : limits.child_profiles === 0
                    ? (isEnglish ? 'Upgrade to track children' : 'Mettez à niveau pour suivre les enfants')
                    : `${limits.child_profiles - usage.child_profiles} ${isEnglish ? 'available' : 'disponibles'}`
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Tools Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {isEnglish ? 'Your Tools' : 'Vos Outils'}
            </h2>
            <Button variant="outline" onClick={() => onUpgrade()}>
              {isEnglish ? 'Upgrade Plan' : 'Mettre à Niveau'}
            </Button>
          </div>

          <div className="grid-kato-3">
            {tools.map((tool) => (
              <Card 
                key={tool.id}
                variant="feature"
                hover={tool.available}
                className={`cursor-pointer transition-all ${
                  !tool.available ? 'opacity-60' : ''
                }`}
                onClick={() => handleToolClick(tool)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-primary/10 ${tool.color}`}>
                      {tool.icon}
                    </div>
                    {!tool.available && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        {isEnglish ? 'Upgrade Required' : 'Mise à Niveau Requise'}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{tool.usage}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Add-ons */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {isEnglish ? 'Premium Add-ons' : 'Modules Complémentaires Premium'}
            </h2>
          </div>

          <div className="grid-kato-3">
            {addons.map((addon) => (
              <Card key={addon.id} variant="outlined" className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-accent text-accent-foreground">
                      {addon.icon}
                    </div>
                    <span className="text-sm font-semibold text-primary">{addon.price}</span>
                  </div>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" fullWidth>
                    <Plus className="h-4 w-4 mr-2" />
                    {isEnglish ? 'Add to Plan' : 'Ajouter au Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {isEnglish ? 'Quick Actions' : 'Actions Rapides'}
            </CardTitle>
            <CardDescription>
              {isEnglish ? 'Get started with common tasks' : 'Commencez avec des tâches courantes'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                onClick={() => handleToolClick(tools[0])}
                disabled={hasReachedLimit('lesson_plans')}
              >
                <Plus className="h-4 w-4 mr-2" />
                {isEnglish ? 'New Lesson Plan' : 'Nouveau Plan de Leçon'}
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/marketplace'}
                disabled={!canUse('marketplace-access')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                {isEnglish ? 'Browse Templates' : 'Parcourir les Modèles'}
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/settings'}
              >
                <Settings className="h-4 w-4 mr-2" />
                {isEnglish ? 'Settings' : 'Paramètres'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upgrade Modal */}
      <Modal
        open={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        title={isEnglish ? 'Upgrade Required' : 'Mise à Niveau Requise'}
        description={
          isEnglish 
            ? 'This feature requires a higher plan. Upgrade now to unlock all the tools you need.'
            : 'Cette fonctionnalité nécessite un plan supérieur. Mettez à niveau maintenant pour débloquer tous les outils dont vous avez besoin.'
        }
      >
        <ModalBody>
          <p className="text-muted-foreground">
            {isEnglish 
              ? 'Upgrade to access premium features and remove limitations.'
              : 'Mettez à niveau pour accéder aux fonctionnalités premium et supprimer les limitations.'
            }
          </p>
        </ModalBody>
        <ModalActions>
          <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
            {isEnglish ? 'Cancel' : 'Annuler'}
          </Button>
          <Button variant="primary" onClick={() => {
            setShowUpgradeModal(false);
            onUpgrade('starter');
          }}>
            {isEnglish ? 'Upgrade Now' : 'Mettre à Niveau Maintenant'}
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}