import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  Mic, 
  Globe2, 
  BookOpen, 
  Users, 
  Trophy,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  FileText,
  BarChart3,
  Camera,
  Calendar,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features | KatoSuite AI Educational Hub - AI-Powered ECE Platform',
  description: 'Discover powerful features including AI lesson planning, voice commands, HDLH/Flight compliance, bilingual support, and assessment tools for Canadian ECE professionals.',
  keywords: 'AI lesson planning, voice commands, HDLH compliance, Flight framework, ECE features, bilingual education, Canadian ECE tools',
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Modern ECE Professionals
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Everything you need to create exceptional lesson plans with AI assistance, 
              voice commands, and full compliance with Canadian ECE frameworks.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Core AI-Powered Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of tools is designed specifically for Canadian ECE professionals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* AI Lesson Planning */}
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Lesson Planning</h3>
              <p className="text-muted-foreground mb-6">
                Generate comprehensive, age-appropriate lesson plans in seconds using advanced AI that understands 
                Canadian ECE frameworks, developmental stages, and learning objectives.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>HDLH & Flight framework alignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Age-appropriate activity suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Learning outcome tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Material and resource lists</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Play className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Generate lesson: "Colors for 3-year-olds"</span>
                  </div>
                  <div className="p-4 bg-blue-600 text-white rounded-lg">
                    <p className="text-sm mb-2">✨ AI Generated Lesson Plan:</p>
                    <p className="text-sm">
                      <strong>Activity:</strong> Rainbow Sensory Exploration<br/>
                      <strong>Age Group:</strong> 3-4 years<br/>
                      <strong>Duration:</strong> 30 minutes<br/>
                      <strong>HDLH Domain:</strong> Cognitive & Creative Expression
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Voice Commands - Order switched */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 lg:order-1">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <Mic className="h-5 w-5 text-green-600 animate-pulse" />
                    <span className="font-medium">"Create math activity for 4-year-olds"</span>
                  </div>
                  <div className="p-4 bg-green-600 text-white rounded-lg">
                    <p className="text-sm mb-2">🎯 Voice Command Processed:</p>
                    <p className="text-sm">
                      Creating counting bears activity with number recognition, 
                      sorting by color, and basic addition concepts...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Mic className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Voice Commands</h3>
              <p className="text-muted-foreground mb-6">
                Create, modify, and manage lesson plans using natural voice commands. Perfect for busy educators 
                who need to plan while supervising children or during brief breaks.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Hands-free lesson creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Natural language processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Multi-language support (EN/FR)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Real-time voice feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Feature Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete ECE Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every tool you need for exceptional early childhood education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Bilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full English and French support for immersion programs and Quebec ECE requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Real-time translation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    French immersion activities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Quebec curriculum alignment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Framework Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Automatic alignment with HDLH, Flight, and provincial ECE frameworks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    HDLH domain mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Flight framework integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Provincial compliance checks
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Collaborative Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share lesson plans with your team and collaborate in real-time.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Team sharing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Real-time collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Feedback system
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Assessment Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built-in assessment rubrics aligned with Canadian ECE standards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Digital portfolios
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Parent communication
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intelligent scheduling that adapts to your center's routine.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Daily routine integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Resource allocation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Staff coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Data Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  PIPEDA compliant with enterprise-grade security for Canadian data protection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Canadian data residency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    PIPEDA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Encrypted storage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced ECE Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional features for comprehensive early childhood education management
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Photo Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Capture learning moments with automatic HDLH tagging
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Progress Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track child development with intelligent insights
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Parent Communication</h3>
              <p className="text-sm text-muted-foreground">
                Automated updates and milestone sharing
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Report Generation</h3>
              <p className="text-sm text-muted-foreground">
                Professional reports for accreditation and licensing
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience All Features Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your free trial and discover how KatoSuite AI can transform 
            your ECE practice with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            No credit card required • Full access to all features • Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}