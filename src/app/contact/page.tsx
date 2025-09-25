import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Headphones,
  Calendar,
  Globe
} from "lucide-react"
import type { Metadata } from 'next'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Contact | KatoSuite AI Educational Hub - Get Support & Schedule Demo',
  description: 'Contact KatoSuite AI for support, demos, or questions about AI-powered ECE tools. Canadian support team ready to help with HDLH/Flight compliance and bilingual solutions.',
  keywords: 'KatoSuite AI contact, ECE support Canada, AI lesson planning demo, Canadian ECE help, HDLH support',
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account, billing, or technical issues",
      contact: "support@katosuite.ca",
      hours: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our Canadian support team",
      contact: "+1 (416) 555-0123",
      hours: "Mon-Fri, 9AM-5PM EST"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Quick questions and immediate assistance",
      contact: "Available in app",
      hours: "Mon-Fri, 9AM-8PM EST"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demo with our ECE experts",
      contact: "calendly.com/katosuite",
      hours: "Available 7 days a week"
    }
  ]

  const offices = [
    {
      city: "Toronto, ON",
      address: "123 Education Street, Suite 400\nToronto, ON M5V 3A1",
      phone: "+1 (416) 555-0123"
    },
    {
      city: "Montreal, QC", 
      address: "456 Rue de l'Éducation, Bureau 200\nMontréal, QC H3A 2B4",
      phone: "+1 (514) 555-0123"
    },
    {
      city: "Vancouver, BC",
      address: "789 Learning Avenue, Floor 5\nVancouver, BC V6B 1A1",
      phone: "+1 (604) 555-0123"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch with Our
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Canadian ECE Experts
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Have questions about KatoSuite AI? Need a demo? Our team of ECE professionals 
              and technical experts is here to help you transform your lesson planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Can We Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-sm font-medium text-blue-600 mb-2">{method.contact}</p>
                <p className="text-xs text-muted-foreground">{method.hours}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      Our Canadian Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {offices.map((office, index) => (
                        <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                          <h4 className="font-semibold text-blue-600 mb-2">{office.city}</h4>
                          <p className="text-sm text-muted-foreground whitespace-pre-line mb-2">
                            {office.address}
                          </p>
                          <p className="text-sm font-medium">{office.phone}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      Support Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 8:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-muted-foreground">
                          Emergency technical support available 24/7 for Enterprise customers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardContent>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Headphones className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Check our comprehensive help center for instant answers to common questions.
                      </p>
                      <Button variant="outline" size="sm">
                        Visit Help Center
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about KatoSuite AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">How quickly can I get started?</h3>
              <p className="text-muted-foreground text-sm">
                You can start using KatoSuite AI immediately with our 14-day free trial. 
                No credit card required, and full setup takes less than 5 minutes.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Do you offer training for my team?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! All plans include comprehensive training resources, and Enterprise customers 
                receive personalized on-site training from our ECE experts.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Is my data secure and compliant?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. All data is stored in Canadian data centers with enterprise-grade security. 
                We're fully compliant with PIPEDA and provincial privacy regulations.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Can I customize the platform for my center?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Center and Enterprise plans include customization options, custom templates, 
                and the ability to adapt the platform to your specific needs and branding.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}