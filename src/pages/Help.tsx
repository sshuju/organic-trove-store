
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MessageCircle, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  ShieldCheck, 
  Search
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// FAQ data
const faqs = [
  {
    id: 1,
    category: "Orders & Shipping",
    questions: [
      {
        id: 1,
        question: "How long does shipping take?",
        answer: "We process orders within 24-48 hours. Standard shipping within India takes 3-5 business days, while express shipping takes 1-2 business days. International shipping is currently not available."
      },
      {
        id: 2,
        question: "Do you ship to all locations in India?",
        answer: "Yes, we ship to all major cities and most regions across India. Some remote areas may have longer delivery times or additional shipping charges. You can check shipping availability by entering your PIN code during checkout."
      },
      {
        id: 3,
        question: "Is there a minimum order value for free shipping?",
        answer: "Yes, we offer free standard shipping on all orders above ₹499. Orders below this amount have a flat shipping charge of ₹50."
      },
      {
        id: 4,
        question: "How can I track my order?",
        answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can use this number to track your order on our website under 'My Account > Orders' or directly on our shipping partner's website."
      }
    ]
  },
  {
    id: 2,
    category: "Returns & Refunds",
    questions: [
      {
        id: 1,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most products. Items must be unused, in their original packaging, and in the same condition you received them. Some items, such as food products and personal care items, may not be eligible for return due to hygiene reasons."
      },
      {
        id: 2,
        question: "How do I initiate a return?",
        answer: "To initiate a return, log into your account, go to 'My Orders', select the order you want to return, and click on 'Return Items'. Follow the instructions to complete the return process. You can also contact our customer support team for assistance."
      },
      {
        id: 3,
        question: "How long does it take to process a refund?",
        answer: "Once we receive and inspect the returned item, we'll process your refund within 3-5 business days. Depending on your payment method, it may take an additional 5-10 business days for the refund to appear in your account."
      },
      {
        id: 4,
        question: "Do I have to pay for return shipping?",
        answer: "For returns due to product defects or shipping errors, we cover the return shipping costs. For returns due to change of mind or other reasons, the customer is responsible for return shipping charges."
      }
    ]
  },
  {
    id: 3,
    category: "Products",
    questions: [
      {
        id: 1,
        question: "Are all your products certified organic?",
        answer: "Yes, all our food and skincare products are certified organic by recognized certification bodies like India Organic and USDA Organic. Each product page displays the specific certifications it has received."
      },
      {
        id: 2,
        question: "What does 'zero waste' mean for your products?",
        answer: "Our zero waste products are designed to produce minimal or no waste throughout their lifecycle. This includes biodegradable or compostable packaging, products that replace single-use items, and items that have a long lifespan to reduce replacement frequency."
      },
      {
        id: 3,
        question: "How do you ensure product quality?",
        answer: "We have strict quality control measures in place. We work directly with trusted suppliers, conduct regular quality checks, and ensure all products meet our standards for sustainability, effectiveness, and safety before they reach our customers."
      },
      {
        id: 4,
        question: "Are your products suitable for vegans?",
        answer: "Many of our products are vegan-friendly. Products that are certified vegan are clearly labeled on their product pages. If you're unsure about a specific product, please contact our customer support for clarification."
      }
    ]
  },
  {
    id: 4,
    category: "Payments & Promotions",
    questions: [
      {
        id: 1,
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit/debit cards, net banking, UPI, and popular mobile wallets. We also offer Cash on Delivery (COD) for orders under ₹5,000 in select locations."
      },
      {
        id: 2,
        question: "Are my payment details secure?",
        answer: "Yes, we use industry-standard encryption and security measures to protect your payment information. We don't store your credit card details on our servers. All payments are processed through secure payment gateways."
      },
      {
        id: 3,
        question: "Do you offer any discounts or promotions?",
        answer: "Yes, we regularly offer seasonal discounts, promotional offers, and special deals for new and returning customers. Subscribe to our newsletter to stay updated on our latest promotions. We also have a loyalty program that offers points on every purchase."
      },
      {
        id: 4,
        question: "Can I use multiple discount codes on one order?",
        answer: "Generally, only one discount code can be applied per order. However, loyalty points can be used in combination with most promotional discounts. Special terms may apply during certain promotional events."
      }
    ]
  },
  {
    id: 5,
    category: "Account & Orders",
    questions: [
      {
        id: 1,
        question: "How do I create an account?",
        answer: "You can create an account by clicking on 'Sign In' at the top of our website and selecting 'Create an Account'. You'll need to provide your email address, create a password, and fill in some basic information. You can also create an account during the checkout process."
      },
      {
        id: 2,
        question: "Can I place an order without creating an account?",
        answer: "Yes, we offer a guest checkout option that allows you to place orders without creating an account. However, having an account makes it easier to track orders, save addresses, and earn loyalty points."
      },
      {
        id: 3,
        question: "How can I check my order status?",
        answer: "If you placed an order with an account, you can check your order status by logging in and navigating to 'My Account > Orders'. If you placed an order as a guest, you can use the order tracking feature on our website by entering your order number and email address."
      },
      {
        id: 4,
        question: "Can I modify or cancel my order after placing it?",
        answer: "You can modify or cancel your order within 1 hour of placing it, provided it hasn't been processed yet. To do so, log into your account, go to 'My Orders', select the order you want to modify or cancel, and follow the instructions. For urgent changes, please contact our customer support team immediately."
      }
    ]
  }
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFaqs(faqs);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = faqs.map(category => {
      const filteredQuestions = category.questions.filter(q => 
        q.question.toLowerCase().includes(query) || 
        q.answer.toLowerCase().includes(query)
      );
      
      return filteredQuestions.length > 0 
        ? { ...category, questions: filteredQuestions } 
        : null;
    }).filter(Boolean) as typeof faqs;
    
    setFilteredFaqs(filtered);
  }, [searchQuery]);
  
  const toggleCategory = (categoryId: number) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    setActiveQuestion(null);
  };
  
  const toggleQuestion = (questionId: number) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 animate-fade-in">
        {/* Hero Section */}
        <section className="bg-earth-light py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to frequently asked questions or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-md border border-input bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
        </section>
        
        {/* Quick Links Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Shipping</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Information about delivery times and shipping options
                </p>
                <button 
                  onClick={() => {
                    setActiveCategory(1);
                    document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary text-sm font-medium"
                >
                  Learn More
                </button>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <RotateCcw className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Returns</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our return policy and refund process
                </p>
                <button 
                  onClick={() => {
                    setActiveCategory(2);
                    document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary text-sm font-medium"
                >
                  Learn More
                </button>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Payments</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Payment methods and billing questions
                </p>
                <button 
                  onClick={() => {
                    setActiveCategory(4);
                    document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary text-sm font-medium"
                >
                  Learn More
                </button>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center hover:bg-muted/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Products</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality, certifications, and ingredients
                </p>
                <button 
                  onClick={() => {
                    setActiveCategory(3);
                    document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary text-sm font-medium"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section id="faqs-section" className="py-16 bg-organic-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-6">
                {filteredFaqs.map((category) => (
                  <div key={category.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between p-6 text-left font-medium"
                    >
                      <span>{category.category}</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          activeCategory === category.id ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {activeCategory === category.id && (
                      <div className="px-6 pb-6 animate-slide-up">
                        <div className="border-t border-border pt-4 space-y-4">
                          {category.questions.map((question) => (
                            <div key={question.id} className="rounded-lg overflow-hidden">
                              <button
                                onClick={() => toggleQuestion(question.id)}
                                className="w-full flex items-center justify-between p-4 text-left font-medium bg-muted/30 rounded-t-lg"
                              >
                                <span>{question.question}</span>
                                <ChevronDown 
                                  className={`h-4 w-4 text-muted-foreground transition-transform ${
                                    activeQuestion === question.id ? 'transform rotate-180' : ''
                                  }`} 
                                />
                              </button>
                              
                              {activeQuestion === question.id && (
                                <div className="p-4 bg-muted/10 rounded-b-lg animate-slide-up">
                                  <p className="text-muted-foreground">{question.answer}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any FAQs matching your search. Try a different term or browse the categories.
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="btn-outline"
                >
                  View All FAQs
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground">
                Our customer support team is here to help you with any questions or concerns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-xl text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a href="mailto:support@organictrove.in" className="text-primary font-medium">
                  support@organictrove.in
                </a>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center animate-fade-in delay-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Available Monday-Saturday, 9am-6pm IST
                </p>
                <a href="tel:+919876543210" className="text-primary font-medium">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-xl text-center animate-fade-in delay-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="font-medium mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="text-primary font-medium">
                  Start a Chat
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-earth-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold mb-6 text-center">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="What is your message about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
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

export default Help;
