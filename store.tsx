'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../packages/design-system/components/Card';
import { Button } from '../../../../packages/design-system/components/Button';
import { Modal, ModalActions, ModalBody } from '../../../../packages/design-system/components/Modal';
import { 
  Search, 
  ShoppingCart, 
  Download, 
  Star, 
  Filter,
  ArrowRight,
  Lightbulb,
  FileText,
  Users,
  Calendar,
  BookOpen,
  Crown,
  CheckCircle,
  ExternalLink,
  Play,
  Sparkles
} from 'lucide-react';
import type { Language, User } from '../../../../packages/types';

interface StoreProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  sale?: boolean;
  featured: boolean;
  tags: string[];
  downloads: number;
  rating: number;
  reviews: number;
  preview?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  frameworks: string[];
  ageGroups: string[];
}

interface StorePageProps {
  language: Language;
  user: User | null;
  onNavigate: (route: string) => void;
}

export default function StorePage({ language, user, onNavigate }: StorePageProps) {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);

  const isEnglish = language === 'en';

  const categories = [
    {
      id: 'all',
      name: isEnglish ? 'All Products' : 'Tous les Produits',
      icon: ShoppingCart,
      count: 0
    },
    {
      id: 'templates',
      name: isEnglish ? 'Lesson Templates' : 'Modèles de Leçons',
      icon: FileText,
      count: 0
    },
    {
      id: 'worksheets',
      name: isEnglish ? 'Worksheets' : 'Feuilles de Travail',
      icon: BookOpen,
      count: 0
    },
    {
      id: 'assessments',
      name: isEnglish ? 'Assessments' : 'Évaluations',
      icon: Users,
      count: 0
    },
    {
      id: 'seasonal',
      name: isEnglish ? 'Seasonal' : 'Saisonnier',
      icon: Calendar,
      count: 0
    }
  ];

  useEffect(() => {
    loadStoreProducts();
  }, []);

  const loadStoreProducts = async () => {
    try {
      setLoading(true);
      
      // Load from seed data
      const response = await fetch('/data/seed_lessons.json');
      if (response.ok) {
        const seedData = await response.json();
        
        const storeProducts: StoreProduct[] = seedData.map((item: any, index: number) => ({
          id: `product-${index}`,
          name: item.title || `Educational Resource ${index + 1}`,
          slug: (item.title || `resource-${index}`).toLowerCase().replace(/\s+/g, '-'),
          description: item.description || 'Professional educational resource for early childhood educators.',
          category: determineCategory(item),
          price: generatePrice(item, index),
          originalPrice: Math.random() > 0.7 ? generatePrice(item, index) + 5 : undefined,
          sale: Math.random() > 0.8,
          featured: index < 3,
          tags: item.skills || ['education', 'early-childhood'],
          downloads: Math.floor(Math.random() * 2000) + 100,
          rating: 4 + Math.random(),
          reviews: Math.floor(Math.random() * 100) + 10,
          difficulty: ['Beginner', 'Intermediate', 'Advanced'][Math.floor(Math.random() * 3)] as any,
          frameworks: item.framework ? [item.framework] : ['HDLH', 'Flight'],
          ageGroups: item.age_group ? [item.age_group] : ['3-4 years', '4-5 years']
        }));
        
        setProducts(storeProducts);
      }
    } catch (error) {
      console.error('Error loading store products:', error);
    } finally {
      setLoading(false);
    }
  };

  const determineCategory = (item: any): string => {
    if (item.title?.toLowerCase().includes('worksheet')) return 'worksheets';
    if (item.title?.toLowerCase().includes('assessment')) return 'assessments';
    if (item.title?.toLowerCase().includes('template')) return 'templates';
    if (item.title?.toLowerCase().includes('seasonal')) return 'seasonal';
    return 'templates';
  };

  const generatePrice = (item: any, index: number): number => {
    const basePrice = 5 + (index % 10) * 2;
    return Math.round(basePrice * 100) / 100;
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: StoreProduct) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const handlePurchase = (product: StoreProduct) => {
    if (!user) {
      onNavigate('home'); // Will trigger auth modal
      return;
    }
    
    // In a real app, this would integrate with Stripe
    console.log('Purchasing product:', product.id);
  };

  const addons = [
    {
      id: 'yearbook',
      name: isEnglish ? 'Yearbook Builder' : 'Constructeur d\'Album Souvenir',
      description: isEnglish ? 'Create beautiful digital yearbooks' : 'Créer de beaux albums souvenirs numériques',
      price: 19.99,
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'quiz',
      name: isEnglish ? 'Quiz Maker' : 'Créateur de Quiz',
      description: isEnglish ? 'Interactive learning assessments' : 'Évaluations d\'apprentissage interactives',
      price: 12.99,
      icon: <Play className="h-6 w-6" />
    },
    {
      id: 'story',
      name: isEnglish ? 'Story Maker' : 'Créateur d\'Histoires',
      description: isEnglish ? 'AI-powered story creation' : 'Création d\'histoires alimentée par IA',
      price: 14.99,
      icon: <Sparkles className="h-6 w-6" />
    }
  ];

  return (
    <div className="page-layout">
      {/* Store Header */}
      <section className="hero-section">
        <div className="container-kato">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Lightbulb className="lightbulb-logo-large mr-4" />
              <span className="text-4xl font-inter font-bold gradient-text-main">
                KatoSuite
              </span>
              <span className="ml-4 text-2xl font-semibold text-muted-foreground">
                {isEnglish ? 'Store' : 'Boutique'}
              </span>
            </div>
            
            <h1 className="text-heading mb-6">
              {isEnglish 
                ? 'Premium Educational Resources'
                : 'Ressources Éducatives Premium'
              }
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {isEnglish 
                ? 'Professional worksheets, templates, and educational materials designed specifically for early childhood educators following Canadian and US frameworks.'
                : 'Feuilles de travail professionnelles, modèles et matériels éducatifs conçus spécifiquement pour les éducateurs de la petite enfance suivant les cadres canadiens et américains.'
              }
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={isEnglish ? 'Search resources...' : 'Rechercher des ressources...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-kato">
        <div className="container-kato">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const count = category.id === 'all' 
                  ? products.length 
                  : products.filter(p => p.category === category.id).length;
                
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {count}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Premium Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
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

            <div className="grid-kato-3 max-w-4xl mx-auto mb-8">
              {addons.map((addon) => (
                <Card key={addon.id} variant="pricing" className="text-center">
                  <CardHeader>
                    <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      {addon.icon}
                    </div>
                    <CardTitle className="text-xl">{addon.name}</CardTitle>
                    <CardDescription>{addon.description}</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">
                      ${addon.price}
                      <span className="text-sm text-muted-foreground font-normal">
                        /{isEnglish ? 'month' : 'mois'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="primary" fullWidth>
                      {isEnglish ? 'Add to Plan' : 'Ajouter au Plan'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={() => onNavigate('pricing')}
                variant="outline"
                size="lg"
                icon={<ExternalLink className="h-5 w-5" />}
              >
                {isEnglish ? 'View All Plans' : 'Voir Tous les Plans'}
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid-kato-3">
              {[...Array(6)].map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="loading-skeleton aspect-video rounded-lg mb-4"></div>
                    <div className="loading-skeleton h-6 w-20 mb-2"></div>
                    <div className="loading-skeleton h-8 w-full"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="loading-skeleton h-4 w-full"></div>
                      <div className="loading-skeleton h-4 w-3/4"></div>
                    </div>
                    <div className="loading-skeleton h-4 w-16"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid-kato-3">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id}
                  variant="feature"
                  hover
                  className="cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <CardHeader>
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-gray-400" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      {product.featured && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Download className="h-3 w-3" />
                        <span>{product.downloads}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        {product.sale && product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through mr-2">
                            ${product.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold text-foreground">
                          ${product.price}
                        </span>
                      </div>
                      <Button size="sm" variant="outline">
                        {isEnglish ? 'View Details' : 'Voir les Détails'}
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-1 mt-3 flex-wrap">
                      {product.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-heading text-xl mb-2">
                {isEnglish ? 'No Products Found' : 'Aucun Produit Trouvé'}
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
                {isEnglish ? 'View All Products' : 'Voir Tous les Produits'}
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card variant="feature" className="bg-gradient-to-r from-indigo-50 to-purple-50 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <Crown className="h-16 w-16 mx-auto text-primary mb-6" />
                <h3 className="text-heading text-3xl mb-4">
                  {isEnglish ? 'Need Custom Resources?' : 'Besoin de Ressources Personnalisées?'}
                </h3>
                <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isEnglish 
                    ? 'Join KatoSuite and create unlimited custom lesson plans, worksheets, and educational resources with our AI-powered platform.'
                    : 'Rejoignez KatoSuite et créez des plans de leçons, feuilles de travail et ressources éducatives personnalisés illimités avec notre plateforme alimentée par IA.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => onNavigate('home')}
                    variant="primary"
                    className="btn-kato-large"
                    icon={<Lightbulb className="h-5 w-5" />}
                  >
                    {isEnglish ? 'Try Free (3 Plans/Month)' : 'Essayer Gratuitement (3 Plans/Mois)'}
                  </Button>
                  <Button
                    onClick={() => onNavigate('pricing')}
                    variant="outline"
                    size="lg"
                  >
                    {isEnglish ? 'View Plans' : 'Voir les Plans'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Modal
        open={showProductModal}
        onClose={() => setShowProductModal(false)}
        title={selectedProduct?.name}
        size="lg"
      >
        {selectedProduct && (
          <>
            <ModalBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                      {selectedProduct.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium mb-2">
                        {isEnglish ? 'Frameworks' : 'Cadres'}
                      </h4>
                      <div className="flex gap-2">
                        {selectedProduct.frameworks.map((framework, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {framework}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">
                        {isEnglish ? 'Age Groups' : 'Groupes d\'Âge'}
                      </h4>
                      <div className="flex gap-2">
                        {selectedProduct.ageGroups.map((age, index) => (
                          <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {age}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-foreground">
                        ${selectedProduct.price}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < Math.floor(selectedProduct.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {selectedProduct.reviews} {isEnglish ? 'reviews' : 'avis'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{isEnglish ? 'Instant download' : 'Téléchargement instantané'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{isEnglish ? 'Print-ready format' : 'Format prêt à imprimer'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{isEnglish ? 'Commercial use allowed' : 'Usage commercial autorisé'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalActions>
              <Button variant="outline" onClick={() => setShowProductModal(false)}>
                {isEnglish ? 'Close' : 'Fermer'}
              </Button>
              <Button 
                variant="primary" 
                onClick={() => handlePurchase(selectedProduct)}
                icon={<ShoppingCart className="h-4 w-4" />}
              >
                {isEnglish ? 'Purchase & Download' : 'Acheter et Télécharger'}
              </Button>
            </ModalActions>
          </>
        )}
      </Modal>
    </div>
  );
}