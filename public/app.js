
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

// Helper functions
function formatIndianPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function isUserSignedIn() {
  return localStorage.getItem('isSignedIn') === 'true';
}

function checkSignIn(event) {
  if (!isUserSignedIn()) {
    event.preventDefault();
    event.stopPropagation();
    showSignInRequired();
    return false;
  }
  return true;
}

function showSignInRequired() {
  document.getElementById('signin-required').classList.add('show');
  document.getElementById('signin-overlay').classList.add('show');
}

function hideSignInRequired() {
  document.getElementById('signin-required').classList.remove('show');
  document.getElementById('signin-overlay').classList.remove('show');
}

function signIn() {
  localStorage.setItem('isSignedIn', 'true');
  hideSignInRequired();
  renderApp(); // Re-render to update UI
}

function signOut() {
  localStorage.removeItem('isSignedIn');
  renderApp(); // Re-render to update UI
}

function navigateTo(page) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-container');
  pages.forEach(page => page.style.display = 'none');
  
  // Show selected page
  const selectedPage = document.getElementById(page + '-page');
  if (selectedPage) {
    selectedPage.style.display = 'block';
  }
  
  // Update active state in navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === page) {
      link.classList.add('active');
    }
  });
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Header Component
function Header() {
  const signedIn = isUserSignedIn();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return React.createElement('header', null,
    React.createElement('div', { className: 'container header-container' },
      // Logo
      React.createElement('a', { 
        href: '#', 
        className: 'logo',
        onClick: (e) => {
          e.preventDefault();
          navigateTo('home');
        }
      }, 
        React.createElement('span', null, 'Organic'),
        'Trove'
      ),
      
      // Desktop Navigation
      React.createElement('nav', { className: 'nav-desktop' },
        React.createElement('a', { 
          href: '#', 
          className: 'nav-link active',
          'data-page': 'home',
          onClick: (e) => {
            e.preventDefault();
            navigateTo('home');
          }
        }, 'Home'),
        React.createElement('a', {
          href: '#',
          className: 'nav-link',
          'data-page': 'products',
          onClick: (e) => {
            e.preventDefault();
            navigateTo('products');
          }
        }, 'Products'),
        React.createElement('a', {
          href: '#',
          className: 'nav-link',
          'data-page': 'about',
          onClick: (e) => {
            e.preventDefault();
            navigateTo('about');
          }
        }, 'About'),
        React.createElement('a', {
          href: '#',
          className: 'nav-link',
          'data-page': 'help',
          onClick: (e) => {
            e.preventDefault();
            navigateTo('help');
          }
        }, 'Help')
      ),
      
      // Navigation Actions
      React.createElement('div', { className: 'nav-actions' },
        React.createElement('button', { 
          className: 'icon-button',
          onClick: (e) => {
            if (checkSignIn(e)) {
              navigateTo('cart');
            }
          }
        }, 
          '🛒',
          React.createElement('span', { className: 'cart-count' }, '0')
        ),
        signedIn ? 
          React.createElement('button', {
            className: 'btn btn-outline btn-desktop',
            onClick: signOut
          }, 'Sign Out') :
          React.createElement('button', {
            className: 'btn btn-outline btn-desktop',
            onClick: () => navigateTo('login')
          }, 'Sign In'),
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
      React.createElement('a', { 
        href: '#', 
        className: 'nav-link active',
        'data-page': 'home',
        onClick: (e) => {
          e.preventDefault();
          navigateTo('home');
          setIsMenuOpen(false);
        }
      }, 'Home'),
      React.createElement('a', {
        href: '#',
        className: 'nav-link',
        'data-page': 'products',
        onClick: (e) => {
          e.preventDefault();
          navigateTo('products');
          setIsMenuOpen(false);
        }
      }, 'Products'),
      React.createElement('a', {
        href: '#',
        className: 'nav-link',
        'data-page': 'about',
        onClick: (e) => {
          e.preventDefault();
          navigateTo('about');
          setIsMenuOpen(false);
        }
      }, 'About'),
      React.createElement('a', {
        href: '#',
        className: 'nav-link',
        'data-page': 'help',
        onClick: (e) => {
          e.preventDefault();
          navigateTo('help');
          setIsMenuOpen(false);
        }
      }, 'Help'),
      signedIn ? 
        React.createElement('button', {
          className: 'btn btn-primary w-full mt-4',
          onClick: () => {
            signOut();
            setIsMenuOpen(false);
          }
        }, 'Sign Out') :
        React.createElement('button', {
          className: 'btn btn-primary w-full mt-4',
          onClick: () => {
            navigateTo('login');
            setIsMenuOpen(false);
          }
        }, 'Sign In')
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
        React.createElement('button', { 
          className: 'btn btn-primary',
          onClick: () => navigateTo('products') 
        }, 'Shop Now'),
        React.createElement('button', { 
          className: 'btn btn-outline',
          onClick: () => navigateTo('about')
        }, 'Learn More')
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
        navigateTo('product');
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
        React.createElement('div', { className: 'product-price' }, formatIndianPrice(product.price)),
        React.createElement('button', { 
          className: 'btn-add',
          onClick: (e) => {
            e.stopPropagation();
            if (checkSignIn(e)) {
              console.log('Add to cart:', product.name);
            }
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
      ),
      React.createElement('div', { className: 'pagination' },
        React.createElement('button', { 
          className: 'pagination-button',
          disabled: true
        }, '← Previous'),
        React.createElement('button', { 
          className: 'pagination-button active'
        }, '1'),
        React.createElement('button', { 
          className: 'pagination-button'
        }, '2'),
        React.createElement('button', { 
          className: 'pagination-button'
        }, '3'),
        React.createElement('button', { 
          className: 'pagination-button'
        }, 'Next →')
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
            React.createElement('li', null, React.createElement('a', { 
              href: '#',
              onClick: (e) => {
                e.preventDefault();
                navigateTo('products');
              }
            }, 'All Products')),
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
            React.createElement('li', null, React.createElement('a', { 
              href: '#',
              onClick: (e) => {
                e.preventDefault();
                navigateTo('about');
              }
            }, 'Our Story')),
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
            React.createElement('li', null, React.createElement('a', { 
              href: '#',
              onClick: (e) => {
                e.preventDefault();
                navigateTo('help');
              }
            }, 'FAQ')),
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
              React.createElement('span', { className: 'footer-contact-text' }, '+91 98765 43210')
            ),
            React.createElement('li', null,
              React.createElement('span', { className: 'footer-contact-icon' }, '✉️'),
              React.createElement('span', { className: 'footer-contact-text' }, 'hello@organictrove.com')
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
        React.createElement('div', { className: 'footer-copyright' }, '© 2023 OrganicTrove. All rights reserved.'),
        React.createElement('div', { className: 'footer-legal' },
          React.createElement('a', { href: '#' }, 'Privacy Policy'),
          React.createElement('a', { href: '#' }, 'Terms of Service')
        )
      )
    )
  );
}

// About Page Component
function AboutPage() {
  return React.createElement('div', { id: 'about-page', className: 'page-container', style: { display: 'none' } },
    React.createElement('div', { className: 'container py-8' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'About OrganicTrove'),
      React.createElement('p', { className: 'mb-4' }, 'OrganicTrove is dedicated to bringing you the finest organic and sustainable products that are good for both you and the planet.'),
      React.createElement('p', { className: 'mb-4' }, 'Our mission is to make sustainable living accessible to everyone. We carefully select each product in our store to ensure it meets our strict standards for quality, sustainability, and ethical production.'),
      React.createElement('h2', { className: 'text-2xl font-bold mt-8 mb-4' }, 'Our Story'),
      React.createElement('p', { className: 'mb-4' }, 'Founded in 2020, OrganicTrove began as a small online store with a handful of organic products. Today, we offer a wide range of sustainable options across multiple categories.')
    )
  );
}

// Help Page Component
function HelpPage() {
  return React.createElement('div', { id: 'help-page', className: 'page-container', style: { display: 'none' } },
    React.createElement('div', { className: 'container py-8' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'Help & Support'),
      React.createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Frequently Asked Questions'),
      React.createElement('div', { className: 'mb-6' },
        React.createElement('h3', { className: 'font-bold mb-2' }, 'What does organic really mean?'),
        React.createElement('p', null, 'Organic refers to products grown without synthetic pesticides, fertilizers, genetically modified organisms, or ionizing radiation.')
      ),
      React.createElement('div', { className: 'mb-6' },
        React.createElement('h3', { className: 'font-bold mb-2' }, 'How do you ship your products?'),
        React.createElement('p', null, 'We use eco-friendly packaging materials and carbon-neutral shipping methods whenever possible.')
      ),
      React.createElement('div', { className: 'mb-6' },
        React.createElement('h3', { className: 'font-bold mb-2' }, 'What is your return policy?'),
        React.createElement('p', null, 'We offer a 30-day return policy for most items. Please contact our customer support for more details.')
      )
    )
  );
}

// Login Page Component
function LoginPage() {
  return React.createElement('div', { id: 'login-page', className: 'page-container', style: { display: 'none' } },
    React.createElement('div', { className: 'container py-8' },
      React.createElement('div', { className: 'max-w-md mx-auto bg-white p-8 rounded shadow-md' },
        React.createElement('h1', { className: 'text-2xl font-bold mb-6 text-center' }, 'Sign In'),
        React.createElement('form', { 
          onSubmit: (e) => {
            e.preventDefault();
            signIn();
            navigateTo('home');
          }
        },
          React.createElement('div', { className: 'mb-4' },
            React.createElement('label', { className: 'block mb-2' }, 'Email'),
            React.createElement('input', { 
              type: 'email',
              className: 'w-full border rounded p-2',
              required: true
            })
          ),
          React.createElement('div', { className: 'mb-6' },
            React.createElement('label', { className: 'block mb-2' }, 'Password'),
            React.createElement('input', { 
              type: 'password',
              className: 'w-full border rounded p-2',
              required: true
            })
          ),
          React.createElement('button', { 
            type: 'submit',
            className: 'btn btn-primary w-full'
          }, 'Sign In')
        ),
        React.createElement('p', { className: 'mt-4 text-center' }, 'Don\'t have an account? ',
          React.createElement('a', { href: '#', className: 'text-green-600' }, 'Sign Up')
        )
      )
    )
  );
}

// Cart Page Component
function CartPage() {
  return React.createElement('div', { id: 'cart-page', className: 'page-container', style: { display: 'none' } },
    React.createElement('div', { className: 'container py-8' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'Your Cart'),
      React.createElement('p', { className: 'text-center py-8' }, 'Your cart is empty.'),
      React.createElement('div', { className: 'text-center' },
        React.createElement('button', { 
          className: 'btn btn-primary',
          onClick: () => navigateTo('products')
        }, 'Continue Shopping')
      )
    )
  );
}

// Product Page Component
function ProductPage() {
  return React.createElement('div', { id: 'product-page', className: 'page-container', style: { display: 'none' } },
    React.createElement('div', { className: 'container py-8' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'Product Details'),
      React.createElement('p', { className: 'text-center py-8' }, 'Product information will be displayed here.'),
      React.createElement('div', { className: 'text-center' },
        React.createElement('button', { 
          className: 'btn btn-primary',
          onClick: () => navigateTo('products')
        }, 'Back to Products')
      )
    )
  );
}

// Products Page Component
function ProductsPage() {
  return React.createElement('div', { id: 'products-page', className: 'page-container', style: { display: 'none' } },
    React.createElement('div', { className: 'container py-8' },
      React.createElement('h1', { className: 'text-3xl font-bold mb-6' }, 'All Products'),
      React.createElement('div', { className: 'product-grid mb-8' },
        allProducts.map(product => 
          React.createElement(ProductCard, { key: product.id, product: product })
        )
      ),
      React.createElement('div', { className: 'pagination' },
        React.createElement('button', { 
          className: 'pagination-button',
          disabled: true
        }, '← Previous'),
        React.createElement('button', { 
          className: 'pagination-button active'
        }, '1'),
        React.createElement('button', { 
          className: 'pagination-button'
        }, '2'),
        React.createElement('button', { 
          className: 'pagination-button'
        }, '3'),
        React.createElement('button', { 
          className: 'pagination-button'
        }, 'Next →')
      )
    )
  );
}

// SignIn Required Component
function SignInRequired() {
  return React.createElement('div', null,
    React.createElement('div', { id: 'signin-overlay', className: 'signin-overlay', onClick: hideSignInRequired }),
    React.createElement('div', { id: 'signin-required', className: 'signin-required' },
      React.createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Sign In Required'),
      React.createElement('p', { className: 'mb-4' }, 'Please sign in to add products to your cart.'),
      React.createElement('div', { className: 'flex space-x-4' },
        React.createElement('button', { 
          className: 'btn btn-outline flex-1',
          onClick: hideSignInRequired
        }, 'Cancel'),
        React.createElement('button', { 
          className: 'btn btn-primary flex-1',
          onClick: () => {
            hideSignInRequired();
            navigateTo('login');
          }
        }, 'Sign In')
      )
    )
  );
}

// Home Page Component (Main Page)
function HomePage() {
  return React.createElement('div', { id: 'home-page', className: 'page-container' },
    React.createElement(Hero, null),
    React.createElement(ProductsSection, null),
    React.createElement(FeaturesSection, null)
  );
}

// Main App Component
function App() {
  return React.createElement('div', { className: 'app' },
    React.createElement(Header, null),
    React.createElement(HomePage, null),
    React.createElement(ProductsPage, null),
    React.createElement(AboutPage, null),
    React.createElement(HelpPage, null),
    React.createElement(LoginPage, null),
    React.createElement(CartPage, null),
    React.createElement(ProductPage, null),
    React.createElement(SignInRequired, null),
    React.createElement(Footer, null)
  );
}

// Initial render function
function renderApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
}

// Render the App when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderApp();
  
  // Initialize to home page
  navigateTo('home');
});
