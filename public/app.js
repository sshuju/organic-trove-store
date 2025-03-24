
// Product data
const allProducts = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    description: "100% organic turmeric powder rich in curcumin, grown without pesticides or chemicals.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1615485500704-8e990f9900e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    isBestSeller: true
  },
  {
    id: 2,
    name: "Bamboo Toothbrush Set",
    description: "Eco-friendly bamboo toothbrushes with biodegradable handles and BPA-free bristles.",
    price: 249,
    imageSrc: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Personal Care",
    isNew: true
  },
  {
    id: 3,
    name: "Organic Coconut Oil",
    description: "Cold-pressed virgin coconut oil from certified organic coconuts.",
    price: 349,
    imageSrc: "https://images.unsplash.com/photo-1594373505583-89a04f1e2dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness"
  },
  {
    id: 4,
    name: "Zero Waste Starter Kit",
    description: "Essential zero waste items including cotton bags, stainless steel straws, and more.",
    price: 799,
    imageSrc: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
    isFeatured: true
  },
  {
    id: 5,
    name: "Organic Honey",
    description: "Pure, raw, unfiltered honey from organic wild flowers.",
    price: 399,
    imageSrc: "https://images.unsplash.com/photo-1582126892906-5ba118eaf46a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices"
  },
  {
    id: 6,
    name: "Reusable Cotton Produce Bags",
    description: "Set of 5 organic cotton mesh bags for grocery shopping.",
    price: 349,
    imageSrc: "https://images.unsplash.com/photo-1611068661807-c5331462778d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living"
  }
];

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return React.createElement('header', null,
    React.createElement('div', { className: 'container header-container' },
      // Logo
      React.createElement('a', { href: '#', className: 'logo' }, 
        React.createElement('span', null, 'Eco'),
        'Store'
      ),
      
      // Desktop Navigation
      React.createElement('nav', { className: 'nav-desktop' },
        React.createElement('a', { href: '#', className: 'active' }, 'Home'),
        React.createElement('a', { href: '#' }, 'Products'),
        React.createElement('a', { href: '#' }, 'About'),
        React.createElement('a', { href: '#' }, 'Help')
      ),
      
      // Navigation Actions
      React.createElement('div', { className: 'nav-actions' },
        React.createElement('button', { 
          className: 'icon-button',
          onClick: () => console.log('Cart clicked')
        }, 
          '🛒',
          React.createElement('span', { className: 'cart-count' }, '0')
        ),
        React.createElement('button', { 
          className: 'nav-mobile-toggle',
          onClick: () => setIsMenuOpen(!isMenuOpen)
        }, '☰')
      )
    ),
    
    // Mobile Navigation
    React.createElement('div', { 
      className: `nav-mobile ${isMenuOpen ? 'open' : ''}`,
    },
      React.createElement('a', { href: '#', className: 'active' }, 'Home'),
      React.createElement('a', { href: '#' }, 'Products'),
      React.createElement('a', { href: '#' }, 'About'),
      React.createElement('a', { href: '#' }, 'Help'),
      React.createElement('a', { href: '#' }, 'Login')
    )
  );
}

// Hero Component
function Hero() {
  return React.createElement('section', { className: 'hero' },
    React.createElement('div', { className: 'container' },
      React.createElement('h1', null, 'Sustainable Living Made Simple'),
      React.createElement('p', null, 'Discover eco-friendly products that help you reduce waste and live more sustainably. Every small choice makes a big difference.'),
      React.createElement('div', { className: 'hero-buttons' },
        React.createElement('button', { className: 'btn btn-primary' }, 'Shop Now'),
        React.createElement('button', { className: 'btn btn-outline' }, 'Learn More')
      ),
      React.createElement('div', { className: 'hero-image' },
        React.createElement('img', { 
          src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Eco-friendly products',
          onError: (e) => {
            e.target.classList.add('error');
            e.target.src = 'https://placehold.co/600x400?text=Eco-friendly+products';
          }
        })
      )
    )
  );
}

// ProductCard Component
function ProductCard({ product }) {
  return React.createElement('div', { className: 'product-card' },
    React.createElement('a', { 
      href: '#',
      className: 'card-link', 
      onClick: (e) => {
        e.preventDefault();
        console.log('Product clicked:', product.name);
      }
    }),
    React.createElement('div', { className: 'product-image' },
      React.createElement('img', {
        src: product.imageSrc,
        alt: product.name,
        onError: (e) => {
          e.target.classList.add('error');
          e.target.src = 'https://placehold.co/600x400?text=Product+Image';
        }
      }),
      React.createElement('div', { className: 'product-badges' },
        product.isNew && React.createElement('span', { className: 'badge badge-new' }, 'New'),
        product.isBestSeller && React.createElement('span', { className: 'badge badge-bestseller' }, 'Best Seller')
      )
    ),
    React.createElement('div', { className: 'product-details' },
      React.createElement('div', { className: 'product-category' }, product.category),
      React.createElement('h3', { className: 'product-title' }, product.name),
      React.createElement('p', { className: 'product-description' }, product.description),
      React.createElement('div', { className: 'product-footer' },
        React.createElement('div', { className: 'product-price' }, `$${(product.price / 100).toFixed(2)}`),
        React.createElement('button', { 
          className: 'btn-add',
          onClick: (e) => {
            e.stopPropagation();
            console.log('Add to cart:', product.name);
          }
        }, '+ Add')
      )
    )
  );
}

