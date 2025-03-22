import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  ShieldCheck, 
  RefreshCw, 
  Star, 
  Minus, 
  Plus, 
  ChevronRight 
} from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const allProducts = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    description: "100% organic turmeric powder rich in curcumin, grown without pesticides or chemicals.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1615485500704-8e990f9900e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    isBestSeller: true,
    detailedDescription: `Our organic turmeric powder is sourced from farms in Kerala that follow traditional farming practices. The turmeric roots are carefully cleaned, boiled, dried, and ground to produce this vibrant yellow powder.

Turmeric contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties. It has been used in Ayurvedic medicine for thousands of years.

Benefits:
- Anti-inflammatory properties
- Rich in antioxidants
- Improves digestion
- Boosts immunity

Ingredients: 100% organic turmeric (Curcuma longa)

Storage: Store in a cool, dry place away from direct sunlight. Once opened, consume within 6 months for best flavor and potency.`,
    usage: "Add to curries, soups, smoothies, or golden milk. For golden milk, mix 1/2 teaspoon with warm milk, honey, and a pinch of black pepper.",
    weight: "100g",
    origin: "Kerala, India",
    certifications: ["USDA Organic", "India Organic", "Non-GMO"],
    nutritionalInfo: "Serving Size: 1 tsp (2g)\nCalories: 7\nTotal Fat: 0.1g\nCarbohydrates: 1.3g\nProtein: 0.2g\nCurcumin: ~3%",
    reviews: [
      { id: 1, user: "Priya M.", rating: 5, comment: "Excellent quality turmeric with vibrant color and aroma. My golden milk has never tasted better!", date: "2023-09-15" },
      { id: 2, user: "Rahul K.", rating: 4, comment: "Good product, packaging is eco-friendly too.", date: "2023-08-22" },
      { id: 3, user: "Ananya S.", rating: 5, comment: "The best turmeric powder I've used. You can tell it's fresh and high quality.", date: "2023-10-05" },
    ],
  },
  {
    id: 2,
    name: "Bamboo Toothbrush Set",
    description: "Eco-friendly bamboo toothbrushes with biodegradable handles and BPA-free bristles.",
    price: 249,
    imageSrc: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Personal Care",
    isNew: true,
    detailedDescription: `Our bamboo toothbrush set includes 4 eco-friendly toothbrushes with biodegradable handles made from sustainably harvested bamboo. The bristles are BPA-free and infused with activated charcoal for natural whitening.

By switching to bamboo toothbrushes, you're preventing plastic waste from entering landfills and oceans. A single plastic toothbrush can take over 400 years to decompose, while our bamboo handles are fully compostable.

Features:
- Ergonomic handle design for comfortable brushing
- Medium-soft bristles suitable for sensitive gums
- Naturally antimicrobial bamboo handles
- Minimalist design with engraved numbering for family use

What's in the box: 4 bamboo toothbrushes in different colors (natural, blue, green, and pink bristles)`,
    usage: "Replace your toothbrush every 3 months as recommended by dentists. When it's time to dispose, remove the bristles (which should go in regular waste) and compost the bamboo handle.",
    materials: "Handle: 100% biodegradable Moso bamboo\nBristles: BPA-free nylon with activated charcoal",
    certifications: ["Plastic-Free", "Vegan", "Cruelty-Free"],
    careInstructions: "For best results, rinse thoroughly after use and store in a dry place. Avoid leaving in standing water to extend the life of the bamboo.",
    reviews: [
      { id: 1, user: "Aditya R.", rating: 5, comment: "Great quality brushes and love that they come in different colors for the family to identify their own.", date: "2023-09-02" },
      { id: 2, user: "Meera J.", rating: 4, comment: "Nice product, but bristles are a bit stiffer than expected. Still a good eco-friendly option.", date: "2023-10-18" },
      { id: 3, user: "Vikram S.", rating: 5, comment: "Our whole family has switched to these. I love that we're reducing our plastic consumption.", date: "2023-08-11" },
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  
  useEffect(() => {
    const productId = parseInt(id || "0");
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      const related = allProducts
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    window.scrollTo(0, 0);
  }, [id]);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (!product) return;
    
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    const existingItemIndex = existingCartItems.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      existingCartItems[existingItemIndex].quantity += quantity;
      toast.success(`Updated ${product.name} quantity in cart`, {
        description: `New quantity: ${existingCartItems[existingItemIndex].quantity}`,
      });
    } else {
      existingCartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        imageSrc: product.imageSrc,
      });
      toast.success(`${product.name} added to cart successfully!`, {
        description: `${quantity} × ₹${product.price.toLocaleString()} added to your cart`,
        action: {
          label: "View Cart",
          onClick: () => window.location.href = '/cart'
        },
      });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center animate-pulse">
            <div className="h-6 w-32 bg-muted rounded-md mx-auto mb-4"></div>
            <div className="h-4 w-64 bg-muted rounded-md mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 animate-fade-in">
        <div className="bg-earth-light py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li>
                  <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li>
                  <Link 
                    to={`/products?category=${product.category.toLowerCase().replace(/ & /g, "-")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {product.category}
                  </Link>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li className="font-medium text-foreground truncate max-w-[200px]">
                  {product.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div 
                className={`relative rounded-xl overflow-hidden bg-white border border-muted ${
                  isImageZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsImageZoomed(!isImageZoomed)}
              >
                <img 
                  src={product.imageSrc} 
                  alt={product.name}
                  className={`w-full h-auto object-cover transition-transform duration-300 ${
                    isImageZoomed ? "scale-150" : "scale-100"
                  }`}
                />
                {product.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Bestseller
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Click image to zoom
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="mb-2">
                <span className="text-sm text-muted-foreground font-medium">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-display font-bold mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < 4.5 ? "text-amber-400 fill-amber-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.reviews?.length || 0} reviews)
                </span>
              </div>
              
              <div className="text-2xl font-semibold mb-6">
                ₹{product.price.toLocaleString()}
              </div>
              
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
              
              <div className="flex flex-col space-y-6 mb-8">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center border border-input rounded-md w-32">
                    <button 
                      onClick={decrementQuantity}
                      className="flex-1 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="flex-1 h-10 flex items-center justify-center font-medium">
                      {quantity}
                    </span>
                    <button 
                      onClick={incrementQuantity}
                      className="flex-1 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    className="btn-primary flex items-center"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button className="btn-outline">
                    <Heart className="h-5 w-5 mr-2" />
                    Add to Wishlist
                  </button>
                  <button className="btn-outline">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </div>
              
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Free shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      On orders above ₹499
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Certified Organic</h4>
                    <p className="text-sm text-muted-foreground">
                      100% organic and sustainably sourced
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RefreshCw className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Easy Returns</h4>
                    <p className="text-sm text-muted-foreground">
                      30-day hassle-free returns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="border-b border-border">
              <div className="flex flex-wrap -mb-px">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm mr-8 ${
                    activeTab === "description"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm mr-8 ${
                    activeTab === "details"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                  }`}
                >
                  Details & Specifications
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "reviews"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                  }`}
                >
                  Reviews ({product.reviews?.length || 0})
                </button>
              </div>
            </div>
            
            <div className="py-8 animate-fade-in">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{product.detailedDescription}</p>
                  {product.usage && (
                    <>
                      <h3 className="text-lg font-medium mt-6 mb-2">How to Use</h3>
                      <p>{product.usage}</p>
                    </>
                  )}
                </div>
              )}
              
              {activeTab === "details" && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      {product.weight && (
                        <div className="py-3 border-b border-border">
                          <div className="flex justify-between">
                            <span className="font-medium">Weight/Volume</span>
                            <span>{product.weight}</span>
                          </div>
                        </div>
                      )}
                      {product.origin && (
                        <div className="py-3 border-b border-border">
                          <div className="flex justify-between">
                            <span className="font-medium">Origin</span>
                            <span>{product.origin}</span>
                          </div>
                        </div>
                      )}
                      {product.materials && (
                        <div className="py-3 border-b border-border">
                          <div className="flex justify-between">
                            <span className="font-medium">Materials</span>
                            <span className="text-right">{product.materials.split('\n').join(', ')}</span>
                          </div>
                        </div>
                      )}
                      {product.careInstructions && (
                        <div className="py-3 border-b border-border">
                          <div className="flex justify-between">
                            <span className="font-medium">Care Instructions</span>
                            <span className="text-right max-w-xs">{product.careInstructions}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      {product.certifications && (
                        <div className="py-3 border-b border-border">
                          <div className="flex justify-between">
                            <span className="font-medium">Certifications</span>
                            <span className="text-right">{product.certifications.join(', ')}</span>
                          </div>
                        </div>
                      )}
                      {product.nutritionalInfo && (
                        <div className="py-3">
                          <h3 className="font-medium mb-2">Nutritional Information</h3>
                          <p className="whitespace-pre-line text-sm bg-muted p-3 rounded-md">
                            {product.nutritionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <div>
                  {product.reviews && product.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {product.reviews.map((review: any) => (
                        <div key={review.id} className="border-b border-border pb-6">
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-muted"}`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 font-medium text-sm">
                              {review.user}
                            </span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        No reviews yet. Be the first to review this product!
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <button className="btn-outline">
                      Write a Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-bold mb-8">You May Also Like</h2>
              <div className="product-grid">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
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

export default ProductDetail;
