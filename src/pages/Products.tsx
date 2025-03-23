
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Mock product data with verified image URLs
const allProducts = [
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
  {
    id: 5,
    name: "Organic Honey",
    description: "Pure, raw, unfiltered honey from organic wild flowers.",
    price: 399,
    imageSrc: "https://images.unsplash.com/photo-1582126892906-5ba118eaf46a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
  },
  {
    id: 6,
    name: "Reusable Cotton Produce Bags",
    description: "Set of 5 organic cotton mesh bags for grocery shopping.",
    price: 349,
    imageSrc: "https://images.unsplash.com/photo-1611068661807-c5331462778d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
  },
  {
    id: 7,
    name: "Aloe Vera Gel",
    description: "Pure organic aloe vera gel for skin and hair care.",
    price: 299,
    imageSrc: "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness",
    isNew: true,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    description: "Insulated, BPA-free water bottle that keeps beverages hot or cold.",
    price: 599,
    imageSrc: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
  },
  {
    id: 9,
    name: "Organic Green Tea",
    description: "Premium loose-leaf green tea grown in the foothills of the Himalayas.",
    price: 249,
    imageSrc: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
  },
  {
    id: 10,
    name: "Natural Loofah Scrub",
    description: "Biodegradable loofah scrubber for kitchen and bathroom cleaning.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1615166358596-e6fc692f8ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
  },
  {
    id: 11,
    name: "Organic Jaggery",
    description: "Traditional unrefined sugar with minerals and iron content.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1576244836533-63b2546dd255?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
  },
  {
    id: 12,
    name: "Herbal Shampoo Bar",
    description: "Plastic-free shampoo bar with natural herbs for healthy hair.",
    price: 299,
    imageSrc: "https://images.unsplash.com/photo-1601612634522-5de8fcf0ef76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness",
    isBestSeller: true,
  },
];

// Filter categories
const categories = [
  "All",
  "Food & Spices",
  "Personal Care",
  "Beauty & Wellness",
  "Home & Living",
];

// Price ranges
const priceRanges = [
  { label: "Under ₹250", min: 0, max: 250 },
  { label: "₹250 - ₹500", min: 250, max: 500 },
  { label: "₹500 - ₹750", min: 500, max: 750 },
  { label: "₹750+", min: 750, max: Infinity },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  // Extract category from URL if present
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      // Handle category parameter format (e.g., "food-spices" -> "Food & Spices")
      const formattedCategory = categoryParam
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" & ");
      
      // Find closest match in categories
      const closestMatch = categories.find(cat => 
        cat.toLowerCase().includes(categoryParam.toLowerCase())
      ) || "All";
      
      setSelectedCategory(closestMatch);
    } else {
      setSelectedCategory("All");
    }
    
    window.scrollTo(0, 0);
  }, [location, searchParams]);

  // Filter products based on selected filters
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    // Filter by category
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    // Filter by price range
    if (selectedPriceRange.length === 2) {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // In a real app, you'd sort by date
        filteredProducts.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1));
        break;
      case "featured":
      default:
        // Featured products first, then bestsellers
        filteredProducts.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return 0;
        });
        break;
    }
    
    setProducts(filteredProducts);
  }, [selectedCategory, selectedPriceRange, sortBy]);

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams(params => {
      if (category === "All") {
        params.delete("category");
      } else {
        params.set("category", category.toLowerCase().replace(/ & /g, "-"));
      }
      return params;
    });
  };

  // Handle price range selection
  const handlePriceRangeChange = (min: number, max: number) => {
    setSelectedPriceRange([min, max]);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange([]);
    setSearchParams({});
  };

  // Go to product detail page
  const goToProductDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 animate-fade-in">
        {/* Hero Banner */}
        <div className="bg-earth-light py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Organic Products
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our collection of 100% organic, sustainable, and zero-waste products
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground bg-muted px-3 py-2 rounded-md hover:bg-muted/80 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              
              {(selectedCategory !== "All" || selectedPriceRange.length > 0) && (
                <button 
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-sm font-medium text-destructive hover:text-destructive/80 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
            
            <div className="relative">
              <label htmlFor="sort" className="text-sm text-muted-foreground mr-2">
                Sort by:
              </label>
              <div className="inline-block relative">
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-input rounded-md py-1 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters Section */}
          {showFilters && (
            <div className="bg-earth-light p-4 rounded-lg mb-8 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-${category}`}
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <label htmlFor={`category-${category}`} className="ml-2 text-sm text-foreground">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.label} className="flex items-center">
                        <input
                          type="radio"
                          id={`price-${range.label}`}
                          name="price-range"
                          checked={selectedPriceRange[0] === range.min && selectedPriceRange[1] === range.max}
                          onChange={() => handlePriceRangeChange(range.min, range.max)}
                          className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <label htmlFor={`price-${range.label}`} className="ml-2 text-sm text-foreground">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Count and Applied Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">{products.length} products</span>
            
            {selectedCategory !== "All" && (
              <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                <span>{selectedCategory}</span>
                <button onClick={() => handleCategoryChange("All")}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            
            {selectedPriceRange.length === 2 && (
              <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                <span>
                  {selectedPriceRange[0] === 0 
                    ? `Under ₹${selectedPriceRange[1]}`
                    : selectedPriceRange[1] === Infinity
                      ? `₹${selectedPriceRange[0]}+`
                      : `₹${selectedPriceRange[0]} - ₹${selectedPriceRange[1]}`
                  }
                </span>
                <button onClick={() => setSelectedPriceRange([])}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
          
          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <div key={product.id} onClick={() => goToProductDetail(product.id)} className="cursor-pointer">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <SlidersHorizontal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button 
                onClick={clearFilters}
                className="mt-4 btn-outline"
              >
                Clear Filters
              </button>
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

export default Products;
