import { Link } from "react-router";
import { Shield, Mail, MapPin, Apple, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/assets/logo.png" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Kestrel VPN</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Fast and secure VPN service for privacy and freedom. Protect your online identity with
              military-grade encryption and high-speed global servers.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@kestrelvpn.com" className="hover:text-primary transition-colors">
                  support@kestrelvpn.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Global Headquarters</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/no-logs-policy" className="hover:text-primary transition-colors">
                  No-Logs Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            <h3 className="font-semibold text-foreground">Download Kestrel VPN</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 hover:border-primary hover:bg-primary/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Windows
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 hover:border-primary hover:bg-primary/10"
              >
                <Apple className="h-4 w-4 mr-2" />
                macOS
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 hover:border-primary hover:bg-primary/10"
              >
                <Apple className="h-4 w-4 mr-2" />
                App Store
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 hover:border-primary hover:bg-primary/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Android
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kestrel VPN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}