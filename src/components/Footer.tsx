
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-light border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold text-organic-dark">
                Organic<span className="text-primary">Trove</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Committed to providing 100% organic, sustainable, and zero-waste products for a healthier you and a healthier planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-dark hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-dark hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-dark hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-dark hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=food" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Food & Beverages
                </Link>
              </li>
              <li>
                <Link to="/products?category=beauty" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beauty & Personal Care
                </Link>
              </li>
              <li>
                <Link to="/products?category=home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/products?category=wellness" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link to="/products?category=gifts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Organic Lane, Green City, Karnataka, India - 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  hello@organictrove.in
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OrganicTrove. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
