import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Heart,
  Users,
  Target,
  Award,
  BookOpen,
  Globe,
  Shield,
  ArrowRight,
  MapPin,
  Calendar,
  Lightbulb
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | KatoSuite AI Educational Hub - Our Mission for Canadian ECE',
  description: 'Learn about KatoSuite AI\'s mission to empower Canadian ECE professionals through innovative AI technology, HDLH/Flight compliance, and bilingual support.',
  keywords: 'KatoSuite AI story, Canadian ECE innovation, early childhood education technology, HDLH expertise, ECE professional development',
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former ECE director with 15+ years experience. PhD in Early Childhood Development from University of Toronto.",
      expertise: "ECE Leadership, HDLH Framework"
    },
    {
      name: "Marc Leblanc",
      role: "CTO",
      bio: "AI/ML expert with background in educational technology. Former Google AI researcher specializing in natural language processing.",
      expertise: "AI Development, Voice Recognition"
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Education",
      bio: "ECE consultant and trainer. Expert in Flight framework and provincial ECE standards across Canada.",
      expertise: "Curriculum Design, Framework Compliance"
    },
    {
      name: "Jean-François Dubois",
      role: "Lead Developer",
      bio: "Full-stack developer from Montreal. Passionate about creating accessible, bilingual educational tools.",
      expertise: "Software Development, Bilingual Solutions"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Child-Centered Approach",
      description: "Every feature we build prioritizes the well-being and development of children in Canadian ECE settings."
    },
    {
      icon: Users,
      title: "Educator Empowerment",
      description: "We believe in empowering ECE professionals with tools that enhance their expertise, not replace it."
    },
    {
      icon: Globe,
      title: "Bilingual Excellence",
      description: "Committed to supporting Canada's linguistic diversity with seamless English and French integration."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Canadian data stays in Canada. We maintain the highest standards of privacy and security."
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "Founded",
      description: "KatoSuite AI was founded by ECE professionals who saw the need for AI-powered planning tools."
    },
    {
      year: "2023",
      title: "First ECE Centers",
      description: "Launched pilot program with 25 ECE centers across Ontario and Quebec."
    },
    {
      year: "2023",
      title: "HDLH Certification",
      description: "Achieved official alignment with Ontario's How Does Learning Happen framework."
    },
    {
      year: "2024",
      title: "National Expansion",
      description: "Expanded to serve ECE professionals across all Canadian provinces and territories."
    },
    {
      year: "2024",
      title: "Voice AI Launch",
      description: "Introduced revolutionary voice command features for hands-free lesson planning."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Canadian ECE Professionals
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Through Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Born from the real needs of Canadian early childhood educators, 
              we're building the future of ECE with AI-powered tools that respect 
              our unique frameworks and bilingual heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Our Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower Canadian early childhood educators with AI-powered tools that enhance their 
                  professional practice while maintaining full compliance with Canadian ECE frameworks 
                  and supporting our nation's linguistic diversity.
                </p>
                <p className="text-muted-foreground mb-8">
                  We believe that technology should amplify the expertise of ECE professionals, not replace 
                  their judgment. Our platform is designed by educators, for educators, with deep understanding 
                  of the Canadian ECE landscape.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Built by Canadian ECE professionals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>100% compliant with HDLH and Flight frameworks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bilingual support for English and French</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Canadian data residency and PIPEDA compliance</span>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading AI platform that transforms early childhood education 
                      across Canada, making high-quality, framework-compliant lesson planning 
                      accessible to every educator, in both official languages.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make and every feature we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From idea to impact: How we're transforming Canadian ECE
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {milestone.year}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse team of ECE professionals, AI experts, and developers united by our passion for early childhood education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.bio}</p>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-muted-foreground">
                  {member.expertise}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact Across Canada
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-muted-foreground">ECE Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,000+</div>
              <div className="text-muted-foreground">Educators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
              <div className="text-muted-foreground">Lesson Plans Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">10</div>
              <div className="text-muted-foreground">Provinces Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Focus */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-white to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🇨🇦</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Proudly Canadian
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Built in Canada, for Canadian ECE professionals. We understand the unique needs 
              of our education system, from coast to coast to coast.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-red-600" />
                <span className="font-medium text-gray-900">Canadian Data Centers</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-6 w-6 text-red-600" />
                <span className="font-medium text-gray-900">PIPEDA Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="h-6 w-6 text-red-600" />
                <span className="font-medium text-gray-900">Bilingual by Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the transformation in Canadian early childhood education. 
            Try KatoSuite AI today and experience the future of ECE planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}