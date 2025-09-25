import Link from "next/link"
import { Mic, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="rounded-lg bg-primary p-2">
                <Mic className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">KatoSuite AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered educational platform for Canadian ECE professionals. 
              Voice-enabled lesson planning with HDLH/Flight framework compliance.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <div className="space-y-2">
              <Link
                href="/features"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@katosuite.ca</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (416) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 KatoSuite AI Educational Hub. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Made for Canadian ECE professionals
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">🇨🇦</span>
                <span className="text-sm text-muted-foreground">English</span>
                <span className="text-sm text-muted-foreground">|</span>
                <span className="text-sm text-muted-foreground">Français</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}