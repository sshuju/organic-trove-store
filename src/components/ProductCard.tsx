
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  imageSrc,
  category,
  isNew = false,
  isBestSeller = false,
  isFeatured = false,
}) => {
  const handleAddToCart = () => {
    // Get existing cart items from localStorage or initialize empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if product is already in cart
    const existingItemIndex = existingCartItems.findIndex((item: any) => item.id === id);
    
    if (existingItemIndex !== -1) {
      // If product exists, increment quantity
      existingCartItems[existingItemIndex].quantity += 1;
      toast.success(`Increased ${name} quantity in cart`);
    } else {
      // Add new product to cart
      existingCartItems.push({
        id,
        name,
        price,
        quantity: 1,
        imageSrc,
      });
      toast.success(`${name} added to cart successfully!`, {
        description: `₹${price.toLocaleString()} - Click to view cart`,
        action: {
          label: "View Cart",
          onClick: () => window.location.href = '/cart'
        },
      });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-muted">
        <Link to={`/product/${id}`}>
          <img
            src={imageSrc}
            alt={name}
            className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          )}
          {isBestSeller && (
            <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
              Best Seller
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-primary hover:text-white transition-colors shadow-sm">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1">
          <span className="text-xs font-medium text-muted-foreground">
            {category}
          </span>
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="text-base font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">
            ₹{price.toLocaleString()}
          </span>
          <button 
            className="btn-primary py-1 px-3 h-auto flex items-center gap-1 text-sm transition-transform hover:scale-105"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
