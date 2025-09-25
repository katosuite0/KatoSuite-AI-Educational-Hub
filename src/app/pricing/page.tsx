import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle,
  X,
  Star,
  Users,
  Building,
  Crown,
  ArrowRight,
  Globe,
  Shield,
  Headphones
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | KatoSuite AI Educational Hub - Affordable ECE Solutions',
  description: 'Flexible pricing plans for Canadian ECE professionals. Start free, scale with your center. HDLH/Flight compliant AI lesson planning from $19/month CAD.',
  keywords: 'ECE pricing Canada, AI lesson planning cost, HDLH tools pricing, Canadian early childhood education software, ECE center management pricing',
}

export default function PricingPage() {
  const plans = [
    {
      name: "Educator",
      price: "19",
      period: "per educator/month",
      description: "Perfect for individual ECE professionals",
      features: [
        "AI lesson planning",
        "Voice commands",
        "HDLH/Flight compliance",
        "Bilingual support (EN/FR)",
        "50 lesson plans/month",
        "Basic assessment tools",
        "Mobile app access",
        "Email support"
      ],
      notIncluded: [
        "Team collaboration",
        "Advanced analytics",
        "Priority support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Center",
      price: "49",
      period: "per center/month",
      description: "Ideal for small to medium ECE centers",
      features: [
        "Everything in Educator",
        "Up to 10 educators",
        "Team collaboration",
        "Unlimited lesson plans",
        "Advanced assessment tools",
        "Parent communication portal",
        "Progress analytics",
        "Photo documentation",
        "Priority email support",
        "Staff training resources",
        "Custom templates",
        "Data export tools"
      ],
      notIncluded: [
        "Advanced integrations",
        "Custom branding"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "For large centers and school boards",
      features: [
        "Everything in Center",
        "Unlimited educators",
        "Advanced integrations",
        "Custom branding",
        "Dedicated account manager",
        "24/7 phone support",
        "On-site training",
        "Custom development",
        "Advanced security features",
        "Multi-location management",
        "API access",
        "White-label options",
        "Compliance reporting",
        "Data residency options"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affordable AI for Every
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}Canadian ECE Center
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Transparent pricing designed for Canadian ECE professionals. 
              Start free, scale as you grow, with full HDLH/Flight compliance included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Book Demo Call
              </Button>
            </div>
            <p className="text-green-200">
              🇨🇦 All prices in Canadian dollars • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every plan includes full HDLH/Flight compliance, bilingual support, and Canadian data residency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-8 ${plan.popular ? 'ring-2 ring-blue-600 shadow-xl' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    {plan.name === "Educator" && <Users className="h-12 w-12 text-blue-600 mx-auto" />}
                    {plan.name === "Center" && <Building className="h-12 w-12 text-green-600 mx-auto" />}
                    {plan.name === "Enterprise" && <Crown className="h-12 w-12 text-purple-600 mx-auto" />}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">
                        {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground">CAD</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.period}</p>
                  </div>
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <Button 
                    className={`w-full mb-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Included Features
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mt-8">
                          Not Included
                        </h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-600" />
                Bilingual Support (EN/FR)
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                PIPEDA Compliant
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-purple-600" />
                HDLH/Flight Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about pricing and features for Canadian ECE professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Is the free trial really free?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Our 14-day free trial gives you full access to all features with no credit card required. 
                  You can cancel anytime during the trial period.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Are prices in Canadian dollars?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! All our pricing is in Canadian dollars (CAD) and we process payments through 
                  Canadian financial institutions for your convenience.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">What ECE frameworks do you support?</h3>
                <p className="text-muted-foreground text-sm">
                  We support HDLH (How Does Learning Happen), Flight framework, and provincial ECE frameworks 
                  across all Canadian provinces and territories.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Is my data stored in Canada?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! All data is stored in Canadian data centers and we're fully compliant with PIPEDA 
                  (Personal Information Protection and Electronic Documents Act).
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Can I upgrade or downgrade anytime?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades 
                  take effect at your next billing cycle.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Do you offer training for my staff?</h3>
                <p className="text-muted-foreground text-sm">
                  Center and Enterprise plans include staff training resources. Enterprise customers also 
                  receive on-site training and dedicated support.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Something Custom?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Large ECE centers, school boards, and organizations can get custom solutions 
              tailored to their specific needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Dedicated Support</h3>
                <p className="text-sm opacity-90">24/7 phone support with dedicated account manager</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Multi-Location</h3>
                <p className="text-sm opacity-90">Manage multiple centers from one dashboard</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Custom Features</h3>
                <p className="text-sm opacity-90">Tailored development for your specific needs</p>
              </div>
            </div>
            <Button size="lg" variant="secondary">
              Contact Enterprise Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-6">Trusted by Canadian ECE Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-muted-foreground">ECE Centers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2,000+</div>
                <div className="text-muted-foreground">Educators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}