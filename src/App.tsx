
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Index from './pages/Index';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import About from './pages/About';
import Help from './pages/Help';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css';

// Global product data to ensure consistency across pages
export const allProducts = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    description: "100% organic turmeric powder rich in curcumin, grown without pesticides or chemicals.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1615485500704-8e990f9900e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    isBestSeller: true,
    longDescription: "Our organic turmeric powder is sourced from the finest farms in India, known for their sustainable farming practices. Turmeric has been used for centuries in Ayurvedic medicine and is known for its anti-inflammatory and antioxidant properties. This high-curcumin turmeric is perfect for cooking, making golden milk, or as a supplement for health benefits.",
    benefits: [
      "Rich in curcumin with powerful anti-inflammatory effects",
      "Strong antioxidant that boosts the body's own antioxidant enzymes",
      "May improve brain function and lower risk of brain diseases",
      "Grown without pesticides or chemical fertilizers"
    ],
    howToUse: "Add to curries, soups, and stews for flavor and color. Mix with warm milk and honey for a soothing golden milk. Can be used in face masks for skin brightening.",
    ingredients: "100% Organic Turmeric (Curcuma longa)",
    weight: "100g",
    shelfLife: "24 months from date of packaging",
  },
  {
    id: 2,
    name: "Bamboo Toothbrush Set",
    description: "Eco-friendly bamboo toothbrushes with biodegradable handles and BPA-free bristles.",
    price: 249,
    imageSrc: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Personal Care",
    isNew: true,
    longDescription: "Make your daily routine more sustainable with our pack of 4 bamboo toothbrushes. Each toothbrush is made from sustainably harvested bamboo with a comfortable grip. The bristles are BPA-free and provide effective cleaning while being gentle on your gums. By switching to bamboo toothbrushes, you can prevent plastic waste from ending up in landfills and oceans.",
    benefits: [
      "Biodegradable bamboo handle reduces plastic waste",
      "BPA-free nylon bristles for gentle but effective cleaning",
      "Naturally antimicrobial bamboo material",
      "Sustainable packaging made from recycled materials"
    ],
    howToUse: "Replace your toothbrush every 3 months, or sooner if bristles become frayed. Rinse thoroughly after use and store in an upright position to air dry.",
    ingredients: "Sustainably harvested bamboo handle, BPA-free nylon bristles",
    contents: "Set of 4 toothbrushes with different colored bristles for family identification",
    careInstructions: "Allow to dry completely between uses. For longest life, store in a dry place."
  },
  {
    id: 3,
    name: "Organic Coconut Oil",
    description: "Cold-pressed virgin coconut oil from certified organic coconuts.",
    price: 349,
    imageSrc: "https://images.unsplash.com/photo-1594373505583-89a04f1e2dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness",
    longDescription: "Our cold-pressed virgin coconut oil is extracted from fresh, organic coconuts without the use of heat or chemicals, preserving all its natural nutrients. This versatile oil can be used for cooking, skin care, hair care, and more. Rich in medium-chain fatty acids and antioxidants, it offers numerous health benefits and a pleasant coconut aroma.",
    benefits: [
      "Multipurpose oil for cooking, skin care, and hair care",
      "Contains natural antioxidants and medium-chain fatty acids",
      "Cold-pressed to preserve nutrients and natural coconut flavor",
      "No chemicals or additives"
    ],
    howToUse: "Cooking: Use as a substitute for other oils up to 350°F. Skin care: Apply directly to skin as a moisturizer. Hair care: Apply to hair as a deep conditioning mask.",
    ingredients: "100% Certified Organic Virgin Coconut Oil",
    volume: "250ml",
    shelfLife: "18 months from date of packaging",
  },
  {
    id: 4,
    name: "Zero Waste Starter Kit",
    description: "Essential zero waste items including cotton bags, stainless steel straws, and more.",
    price: 799,
    imageSrc: "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
    isFeatured: true,
    longDescription: "Begin your journey to a zero-waste lifestyle with our carefully curated starter kit. This comprehensive set includes all the essentials you need to reduce your environmental footprint. Each item is designed to replace single-use plastics and disposables, helping you make a positive impact on the planet while maintaining a stylish and convenient lifestyle.",
    benefits: [
      "Reduces dependency on single-use plastics",
      "High-quality, durable items that last for years",
      "Saves money in the long run by eliminating disposable products",
      "Stylish designs that make sustainable living attractive"
    ],
    contents: [
      "3 Organic cotton produce bags",
      "1 Set of 4 stainless steel straws with cleaning brush",
      "1 Bamboo cutlery set (fork, knife, spoon, chopsticks)",
      "1 Stainless steel lunch box",
      "1 Organic cotton tote bag",
      "1 Beeswax wrap set (3 different sizes)"
    ],
    careInstructions: "All items are washable and reusable. Follow specific care instructions for each item.",
  },
  {
    id: 5,
    name: "Organic Honey",
    description: "Pure, raw, unfiltered honey from organic wild flowers.",
    price: 399,
    imageSrc: "https://images.unsplash.com/photo-1582126892906-5ba118eaf46a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    longDescription: "Harvested from hives placed in pristine forests and organic farmlands, our raw honey is unfiltered and unpasteurized to preserve all its natural enzymes, antioxidants, and nutrients. Each jar contains honey produced by bees that pollinate wildflowers, resulting in a rich, complex flavor profile that varies subtly with each season.",
    benefits: [
      "Contains natural enzymes, antioxidants, and phytonutrients",
      "Unfiltered and unpasteurized to preserve natural benefits",
      "Ethically harvested with bee-friendly practices",
      "Supports pollination and biodiversity"
    ],
    howToUse: "Perfect as a natural sweetener in tea, coffee, or drizzled over yogurt and toast. Can be used in baking and cooking as a sugar substitute.",
    ingredients: "100% Raw Organic Wildflower Honey",
    weight: "250g",
    shelfLife: "24 months (crystallization is natural and doesn't affect quality)",
  },
  {
    id: 6,
    name: "Reusable Cotton Produce Bags",
    description: "Set of 5 organic cotton mesh bags for grocery shopping.",
    price: 349,
    imageSrc: "https://images.unsplash.com/photo-1611068661807-c5331462778d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
    longDescription: "Replace single-use plastic bags with our durable, organic cotton produce bags. This set of 5 bags comes in various sizes to accommodate different types of fruits and vegetables. The lightweight, breathable mesh design allows for easy scanning at checkout and proper air circulation to keep your produce fresh longer. Each bag has a drawstring closure and a tare weight tag to make shopping convenient.",
    benefits: [
      "Eliminates the need for disposable plastic produce bags",
      "Breathable mesh keeps produce fresher for longer",
      "Machine washable and durable for years of use",
      "Lightweight design adds minimal weight to your shopping"
    ],
    contents: "Set of 5 bags: 2 small (12\"x8\"), 2 medium (14\"x10\"), 1 large (17\"x12\")",
    materials: "100% GOTS certified organic cotton",
    careInstructions: "Machine washable in cold water. Hang to dry. Gets softer with each wash.",
  },
  {
    id: 7,
    name: "Aloe Vera Gel",
    description: "Pure organic aloe vera gel for skin and hair care.",
    price: 299,
    imageSrc: "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness",
    isNew: true,
    longDescription: "Our pure organic aloe vera gel is extracted directly from freshly harvested aloe vera leaves. With a 99% concentration of aloe vera, this gel provides maximum benefits with minimal additives. The gentle, cooling formula soothes sunburns, moisturizes skin, and can be used as a natural hair gel. Free from artificial colors, fragrances, and alcohol, it's suitable for all skin types, including sensitive skin.",
    benefits: [
      "Soothes sunburns and minor skin irritations",
      "Provides deep hydration without oiliness",
      "Can be used as a natural styling gel for hair",
      "Helps reduce acne and skin inflammation"
    ],
    howToUse: "Apply to clean skin as needed. For sunburn, apply liberally to affected areas. For hair, use a small amount to define curls or tame frizz.",
    ingredients: "99% Organic Aloe Vera Gel, Citric Acid (natural preservative), Ascorbic Acid (Vitamin C), Potassium Sorbate (food-grade preservative)",
    volume: "200ml",
    shelfLife: "12 months unopened, 6 months after opening"
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    description: "Insulated, BPA-free water bottle that keeps beverages hot or cold.",
    price: 599,
    imageSrc: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
    longDescription: "Stay hydrated sustainably with our premium stainless steel water bottle. Featuring double-wall vacuum insulation, this bottle keeps your drinks cold for up to 24 hours or hot for up to 12 hours. The sleek, minimal design includes a leak-proof bamboo cap and a wide mouth for easy filling, drinking, and cleaning. Made from high-quality 18/8 food-grade stainless steel, it's built to last a lifetime.",
    benefits: [
      "Eliminates the need for single-use plastic bottles",
      "Double-wall vacuum insulation maintains temperature for hours",
      "Made from durable, food-grade materials free from BPA and toxins",
      "Wide mouth accommodates ice cubes and allows easy cleaning"
    ],
    specifications: "Capacity: 750ml, Weight: 340g, Dimensions: 27cm x 7.5cm diameter",
    materials: "18/8 food-grade stainless steel body, bamboo and stainless steel cap with silicone seal",
    careInstructions: "Hand wash recommended. Not dishwasher safe. Do not microwave.",
  },
  {
    id: 9,
    name: "Organic Green Tea",
    description: "Premium loose-leaf green tea grown in the foothills of the Himalayas.",
    price: 249,
    imageSrc: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    longDescription: "Our organic green tea is carefully harvested from high-altitude tea gardens in the Himalayan foothills. The leaves are gently processed to preserve their natural antioxidants and delicate flavor. This premium loose-leaf tea offers a light, refreshing taste with subtle grassy notes and a smooth finish. Each sip provides a moment of tranquility along with the many health benefits of green tea.",
    benefits: [
      "Rich in antioxidants and polyphenols",
      "Supports metabolism and provides gentle energy without jitters",
      "Grown without pesticides or chemical fertilizers",
      "Sustainably harvested from small family farms"
    ],
    howToUse: "Use 1 teaspoon per cup. Steep in water heated to 80°C (not boiling) for 2-3 minutes. Can be re-steeped 2-3 times.",
    ingredients: "100% Organic Green Tea Leaves",
    weight: "100g",
    origin: "Himalayan foothills, Darjeeling region"
  },
  {
    id: 10,
    name: "Natural Loofah Scrub",
    description: "Biodegradable loofah scrubber for kitchen and bathroom cleaning.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1615166358596-e6fc692f8ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Home & Living",
    longDescription: "Replace synthetic sponges with our natural loofah scrubbers. Made from the dried fruit of the loofah plant, these scrubbers provide excellent cleaning power for dishes, sinks, and bathtubs without harsh chemicals or plastics. The natural fibers create a gentle abrasive surface that's effective on tough dirt yet won't scratch most surfaces. When the loofah wears out, it can be composted, returning to the earth without leaving microplastics behind.",
    benefits: [
      "100% natural and biodegradable alternative to synthetic sponges",
      "Effective cleaning power with just the right amount of abrasion",
      "Naturally resistant to odors and bacteria",
      "Compostable at the end of its life cycle"
    ],
    howToUse: "Soak in water to soften before first use. Use with soap or cleaning solution for dishes, sinks, tubs, and more. Rinse thoroughly after use and hang to dry.",
    materials: "100% Natural Loofah Plant (Luffa aegyptiaca)",
    careInstructions: "Rinse thoroughly after each use and hang to dry. Can be sanitized in boiling water or microwave (when wet) for 1 minute.",
  },
  {
    id: 11,
    name: "Organic Jaggery",
    description: "Traditional unrefined sugar with minerals and iron content.",
    price: 199,
    imageSrc: "https://images.unsplash.com/photo-1576244836533-63b2546dd255?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Food & Spices",
    longDescription: "Our organic jaggery is a traditional, unrefined sweetener made from concentrated sugarcane juice. Unlike refined sugar, jaggery retains the natural minerals and iron present in sugarcane. This gives it a rich, complex flavor with caramel notes and a unique nutritional profile. Produced using traditional methods on small family farms, our jaggery is free from chemicals and additives, offering a more wholesome alternative to processed sugar.",
    benefits: [
      "Contains iron, magnesium, potassium, and other minerals",
      "Unrefined sweetener with a lower glycemic index than white sugar",
      "Rich, complex flavor that enhances both sweet and savory dishes",
      "Produced using traditional, sustainable methods"
    ],
    howToUse: "Use as a replacement for sugar in tea, coffee, desserts, or traditional recipes. Can be grated, chopped, or melted as needed.",
    ingredients: "100% Organic Sugarcane Juice",
    weight: "250g",
    storage: "Store in a cool, dry place in an airtight container"
  },
  {
    id: 12,
    name: "Herbal Shampoo Bar",
    description: "Plastic-free shampoo bar with natural herbs for healthy hair.",
    price: 299,
    imageSrc: "https://images.unsplash.com/photo-1601612634522-5de8fcf0ef76?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Beauty & Wellness",
    isBestSeller: true,
    longDescription: "Embrace plastic-free hair care with our herbal shampoo bar. Handcrafted with nourishing oils, butters, and botanical extracts, this solid shampoo cleanses gently while adding natural shine and volume. Our pH-balanced formula works with your hair's natural oils rather than stripping them away. One bar equals approximately three bottles of liquid shampoo, reducing bathroom waste while giving you healthy, beautiful hair.",
    benefits: [
      "Eliminates plastic bottles from your hair care routine",
      "Gentle cleansing without sulfates or harsh detergents",
      "Concentrated formula lasts longer than liquid shampoo",
      "Travel-friendly and TSA-compliant"
    ],
    howToUse: "Wet hair thoroughly. Rub the bar directly on hair or lather in hands first. Massage into scalp and rinse well. Allow bar to dry between uses.",
    ingredients: "Saponified Coconut Oil, Castor Oil, Shea Butter, Cocoa Butter, Jojoba Oil, Rosemary Extract, Nettle Leaf, Amla, Shikakai, Essential Oil Blend, Citric Acid",
    weight: "100g",
    shelfLife: "12 months when kept dry between uses"
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
