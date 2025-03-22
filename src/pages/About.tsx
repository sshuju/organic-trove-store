
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Users, 
  Leaf, 
  Globe, 
  Heart, 
  Calendar, 
  MapPin,
  Award,
  Clock,
  HandHeart,
  Sparkles
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
        <section className="relative bg-gradient-to-b from-organic-light to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Journey Towards Sustainability
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Cultivating Change, Nurturing Nature</h1>
              <p className="text-xl text-muted-foreground">
                Founded on the principles of sustainability, transparency, and community, OrganicTrove is more than just a store—it's a movement towards a greener, healthier future.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>
        
        {/* Our Vision */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-up">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Our Vision
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Transforming Lives Through Mindful Consumption
                </h2>
                <p className="text-muted-foreground mb-6">
                  At OrganicTrove, we envision a world where sustainable choices are accessible to everyone. We believe that small changes in our daily habits can collectively create a significant positive impact on our planet and communities.
                </p>
                <p className="text-muted-foreground mb-6">
                  Every product in our collection tells a story of conscious creation—from the farmers who nurture the raw materials to the artisans who craft them into the items you love. We're committed to ensuring these stories reflect our core values of sustainability, fairness, and respect for both people and planet.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Empowering conscious consumers with transparent product information</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Supporting sustainable farming practices that regenerate ecosystems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Creating fair economic opportunities for rural communities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <span>Pioneering innovative solutions to eliminate waste from our supply chain</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-float">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1470091688221-c1f7b60b5604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Organic farming landscape" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 max-w-xs animate-slide-up hidden md:block">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Positive Impact</h3>
                        <p className="text-xs text-muted-foreground">Our community has helped plant over 75,000 trees across India.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Core Principles */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-organic-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Core Principles
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                The Foundations That Guide Our Journey
              </h2>
              <p className="text-muted-foreground">
                These principles are the compass that guides every decision we make, from product selection to business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Ecological Harmony</h3>
                <p className="text-muted-foreground">
                  We believe in living in balance with nature. Every product in our collection is designed to minimize environmental impact while maximizing positive effects on ecosystems. From biodegradable packaging to regenerative farming practices, we prioritize the health of our planet at every step.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in delay-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Radical Transparency</h3>
                <p className="text-muted-foreground">
                  We believe you deserve to know exactly what you're bringing into your home. Every ingredient, sourcing location, and production method is openly shared. We conduct rigorous testing and verification to ensure everything meets our strict standards for purity, quality, and ethical production.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in delay-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Community Empowerment</h3>
                <p className="text-muted-foreground">
                  We're creating an ecosystem of positive change. By supporting small-scale farmers, artisans, and social enterprises, we help strengthen local economies and preserve traditional knowledge. Our partnerships are built on fair compensation, mutual respect, and shared values of sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Impact */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Impact
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                Creating Positive Change Together
              </h2>
              <p className="text-muted-foreground">
                Through your support, we've been able to make meaningful contributions to environmental and social causes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">75,000+</h3>
                <p className="text-muted-foreground">Trees planted through our reforestation initiatives across India</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <HandHeart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1,200+</h3>
                <p className="text-muted-foreground">Rural artisans and farmers supported through fair trade partnerships</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">30+</h3>
                <p className="text-muted-foreground">Sustainability awards and recognitions for our ethical business practices</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50,000 kg</h3>
                <p className="text-muted-foreground">Plastic waste prevented through our zero-waste packaging solutions</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-organic-light/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                From Seed to Movement
              </h2>
              <p className="text-muted-foreground">
                Our path has been one of purpose, perseverance, and ever-expanding positive impact.
              </p>
            </div>
            
            <div className="relative border-l border-primary/30 pl-10 ml-6 space-y-12">
              <div className="relative animate-fade-in">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-primary mb-1 block">2017</time>
                <h3 className="text-lg font-medium mb-2">The Awakening</h3>
                <p className="text-muted-foreground mb-4">
                  The journey began when our founder, Anjali Menon, returned to her ancestral village in Kerala and witnessed the harmful effects of chemical farming on both the environment and community health. This sparked a vision to create a marketplace for truly sustainable products.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1626738740661-21443ede85e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Traditional farming in Kerala" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-100">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-primary mb-1 block">2019</time>
                <h3 className="text-lg font-medium mb-2">Growth & Recognition</h3>
                <p className="text-muted-foreground mb-4">
                  After months of research and building relationships with organic farmers and artisans, we opened our first store in Bangalore. Within the first year, we expanded our product range to over 500 items and received the "Emerging Sustainable Business" award.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our first store in Bangalore" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-200">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-primary mb-1 block">2021</time>
                <h3 className="text-lg font-medium mb-2">Digital Transformation</h3>
                <p className="text-muted-foreground mb-4">
                  Responding to growing demand and the challenges of the pandemic, we launched our e-commerce platform, making sustainable products accessible nationwide. This period also marked the beginning of our community workshops on sustainable living.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581089776540-0c8bc89b54f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Digital transformation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative animate-fade-in delay-300">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-primary"></div>
                <time className="text-sm font-medium text-primary mb-1 block">Today</time>
                <h3 className="text-lg font-medium mb-2">A Thriving Ecosystem</h3>
                <p className="text-muted-foreground mb-4">
                  Today, OrganicTrove has blossomed into a vibrant ecosystem connecting over 300 sustainable producers with conscious consumers across India. Our community initiatives now include seed-saving programs, farmer training workshops, and youth environmental education.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530530824905-661c730c4091?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Our community today" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">
                The Changemakers Behind OrganicTrove
              </h2>
              <p className="text-muted-foreground">
                Meet the diverse team of passionate individuals working together to transform the way we consume and connect with our planet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Anjali Menon - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Anjali Menon</h3>
                  <p className="text-primary font-medium text-sm">Founder & CEO</p>
                  <p className="text-muted-foreground mt-3">
                    With a background in environmental science and agroecology, Anjali combines traditional wisdom with modern sustainability practices to lead OrganicTrove's mission.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-100">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Vikram Reddy - Sustainability Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Vikram Reddy</h3>
                  <p className="text-primary font-medium text-sm">Sustainability Director</p>
                  <p className="text-muted-foreground mt-3">
                    A former corporate executive who left his career to pursue environmental conservation, Vikram oversees our sustainability initiatives and supplier relationships.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-200">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Priya Shah - Community Engagement Lead" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Priya Shah</h3>
                  <p className="text-primary font-medium text-sm">Community Engagement Lead</p>
                  <p className="text-muted-foreground mt-3">
                    With a passion for social justice and community building, Priya designs and implements programs that connect our customers with the stories and people behind our products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Visit Us Section */}
        <section className="py-16 md:py-24 bg-earth-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Experience OrganicTrove
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Visit Our Mindful Spaces
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our stores are more than just retail spaces—they're community hubs where you can learn, connect, and immerse yourself in sustainable living. Visit us to explore our products, attend workshops, and meet like-minded individuals.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Bangalore Flagship Store</h3>
                        <p className="text-sm text-muted-foreground">
                          42 Harmony Gardens, Indiranagar<br />
                          Bangalore, Karnataka 560038
                        </p>
                        <div className="flex items-center mt-2 gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>10:00 AM - 8:00 PM daily</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Mumbai Experience Center</h3>
                        <p className="text-sm text-muted-foreground">
                          17 Ocean View, Bandra West<br />
                          Mumbai, Maharashtra 400050
                        </p>
                        <div className="flex items-center mt-2 gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>11:00 AM - 9:00 PM daily</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">Chennai Community Hub</h3>
                        <p className="text-sm text-muted-foreground">
                          88 Serenity Circle, Adyar<br />
                          Chennai, Tamil Nadu 600020
                        </p>
                        <div className="flex items-center mt-2 gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>10:00 AM - 8:00 PM daily</span>
                        </div>
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
                    src="https://images.unsplash.com/photo-1583760919595-5c27f228d12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
                  Be Part of Our Sustainable Journey
                </h2>
                <p className="text-muted-foreground mb-8">
                  Every purchase you make is a vote for the kind of world you want to live in. Join us in creating a sustainable future where people and planet thrive together.
                </p>
                <Link to="/products" className="btn-primary">
                  Shop With Purpose
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
