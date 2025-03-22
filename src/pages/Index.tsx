
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Gift, Leaf, RefreshCw, Truck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Mock product data
const featuredProducts = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    description: "100% organic turmeric powder rich in curcumin, grown without pesticides or chemicals.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1615485500704-8e990f9900e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Bamboo Toothbrush Set",
    description: "Eco-friendly bamboo toothbrushes with biodegradable handles and BPA-free bristles.",
    price: 249,
    imageSrc: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Personal Care",
    isNew: true,
  },
  {
    id: 3,
    name: "Organic Coconut Oil",
    description: "Cold-pressed virgin coconut oil from certified organic coconuts.",
    price: 349,
    imageSrc: "https://images.unsplash.com/photo-1594373505583-89a04f1e2dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness",
  },
  {
    id: 4,
    name: "Zero Waste Starter Kit",
    description: "Essential zero waste items including cotton bags, stainless steel straws, and more.",
    price: 799,
    imageSrc: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
    isFeatured: true,
  },
];

// Mock categories
const categories = [
  {
    name: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 42,
  },
  {
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 37,
  },
  {
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 28,
  },
  {
    name: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 24,
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-organic-light to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                100% Organic & Zero Waste Products
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Embrace <span className="text-primary">Sustainable</span> Living With Our Organic Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover our range of premium organic products that are good for you and good for the planet. Zero waste, ethically sourced, naturally effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary">
                  Shop Now
                </Link>
                <Link to="/about" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative lg:pl-10 animate-float">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Organic products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 max-w-xs animate-slide-up hidden md:block">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Certified Organic</h3>
                    <p className="text-xs text-muted-foreground">All our products are certified organic and sustainably sourced.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Why Choose OrganicTrove?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our commitment to sustainability and quality sets us apart.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">100% Organic</h3>
              <p className="text-muted-foreground text-sm">
                All our products are certified organic, free from harmful chemicals and pesticides.
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in delay-100">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Zero Waste</h3>
              <p className="text-muted-foreground text-sm">
                Sustainable packaging that's biodegradable, compostable, or recyclable.
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in delay-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Carbon Neutral</h3>
              <p className="text-muted-foreground text-sm">
                We offset our carbon footprint with investments in environmental projects.
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 text-center animate-fade-in delay-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Ethically Sourced</h3>
              <p className="text-muted-foreground text-sm">
                We ensure fair wages and working conditions throughout our supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-earth-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our most loved organic and sustainable products.
              </p>
            </div>
            <Link to="/products" className="group inline-flex items-center text-primary mt-4 md:mt-0">
              <span>View all products</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our carefully curated categories of organic and sustainable products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.name} 
                to={`/products?category=${category.name.toLowerCase().replace(/ & /g, '-')}`}
                className="group relative overflow-hidden rounded-xl shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-medium">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-organic-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from people who have embraced our organic products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm animate-slide-up">
              <div className="flex items-center space-x-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-foreground italic mb-4">
                "I have been using the organic skincare products for 3 months now and the difference is incredible. My skin feels so much healthier!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Customer" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">Bangalore</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm animate-slide-up delay-100">
              <div className="flex items-center space-x-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-foreground italic mb-4">
                "The zero waste starter kit is perfect! I've significantly reduced my plastic waste and the products are high quality. Worth every rupee!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Customer" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Rahul Patel</p>
                  <p className="text-xs text-muted-foreground">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm animate-slide-up delay-200">
              <div className="flex items-center space-x-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-foreground italic mb-4">
                "Their organic foods taste so much better than conventional options. My family can taste the difference, and I feel good about what I'm feeding them."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted overflow-hidden mr-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Customer" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Anjali Menon</p>
                  <p className="text-xs text-muted-foreground">Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 animate-slide-up">
                <h2 className="text-3xl font-display font-bold mb-4">Join Our Organic Community</h2>
                <p className="text-muted-foreground max-w-xl mb-6">
                  Subscribe to our newsletter for exclusive offers, new product announcements, sustainable living tips, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-72"
                  />
                  <button className="btn-primary">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
                </p>
              </div>
              <div className="lg:col-span-2 animate-slide-in-left">
                <div className="bg-earth-light rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Subscription Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">10% off your first order</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">Early access to new products</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">Exclusive subscriber-only offers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">Sustainable living tips and guides</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
