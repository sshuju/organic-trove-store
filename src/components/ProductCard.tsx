
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInRequired from './SignInRequired';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    imageSrc: string;
    category: string;
    isNew?: boolean;
    isBestSeller?: boolean;
    isFeatured?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showSignInModal, setShowSignInModal] = useState(false);

  // Format price in Indian Rupees
  const formatIndianPrice = (price: number) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  // Check if user is signed in
  const isUserSignedIn = () => {
    return localStorage.getItem('isSignedIn') === 'true';
  };

  // Handle add to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isUserSignedIn()) {
      setShowSignInModal(true);
      return;
    }

    // Get existing cart items or initialize empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if product already in cart
    const existingItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // Increase quantity if product already in cart
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      cartItems.push({
        ...product,
        quantity: 1
      });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Trigger storage event for other components to update
    window.dispatchEvent(new Event('storage'));
    
    // Visual feedback
    const button = e.currentTarget;
    button.classList.add('bg-green-700');
    setTimeout(() => {
      button.classList.remove('bg-green-700');
    }, 300);
  };

  return (
    <>
      <div className="product-card">
        <Link to={`/product/${product.id}`} className="card-link" />
        <div className="product-image">
          <img 
            src={product.imageSrc} 
            alt={product.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400?text=Product+Image';
              target.classList.add('error');
            }}
          />
          <div className="product-badges">
            {product.isNew && <span className="badge badge-new">New</span>}
            {product.isBestSeller && <span className="badge badge-bestseller">Best Seller</span>}
          </div>
        </div>
        <div className="product-details">
          <div className="product-category">{product.category}</div>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <div className="product-price">
              <span className="currency-symbol">₹</span>
              {product.price.toLocaleString('en-IN')}
            </div>
            <button 
              className="btn-add"
              onClick={handleAddToCart}
            >
              + Add
            </button>
          </div>
        </div>
      </div>

      <SignInRequired 
        isOpen={showSignInModal} 
        onClose={() => setShowSignInModal(false)} 
      />
    </>
  );
};

export default ProductCard;
