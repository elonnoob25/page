import { Link } from 'react-router-dom';
import { Diamond, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/20">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Diamond className="h-6 w-6 text-purple-400" />
              <span className="font-serif text-lg font-bold tracking-tight text-white">Lumina</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Exquisite diamond jewelry crafted with precision and passion.
              Each piece tells a unique story of elegance and luxury.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-purple-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-purple-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-purple-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=rings" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/products?category=necklaces" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/products?category=earrings" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <p className="text-sm text-muted-foreground">
                123 Luxury Lane, Diamond District
              </p>
              <p className="text-sm text-muted-foreground">
                New York, NY 10001
              </p>
              <p className="text-sm text-muted-foreground">
                Email: info@luminadiamonds.com
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: +1 (800) 123-4567
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 border-t border-purple-900/20 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Lumina Diamonds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}