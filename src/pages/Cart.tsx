import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ChevronRight, 
  Truck, 
  ArrowRight,
  RefreshCw,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    
    window.scrollTo(0, 0);
  }, []);
  
  const updateQuantity = (id: number, delta: number) => {
    const updatedItems = cartItems.map(item => 
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    
    const item = cartItems.find(item => item.id === id);
    if (item && delta > 0) {
      toast.success(`Increased ${item.name} quantity`);
    } else if (item && delta < 0) {
      toast.success(`Decreased ${item.name} quantity`);
    }
  };
  
  const removeItem = (id: number) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    const updatedItems = cartItems.filter(item => item.id !== id);
    
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    
    if (itemToRemove) {
      toast.success(`${itemToRemove.name} removed from cart`);
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
    toast.success('Cart cleared successfully');
  };
  
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome10') {
      setCouponApplied(true);
      setDiscount(0.1); // 10% discount
      toast.success('Coupon applied successfully!', {
        description: '10% discount has been applied to your order'
      });
    } else {
      setCouponApplied(false);
      setDiscount(0);
      toast.error('Invalid coupon code', {
        description: 'Please check the code and try again'
      });
    }
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const discountAmount = couponApplied ? subtotal * discount : 0;
  
  const shipping = subtotal >= 499 ? 0 : 50;
  
  const total = subtotal - discountAmount + shipping;
  
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 animate-fade-in">
        <div className="bg-earth-light py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-display font-bold text-center">
              Your Shopping Cart
            </h1>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium">
                        Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                      </h2>
                      <button 
                        onClick={clearCart}
                        className="text-sm text-muted-foreground hover:text-destructive transition-colors flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Clear Cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-border">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center animate-fade-in">
                        <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
                          <img 
                            src={item.imageSrc} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-medium mb-1 truncate">
                            <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-primary font-medium">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        
                        <div className="flex items-center mt-4 sm:mt-0">
                          <div className="flex items-center border border-input rounded-md mr-4">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 border-t border-border">
                    <Link 
                      to="/products"
                      className="inline-flex items-center text-primary"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Free Shipping</h3>
                      <p className="text-xs text-muted-foreground">
                        On orders above ₹499
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <RefreshCw className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Easy Returns</h3>
                      <p className="text-xs text-muted-foreground">
                        30-day return policy
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Secure Payment</h3>
                      <p className="text-xs text-muted-foreground">
                        SSL encrypted checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
                  <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-medium">
                      Order Summary
                    </h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    
                    {couponApplied && (
                      <div className="flex justify-between text-primary">
                        <span>Discount (10%)</span>
                        <span>-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : formatPrice(shipping)}
                      </span>
                    </div>
                    
                    <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    
                    <div className="pt-4">
                      <label htmlFor="coupon" className="block text-sm font-medium mb-2">
                        Apply Coupon Code
                      </label>
                      <div className="flex">
                        <input
                          id="coupon"
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon code"
                          className="flex-1 rounded-l-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                        <button 
                          onClick={applyCoupon}
                          className="rounded-r-md border border-primary bg-primary text-primary-foreground px-3 py-2 text-sm font-medium hover:bg-primary/90"
                        >
                          Apply
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Try "WELCOME10" for 10% off your first order
                      </p>
                    </div>
                    
                    <button className="w-full btn-primary mt-6 flex items-center justify-center">
                      <Lock className="h-4 w-4 mr-2" />
                      Proceed to Checkout
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-xs text-muted-foreground mb-2">
                        Secure Payment Options
                      </p>
                      <div className="flex justify-center space-x-2">
                        <img src="https://res.cloudinary.com/di7ejz3xn/image/upload/v1620812045/visa_ixd3qf.svg" alt="Visa" className="h-6" />
                        <img src="https://res.cloudinary.com/di7ejz3xn/image/upload/v1620812045/mastercard_s0zhqv.svg" alt="Mastercard" className="h-6" />
                        <img src="https://res.cloudinary.com/di7ejz3xn/image/upload/v1620812045/rupay_fcwdvt.svg" alt="RuPay" className="h-6" />
                        <img src="https://res.cloudinary.com/di7ejz3xn/image/upload/v1620812045/paytm_v1czm0.svg" alt="Paytm" className="h-6" />
                        <img src="https://res.cloudinary.com/di7ejz3xn/image/upload/v1620812045/upi_awqpvx.svg" alt="UPI" className="h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/products" className="btn-primary">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
          
          {cartItems.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-bold mb-8">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in">
                  <Link to="/product/4" className="block aspect-w-1 aspect-h-1">
                    <img 
                      src="https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Zero Waste Starter Kit" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">
                      <Link to="/product/4" className="hover:text-primary transition-colors">
                        Zero Waste Starter Kit
                      </Link>
                    </h3>
                    <p className="text-primary font-medium">₹799</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-100">
                  <Link to="/product/5" className="block aspect-w-1 aspect-h-1">
                    <img 
                      src="https://images.unsplash.com/photo-1582126892906-5ba118eaf46a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Organic Honey" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">
                      <Link to="/product/5" className="hover:text-primary transition-colors">
                        Organic Honey
                      </Link>
                    </h3>
                    <p className="text-primary font-medium">₹399</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-200">
                  <Link to="/product/7" className="block aspect-w-1 aspect-h-1">
                    <img 
                      src="https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Aloe Vera Gel" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">
                      <Link to="/product/7" className="hover:text-primary transition-colors">
                        Aloe Vera Gel
                      </Link>
                    </h3>
                    <p className="text-primary font-medium">₹299</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-fade-in delay-300">
                  <Link to="/product/8" className="block aspect-w-1 aspect-h-1">
                    <img 
                      src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Stainless Steel Water Bottle" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">
                      <Link to="/product/8" className="hover:text-primary transition-colors">
                        Stainless Steel Water Bottle
                      </Link>
                    </h3>
                    <p className="text-primary font-medium">₹599</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
