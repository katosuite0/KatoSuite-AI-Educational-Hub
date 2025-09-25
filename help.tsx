'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../packages/design-system/components/Card';
import { Button } from '../../../../packages/design-system/components/Button';
import { Modal, ModalActions, ModalBody } from '../../../../packages/design-system/components/Modal';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Star,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Lightbulb,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Settings,
  CreditCard,
  Users,
  Calendar,
  Award,
  Globe
} from 'lucide-react';
import { KATOSUITE_FAQS } from '../../../../utils/seo-schema-data';
import type { Language } from '../../../../packages/types';

interface HelpPageProps {
  language: Language;
  onNavigate: (route: string) => void;
}

export default function HelpPage({ language, onNavigate }: HelpPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFAQ, setSelectedFAQ] = useState<typeof KATOSUITE_FAQS[0] | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const isEnglish = language === 'en';

  const helpCategories = [
    {
      id: 'getting-started',
      name: isEnglish ? 'Getting Started' : 'Commencer',
      icon: Lightbulb,
      description: isEnglish ? 'New to KatoSuite? Start here for the basics.' : 'Nouveau sur KatoSuite? Commencez ici pour les bases.',
      count: KATOSUITE_FAQS.filter(faq => faq.category === 'features').length
    },
    {
      id: 'frameworks',
      name: isEnglish ? 'Frameworks' : 'Cadres',
      icon: BookOpen,
      description: isEnglish ? 'Learn about HDLH, Flight, and ELOF support.' : 'Apprenez à propos du support HDLH, Flight, et ELOF.',
      count: KATOSUITE_FAQS.filter(faq => faq.category === 'frameworks').length
    },
    {
      id: 'features',
      name: isEnglish ? 'Features & Tools' : 'Fonctionnalités et Outils',
      icon: Settings,
      description: isEnglish ? 'Master KatoSuite\'s powerful features.' : 'Maîtrisez les fonctionnalités puissantes de KatoSuite.',
      count: KATOSUITE_FAQS.filter(faq => faq.category === 'features').length
    },
    {
      id: 'billing',
      name: isEnglish ? 'Billing & Plans' : 'Facturation et Plans',
      icon: CreditCard,
      description: isEnglish ? 'Manage your subscription and billing.' : 'Gérez votre abonnement et facturation.',
      count: KATOSUITE_FAQS.filter(faq => faq.category === 'billing').length
    },
    {
      id: 'compliance',
      name: isEnglish ? 'Compliance' : 'Conformité',
      icon: Award,
      description: isEnglish ? 'Regulatory compliance and reporting.' : 'Conformité réglementaire et rapports.',
      count: KATOSUITE_FAQS.filter(faq => faq.category === 'compliance').length
    },
    {
      id: 'language',
      name: isEnglish ? 'Bilingual Support' : 'Support Bilingue',
      icon: Globe,
      description: isEnglish ? 'English and French language features.' : 'Fonctionnalités en anglais et français.',
      count: KATOSUITE_FAQS.filter(faq => faq.category === 'language').length
    }
  ];

  const filteredFAQs = KATOSUITE_FAQS.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleContactSupport = () => {
    setShowContactModal(true);
  };

  return (
    <div className="page-layout">
      {/* Help Center Header */}
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
              {isEnglish ? 'Help Center' : 'Centre d\'Aide'}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {isEnglish 
                ? 'Get help with KatoSuite, find tutorials, and learn how to make the most of your early childhood education platform.'
                : 'Obtenez de l\'aide avec KatoSuite, trouvez des tutoriels, et apprenez comment tirer le meilleur parti de votre plateforme d\'éducation de la petite enfance.'
              }
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={isEnglish ? 'Search help articles...' : 'Rechercher des articles d\'aide...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => onNavigate('dashboard')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Lightbulb className="h-4 w-4" />
                {isEnglish ? 'Go to Dashboard' : 'Aller au Tableau de Bord'}
              </Button>
              <Button
                onClick={() => onNavigate('pricing')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <CreditCard className="h-4 w-4" />
                {isEnglish ? 'View Pricing' : 'Voir la Tarification'}
              </Button>
              <Button
                onClick={handleContactSupport}
                variant="outline"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {isEnglish ? 'Contact Support' : 'Contacter le Support'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-kato">
        <div className="container-kato">
          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-heading text-center mb-12">
              {isEnglish ? 'Browse by Category' : 'Parcourir par Catégorie'}
            </h2>
            
            <div className="grid-kato-3">
              {helpCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={category.id}
                    variant="feature"
                    hover
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {category.count} {isEnglish ? 'articles' : 'articles'}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-medium">
                          {isEnglish ? 'Browse Articles' : 'Parcourir les Articles'}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-heading mb-6">
                {isEnglish ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
              </h2>
              {selectedCategory !== 'all' && (
                <div className="flex items-center justify-center gap-4">
                  <span className="text-muted-foreground">
                    {isEnglish ? 'Filtered by:' : 'Filtré par:'} {helpCategories.find(cat => cat.id === selectedCategory)?.name}
                  </span>
                  <Button
                    onClick={() => setSelectedCategory('all')}
                    variant="outline"
                    size="sm"
                  >
                    {isEnglish ? 'Clear Filter' : 'Effacer le Filtre'}
                  </Button>
                </div>
              )}
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQs.map((faq, index) => (
                <Card key={index} variant="outlined" className="overflow-hidden">
                  <button
                    className="w-full text-left p-6 hover:bg-accent/50 transition-colors"
                    onClick={() => setSelectedFAQ(selectedFAQ?.question === faq.question ? null : faq)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <h3 className="font-semibold text-foreground text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <ArrowRight 
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          selectedFAQ?.question === faq.question ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {selectedFAQ?.question === faq.question && (
                    <div className="px-6 pb-6">
                      <div className="pl-8 pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                        
                        {/* Helpful Rating */}
                        <div className="mt-6 pt-4 border-t border-border">
                          <p className="text-sm font-medium text-foreground mb-3">
                            {isEnglish ? 'Was this helpful?' : 'Était-ce utile?'}
                          </p>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-2"
                            >
                              <ThumbsUp className="h-3 w-3" />
                              {isEnglish ? 'Yes' : 'Oui'}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center gap-2"
                            >
                              <ThumbsDown className="h-3 w-3" />
                              {isEnglish ? 'No' : 'Non'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <HelpCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-heading text-xl mb-2">
                  {isEnglish ? 'No Results Found' : 'Aucun Résultat Trouvé'}
                </h3>
                <p className="text-body text-muted-foreground mb-6">
                  {isEnglish 
                    ? 'Try adjusting your search or browse different categories.'
                    : 'Essayez d\'ajuster votre recherche ou parcourez différentes catégories.'
                  }
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                >
                  {isEnglish ? 'View All FAQs' : 'Voir Toutes les FAQ'}
                </Button>
              </div>
            )}
          </div>

          {/* Contact Support CTA */}
          <div className="text-center">
            <Card variant="feature" className="bg-gradient-to-r from-indigo-50 to-purple-50 max-w-3xl mx-auto">
              <CardContent className="p-12">
                <MessageCircle className="h-16 w-16 mx-auto text-primary mb-6" />
                <h3 className="text-heading text-3xl mb-4">
                  {isEnglish ? 'Still Need Help?' : 'Avez-vous Encore Besoin d\'Aide?'}
                </h3>
                <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isEnglish 
                    ? 'Can\'t find what you\'re looking for? Our support team is here to help you make the most of KatoSuite.'
                    : 'Vous ne trouvez pas ce que vous cherchez? Notre équipe de support est là pour vous aider à tirer le meilleur parti de KatoSuite.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleContactSupport}
                    variant="primary"
                    className="btn-kato-large"
                    icon={<MessageCircle className="h-5 w-5" />}
                  >
                    {isEnglish ? 'Contact Support' : 'Contacter le Support'}
                  </Button>
                  <Button
                    onClick={() => onNavigate('home')}
                    variant="outline"
                    size="lg"
                  >
                    {isEnglish ? 'Back to Home' : 'Retour à l\'Accueil'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Support Modal */}
      <Modal
        open={showContactModal}
        onClose={() => setShowContactModal(false)}
        title={isEnglish ? 'Contact Support' : 'Contacter le Support'}
        description={isEnglish ? 'Get in touch with our team' : 'Contactez notre équipe'}
      >
        <ModalBody>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground mb-4">
                {isEnglish 
                  ? 'Choose the best way to reach our support team:'
                  : 'Choisissez la meilleure façon de contacter notre équipe de support:'
                }
              </p>
            </div>
            
            <div className="grid gap-3">
              <a
                href="mailto:support@katosuite.com"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Email Support</div>
                  <div className="text-sm text-muted-foreground">support@katosuite.com</div>
                </div>
              </a>
              
              <a
                href="https://katosuite.org/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">
                    {isEnglish ? 'Contact Form' : 'Formulaire de Contact'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {isEnglish ? 'Detailed support request' : 'Demande de support détaillée'}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </ModalBody>
        <ModalActions>
          <Button variant="outline" onClick={() => setShowContactModal(false)}>
            {isEnglish ? 'Close' : 'Fermer'}
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}