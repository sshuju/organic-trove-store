
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Update cart count when component mounts and whenever location changes
    updateCartCount();
    
    // Add event listener for storage changes (when cart is updated from other components)
    window.addEventListener('storage', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, [location]);
  
  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const count = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
    setCartItemCount(count);
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const isActive = (path: string) => location.pathname === path;
  
  // Function to check if user is signed in
  const isUserSignedIn = () => {
    return localStorage.getItem('isSignedIn') === 'true';
  };
  
  // Function to handle add to cart that requires sign in
  const handleAddToCart = (event: React.MouseEvent) => {
    if (!isUserSignedIn()) {
      event.preventDefault();
      event.stopPropagation();
      // Show sign in required modal or redirect to login
      navigate('/login');
      toast.error('Please sign in to add products to cart');
      return false;
    }
    return true;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-organic-dark">
                Organic<span className="text-primary">Trove</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="glass-card rounded-md py-2 px-3">
                  <Link to="/products" className="block py-2 px-3 text-sm hover:bg-background rounded-md">All Products</Link>
                  <Link to="/products?category=food" className="block py-2 px-3 text-sm hover:bg-background rounded-md">Food & Beverages</Link>
                  <Link to="/products?category=beauty" className="block py-2 px-3 text-sm hover:bg-background rounded-md">Beauty & Personal Care</Link>
                  <Link to="/products?category=home" className="block py-2 px-3 text-sm hover:bg-background rounded-md">Home & Living</Link>
                </div>
              </div>
            </div>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/help" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/help') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Help
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 text-foreground hover:bg-muted transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link 
              to="/cart" 
              className="rounded-full p-2 text-foreground hover:bg-muted transition-colors relative"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {isUserSignedIn() ? (
              <button 
                onClick={() => {
                  localStorage.removeItem('isSignedIn');
                  toast.success('Signed out successfully');
                  navigate('/');
                }}
                className="hidden md:inline-flex btn-outline"
              >
                Sign Out
              </button>
            ) : (
              <Link 
                to="/login" 
                className="hidden md:inline-flex btn-outline"
              >
                Sign In
              </Link>
            )}
            <button 
              className="md:hidden rounded-full p-2 text-foreground hover:bg-muted transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t mt-2 animate-slide-up">
          <div className="py-3 px-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 px-3 rounded-md ${
                isActive('/') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block py-2 px-3 rounded-md ${
                isActive('/products') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 px-3 rounded-md ${
                isActive('/about') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
              }`}
            >
              About
            </Link>
            <Link 
              to="/help" 
              className={`block py-2 px-3 rounded-md ${
                isActive('/help') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
              }`}
            >
              Help
            </Link>
            {isUserSignedIn() ? (
              <button 
                onClick={() => {
                  localStorage.removeItem('isSignedIn');
                  toast.success('Signed out successfully');
                  navigate('/');
                }}
                className="w-full py-2 px-3 text-center rounded-md bg-primary text-primary-foreground"
              >
                Sign Out
              </button>
            ) : (
              <Link 
                to="/login" 
                className="w-full py-2 px-3 text-center rounded-md bg-primary text-primary-foreground"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
