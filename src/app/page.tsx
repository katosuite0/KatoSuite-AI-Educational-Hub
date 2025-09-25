import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VoiceDemo } from "@/components/sections/voice-demo"
import { 
  Brain, 
  Mic, 
  Globe2, 
  BookOpen, 
  Users, 
  Trophy, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Lesson Planning for 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Canadian ECE Professionals
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Voice-enabled lesson planning with HDLH/Flight compliance, bilingual support, 
              and intelligent assessment tools designed specifically for early childhood educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Watch Demo
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Canadian ECE Centers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-200">HDLH Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-blue-200">Time Saved on Planning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Demo Section */}
      <VoiceDemo />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Canadian ECE Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is specifically designed to meet the unique needs of Canadian early childhood educators,
              with full compliance to provincial frameworks and bilingual capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI Lesson Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Generate comprehensive lesson plans aligned with HDLH and Flight frameworks 
                  in seconds, not hours.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Voice Commands</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create and modify lesson plans hands-free using natural voice commands 
                  while supervising children.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Bilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full English and French support for immersion programs and 
                  Quebec ECE requirements.
                </p>
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
                <p className="text-muted-foreground">
                  Automatic alignment with HDLH, Flight, and provincial ECE frameworks 
                  across all Canadian provinces.
                </p>
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
                <p className="text-muted-foreground">
                  Share lesson plans with your team, get feedback, and collaborate 
                  in real-time with other educators.
                </p>
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
                <p className="text-muted-foreground">
                  Built-in assessment rubrics and observation tools that align 
                  with Canadian ECE evaluation standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transform Your ECE Practice
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join hundreds of Canadian ECE professionals who have revolutionized their 
                  lesson planning process with KatoSuite AI.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">75% Time Reduction</h3>
                      <p className="text-sm text-muted-foreground">
                        Cut lesson planning time from hours to minutes with AI assistance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">100% Framework Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        Every lesson automatically meets HDLH/Flight requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Bilingual Ready</h3>
                      <p className="text-sm text-muted-foreground">
                        Seamlessly support English and French immersion programs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Voice-First Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Plan lessons hands-free while maintaining child supervision
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" asChild>
                  <Link href="/features">
                    Explore All Features
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Testimonials */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "KatoSuite AI has completely transformed how I plan lessons. The voice commands 
                    let me create activities while I'm actively engaging with the children. It's a game-changer!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-600">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Mitchell</div>
                      <div className="text-sm text-muted-foreground">ECE Director, Toronto</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As a French immersion educator, the bilingual support is incredible. 
                    KatoSuite AI helps me create comprehensive lesson plans in both languages effortlessly."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-green-600">ML</span>
                    </div>
                    <div>
                      <div className="font-semibold">Marie Leblanc</div>
                      <div className="text-sm text-muted-foreground">ECE Teacher, Montreal</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your ECE Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of Canadian ECE professionals who are already using 
            KatoSuite AI to create better lesson plans in less time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}