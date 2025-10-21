import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Wazirabad
            </h3>
            <p className="text-muted-foreground mb-4">
              Crafting excellence in cutlery and kitchenware since generations.
              Traditional craftsmanship meets modern precision.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cutlery" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cutlery">
                  Cutlery
                </Link>
              </li>
              <li>
                <Link href="/knives" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-knives">
                  Knives
                </Link>
              </li>
              <li>
                <Link href="/kitchenware" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-kitchenware">
                  Kitchenware
                </Link>
              </li>
              <li>
                <Link href="/sets" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-sets">
                  Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Cutlery Market, Wazirabad, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+923001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@wazirabad.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@wazirabad.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {currentYear} Wazirabad Cutlery. All rights reserved. Crafted with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
