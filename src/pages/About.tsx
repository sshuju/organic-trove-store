
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Users, 
  Leaf, 
  Globe, 
  Heart, 
  Calendar, 
  MapPin
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-earth-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground">
                Committed to sustainability, organic living, and a zero-waste future
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>
        
        {/* Mission Statement */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-up">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Our Mission
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Creating a Sustainable Future Through Organic Products
                </h2>
                <p className="text-muted-foreground mb-6">
                  At OrganicTrove, we believe that small changes can make a big difference. Our mission is to make sustainable, organic living accessible to everyone while promoting zero-waste practices that protect our planet.
                </p>
                <p className="text-muted-foreground mb-6">
                  We carefully source our products from ethical suppliers who share our commitment to sustainability, fair trade, and environmental responsibility. Every product in our collection meets our strict standards for quality, sustainability, and effectiveness.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>100% certified organic ingredients and materials</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Sustainable packaging solutions that minimize waste</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Fair trade partnerships that support local communities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Carbon-neutral operations and shipping</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-float">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Our organic farm partners" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 max-w-xs animate-slide-up hidden md:block">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Global Impact</h3>
                        <p className="text-xs text-muted-foreground">Our sustainable practices have prevented over 50 tons of plastic waste.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Values
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                The Principles That Guide Us
              </h2>
              <p className="text-muted-foreground">
                Our core values define who we are and guide every decision we make, from product selection to business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to environmentally responsible practices that preserve natural resources and minimize our ecological footprint. From sourcing to shipping, sustainability is at the heart of everything we do.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in delay-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe in transparency and honesty. We carefully research and verify every product's origins, ingredients, and manufacturing processes to ensure they meet our standards for quality and sustainability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in delay-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We believe in building a community of like-minded individuals who share our passion for sustainable living. We support fair trade practices and partner with artisans and farmers who share our values.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                How It All Started
              </h2>
              <p className="text-muted-foreground">
                From a small home-based business to a leading organic products retailer, our journey has been defined by passion, perseverance, and purpose.
              </p>
            </div>
            
            <div className="relative border-l border-primary/20 pl-10 ml-6 space-y-12">
              <div className="relative animate-fade-in">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-muted-foreground mb-1 block">2018</time>
                <h3 className="text-lg font-medium mb-2">The Beginning</h3>
                <p className="text-muted-foreground mb-4">
                  OrganicTrove started as a small passion project in Anjali's kitchen. Concerned about the environmental impact of everyday products, she began creating her own organic alternatives.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="The beginning of OrganicTrove" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-100">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-muted-foreground mb-1 block">2019</time>
                <h3 className="text-lg font-medium mb-2">First Store Opening</h3>
                <p className="text-muted-foreground mb-4">
                  After growing demand and positive feedback from the local community, we opened our first physical store in Bangalore, offering a curated selection of organic products.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our first store" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-200">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-muted-foreground mb-1 block">2021</time>
                <h3 className="text-lg font-medium mb-2">Going Online</h3>
                <p className="text-muted-foreground mb-4">
                  We launched our e-commerce platform to make sustainable living accessible to people across India, offering nationwide shipping with eco-friendly packaging.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our online store launch" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-300">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-muted-foreground mb-1 block">Today</time>
                <h3 className="text-lg font-medium mb-2">Growing Community</h3>
                <p className="text-muted-foreground mb-4">
                  Today, OrganicTrove is a thriving community of conscious consumers, sustainable suppliers, and dedicated team members, all working together for a greener future.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our community" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 bg-organic-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                Meet the People Behind OrganicTrove
              </h2>
              <p className="text-muted-foreground">
                Our diverse team brings together expertise in sustainability, product development, and customer experience to deliver the best organic products to your doorstep.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Anjali Menon - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Anjali Menon</h3>
                  <p className="text-primary font-medium text-sm">Founder & CEO</p>
                  <p className="text-muted-foreground mt-3">
                    With a background in environmental science and a passion for sustainable living, Anjali founded OrganicTrove to make eco-friendly products accessible to all.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-100">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Rahul Sharma - Head of Procurement" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Rahul Sharma</h3>
                  <p className="text-primary font-medium text-sm">Head of Procurement</p>
                  <p className="text-muted-foreground mt-3">
                    Rahul ensures that all our products meet the highest standards for quality, sustainability, and ethical sourcing by working directly with farmers and artisans.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-200">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Priya Patel - Sustainability Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Priya Patel</h3>
                  <p className="text-primary font-medium text-sm">Sustainability Director</p>
                  <p className="text-muted-foreground mt-3">
                    With over a decade of experience in environmental conservation, Priya leads our initiatives to minimize waste and reduce our carbon footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Visit Us Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Visit Us
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Experience OrganicTrove In Person
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe in the importance of community and connection. Visit our stores to experience our products firsthand, attend workshops, and meet like-minded individuals.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Bangalore Flagship Store</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Organic Lane, Indiranagar<br />
                          Bangalore, Karnataka 560038
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Open daily: 10:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Mumbai Store</h3>
                        <p className="text-sm text-muted-foreground">
                          45 Sustainable Street, Bandra West<br />
                          Mumbai, Maharashtra 400050
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Open daily: 11:00 AM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Chennai Store</h3>
                        <p className="text-sm text-muted-foreground">
                          78 Green Garden Road, Adyar<br />
                          Chennai, Tamil Nadu 600020
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Open daily: 10:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="animate-float">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our flagship store" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Join Our Mission for a Sustainable Future
                </h2>
                <p className="text-muted-foreground mb-8">
                  Explore our collection of organic, sustainable products and be part of a community that's making a difference, one small change at a time.
                </p>
                <Link to="/products" className="btn-primary">
                  Shop Our Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default About;