// Products Section Component
function ProductsSection() {
  return React.createElement('section', { className: 'products-section' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'section-title' },
        React.createElement('h2', null, 'Featured Products'),
        React.createElement('p', null, 'Handpicked eco-friendly products to help you live more sustainably.')
      ),
      React.createElement('div', { className: 'product-grid' },
        allProducts.map(product => 
          React.createElement(ProductCard, { key: product.id, product: product })
        )
      )
    )
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return React.createElement('div', { className: 'feature-card' },
    React.createElement('div', { className: 'feature-icon' }, icon),
    React.createElement('h3', { className: 'feature-title' }, title),
    React.createElement('p', { className: 'feature-description' }, description)
  );
}

// Features Section Component
function FeaturesSection() {
  const features = [
    { icon: '🌱', title: 'Sustainable', description: 'All our products are chosen with sustainability in mind, minimizing environmental impact.' },
    { icon: '♻️', title: 'Eco-Friendly', description: 'We prioritize products made from recycled materials or that are easily recyclable.' },
    { icon: '🌍', title: 'Ethical', description: 'We ensure all products are ethically sourced and support fair labor practices.' },
    { icon: '📦', title: 'Minimal Packaging', description: 'Our packaging is plastic-free and made from recycled or compostable materials.' }
  ];

  return React.createElement('section', { className: 'features' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'features-grid' },
        features.map((feature, index) => 
          React.createElement(FeatureCard, {
            key: index,
            icon: feature.icon,
            title: feature.title,
            description: feature.description
          })
        )
      )
    )
  );
}

// Footer Component
function Footer() {
  return React.createElement('footer', null,
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'footer-grid' },
        // Shop column
        React.createElement('div', { className: 'footer-column' },
          React.createElement('h3', null, 'Shop'),
          React.createElement('ul', { className: 'footer-links' },
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'All Products')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Food & Spices')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Personal Care')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Home & Living')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Beauty & Wellness'))
          )
        ),
        
        // About column
        React.createElement('div', { className: 'footer-column' },
          React.createElement('h3', null, 'About'),
          React.createElement('ul', { className: 'footer-links' },
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Our Story')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Our Values')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Sustainability')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Certifications')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Blog'))
          )
        ),
        
        // Help column
        React.createElement('div', { className: 'footer-column' },
          React.createElement('h3', null, 'Help'),
          React.createElement('ul', { className: 'footer-links' },
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'FAQ')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Shipping & Returns')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Payment Options')),
            React.createElement('li', null, React.createElement('a', { href: '#' }, 'Contact Us'))
          )
        ),
        
        // Contact column
        React.createElement('div', { className: 'footer-column' },
          React.createElement('h3', null, 'Contact'),
          React.createElement('ul', { className: 'footer-contact' },
            React.createElement('li', null,
              React.createElement('span', { className: 'footer-contact-icon' }, '📍'),
              React.createElement('span', { className: 'footer-contact-text' }, '123 Green Street, Earth City, EC 12345')
            ),
            React.createElement('li', null,
              React.createElement('span', { className: 'footer-contact-icon' }, '📞'),
              React.createElement('span', { className: 'footer-contact-text' }, '+1 (555) 123-4567')
            ),
            React.createElement('li', null,
              React.createElement('span', { className: 'footer-contact-icon' }, '✉️'),
              React.createElement('span', { className: 'footer-contact-text' }, 'hello@ecostore.com')
            )
          ),
          
          React.createElement('div', { className: 'footer-social' },
            React.createElement('a', { href: '#', className: 'social-icon' }, '📱'),
            React.createElement('a', { href: '#', className: 'social-icon' }, '📷'),
            React.createElement('a', { href: '#', className: 'social-icon' }, '🐦'),
            React.createElement('a', { href: '#', className: 'social-icon' }, '📝')
          )
        )
      ),
      
      // Footer bottom
      React.createElement('div', { className: 'footer-bottom' },
        React.createElement('div', { className: 'footer-copyright' }, '© 2023 EcoStore. All rights reserved.'),
        React.createElement('div', { className: 'footer-legal' },
          React.createElement('a', { href: '#' }, 'Privacy Policy'),
          React.createElement('a', { href: '#' }, 'Terms of Service')
        )
      )
    )
  );
}

// Main App Component
function App() {
  return React.createElement('div', { className: 'app' },
    React.createElement(Header, null),
    React.createElement('main', null,
      React.createElement(Hero, null),
      React.createElement(ProductsSection, null),
      React.createElement(FeaturesSection, null)
    ),
    React.createElement(Footer, null)
  );
}

// Render the App
document.addEventListener('DOMContentLoaded', function() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
});
