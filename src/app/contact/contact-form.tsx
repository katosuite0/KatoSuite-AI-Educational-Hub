"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    interests: [] as string[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting KatoSuite AI. Our team will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="w-full">
          Send Another Message
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your ECE center and how we can help you succeed with AI-powered lesson planning.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="organization" className="block text-sm font-medium mb-2">
                Organization/Center
              </label>
              <Input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Your ECE center name"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Your Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select your role</option>
                <option value="ece-director">ECE Director</option>
                <option value="ece-teacher">ECE Teacher/Educator</option>
                <option value="supervisor">ECE Supervisor</option>
                <option value="coordinator">Program Coordinator</option>
                <option value="administrator">Administrator</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">
              What are you interested in? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Product Demo',
                'Pricing Information',
                'HDLH/Flight Compliance',
                'Bilingual Features',
                'Voice Commands',
                'Team Training',
                'Integration Support',
                'Enterprise Solutions'
              ].map((interest) => (
                <label key={interest} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    value={interest}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData(prev => ({
                          ...prev,
                          interests: [...prev.interests, interest]
                        }))
                      } else {
                        setFormData(prev => ({
                          ...prev,
                          interests: prev.interests.filter(i => i !== interest)
                        }))
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your ECE center, your current challenges, and how we can help..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Sending...</>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground">
            By submitting this form, you agree to our privacy policy. We respect your privacy 
            and will never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}