import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Lightbulb, Users, Globe, Award, Heart, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About KatoSuite - Our Mission & Story',
  description: 'Learn about KatoSuite\'s mission to transform early childhood education through AI-powered tools designed specifically for Canadian educators.',
  keywords: ['about KatoSuite', 'early childhood education', 'company mission', 'educational technology', 'Canadian educators', 'AI education'],
  openGraph: {
    title: 'About KatoSuite - Transforming Early Childhood Education',
    description: 'Learn about KatoSuite\'s mission to transform early childhood education through AI-powered tools designed specifically for Canadian educators.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-kato bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-kato">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="lightbulb-logo-large" />
              <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 px-4 py-2">
                🇨🇦 Made in Canada
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text-main">Transforming Early Childhood Education</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              KatoSuite is dedicated to empowering Canadian early childhood educators with AI-powered tools 
              that make lesson planning, compliance tracking, and child development monitoring both effective and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide Canadian early childhood educators with intelligent, framework-aligned tools 
              that save time, improve outcomes, and support every child's developmental journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="card-kato-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-inter">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Leveraging cutting-edge AI technology to create tools that understand the unique needs 
                  of Canadian early childhood education.
                </p>
              </CardContent>
            </Card>

            <Card className="card-kato-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="font-inter">Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every feature is designed with deep understanding of the challenges educators face 
                  and the importance of quality early childhood education.
                </p>
              </CardContent>
            </Card>

            <Card className="card-kato-hover text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="font-inter">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Committed to the highest standards of educational quality, technical reliability, 
                  and user experience in everything we build.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-kato bg-gray-50">
        <div className="container-kato">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KatoSuite was born from the recognition that early childhood educators in Canada 
                  needed better tools to manage the increasing complexity of modern education while 
                  maintaining the quality and care that young learners deserve.
                </p>
                <p>
                  Our founders, with backgrounds in education, technology, and child development, 
                  saw an opportunity to leverage artificial intelligence to solve real problems 
                  faced by educators every day.
                </p>
                <p>
                  From lesson planning that aligns with provincial frameworks to tracking child 
                  development in meaningful ways, we're building tools that educators actually 
                  want to use and that make a real difference in children's lives.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2,500+</h4>
                    <p className="text-gray-600 text-sm">Educators Served</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">10</h4>
                    <p className="text-gray-600 text-sm">Provinces Supported</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">13</h4>
                    <p className="text-gray-600 text-sm">Educational Frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-kato">
        <div className="container-kato">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at KatoSuite
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Child-Centered</h3>
              <p className="text-gray-600 text-sm">
                Every decision we make prioritizes the well-being and development of the children in your care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Educator-First</h3>
              <p className="text-gray-600 text-sm">
                We design with educators' needs in mind, creating tools that truly support your important work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600 text-sm">
                Supporting diverse learners, families, and communities across Canada with culturally responsive tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Continuously evolving our platform to meet the changing needs of modern education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-kato bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-kato text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of Canadian educators who are already using KatoSuite to create better learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100" size="lg">
              <Sparkles className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}