/* ===================================
   Ash Meganab - Products Data Module
   Herbal E-Commerce Website
   =================================== */

// Product Categories
export const categories = [
  { id: 'cardionab', name: 'CardioNab', slug: 'cardionab', icon: 'heart' },
  { id: 'dianab', name: 'DiaoNab', slug: 'dianab', icon: 'droplet' },
  { id: 'prostanab', name: 'ProstaNab', slug: 'prostanab', icon: 'shield' },
  { id: 'nabdol', name: 'Nabdol', slug: 'nabdol', icon: 'thermometer' }
];

// Products Data (Prices in Ghana Cedis - GHS)
export const products = [
  // CardioNab Products
  {
    id: 1,
    name: 'CardioNab Heart Support Formula',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 690.00,
    originalPrice: 899.00,
    rating: 4.8,
    reviews: 156,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop',
    description: 'Advanced cardiovascular support formula with natural herbs known for heart health benefits.',
    shortDescription: 'Heart health support with natural herbs',
    ingredients: ['Hawthorn', 'Garlic Extract', 'CoQ10', 'Omega-3'],
    dosage: 'Take 2 capsules daily with meals',
    stock: 50
  },
  {
    id: 2,
    name: 'CardioNab Blood Pressure Balance',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 599.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    description: 'Natural blend to help maintain healthy blood pressure levels.',
    shortDescription: 'Maintain healthy blood pressure naturally',
    ingredients: ['Hibiscus', 'Olive Leaf', 'Garlic', 'Magnesium'],
    dosage: 'Take 1 capsule twice daily',
    stock: 35
  },
  {
    id: 3,
    name: 'CardioNab Cholesterol Support',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 795.00,
    originalPrice: 975.00,
    rating: 4.7,
    reviews: 124,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=400&fit=crop',
    description: 'Plant-based formula to support healthy cholesterol levels.',
    shortDescription: 'Support healthy cholesterol levels',
    ingredients: ['Red Yeast Rice', 'Plant Sterols', 'Artichoke Extract'],
    dosage: 'Take 2 capsules daily',
    stock: 42
  },
  {
    id: 4,
    name: 'CardioNab Circulatory Boost',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 525.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    badge: null,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    description: 'Enhance circulation and blood flow with this powerful herbal blend.',
    shortDescription: 'Enhance circulation and blood flow',
    ingredients: ['Ginkgo Biloba', 'Horse Chestnut', 'Vitamin E'],
    dosage: 'Take 1 capsule twice daily',
    stock: 28
  },

  // DiaoNab Products
  {
    id: 5,
    name: 'DiaoNab Blood Sugar Balance',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 720.00,
    originalPrice: 869.00,
    rating: 4.9,
    reviews: 203,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop',
    description: 'Natural support for healthy blood sugar management.',
    shortDescription: 'Natural blood sugar management support',
    ingredients: ['Gymnema', 'Bitter Melon', 'Cinnamon', 'Chromium'],
    dosage: 'Take 2 capsules with meals',
    stock: 65
  },
  {
    id: 6,
    name: 'DiaoNab Metabolic Support',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 645.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 145,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    description: 'Support healthy metabolism and energy levels.',
    shortDescription: 'Support healthy metabolism',
    ingredients: ['Green Tea', 'CLA', 'L-Carnitine', 'B-Complex'],
    dosage: 'Take 1 capsule twice daily',
    stock: 48
  },
  {
    id: 7,
    name: 'DiaoNab Insulin Sensitivity',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 840.00,
    originalPrice: 1019.00,
    rating: 4.8,
    reviews: 98,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop',
    description: 'Advanced formula for improved insulin sensitivity.',
    shortDescription: 'Improve insulin sensitivity naturally',
    ingredients: ['Berberine', 'Alpha Lipoic Acid', 'Magnesium', 'Zinc'],
    dosage: 'Take 2 capsules daily',
    stock: 32
  },
  {
    id: 8,
    name: 'DiaoNab Pancreatic Health',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 585.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 76,
    badge: null,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop',
    description: 'Support pancreatic function with this herbal formula.',
    shortDescription: 'Support healthy pancreatic function',
    ingredients: ['Turmeric', 'Milk Thistle', 'Dandelion Root'],
    dosage: 'Take 1 capsule three times daily',
    stock: 40
  },

  // ProstaNab Products
  {
    id: 9,
    name: 'ProstaNab Prostate Health Complex',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 750.00,
    originalPrice: 899.00,
    rating: 4.8,
    reviews: 187,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop',
    description: 'Comprehensive prostate support with clinically studied herbs.',
    shortDescription: 'Complete prostate health support',
    ingredients: ['Saw Palmetto', 'Stinging Nettle', 'Beta-Sitosterol', 'Zinc'],
    dosage: 'Take 2 capsules daily',
    stock: 55
  },
  {
    id: 10,
    name: 'ProstaNab Urinary Tract Support',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 540.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 92,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1555221842-9098a729823a?w=400&h=400&fit=crop',
    description: 'Support urinary tract health and function.',
    shortDescription: 'Urinary tract health support',
    ingredients: ['Cranberry', 'Uva Ursi', 'D-Mannose', 'Buchu'],
    dosage: 'Take 1 capsule twice daily',
    stock: 45
  },
  {
    id: 11,
    name: 'ProstaNab Hormonal Balance',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 675.00,
    originalPrice: 825.00,
    rating: 4.7,
    reviews: 134,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    description: 'Natural hormonal balance support for men.',
    shortDescription: 'Natural hormonal balance for men',
    ingredients: ['Ashwagandha', 'Maca Root', 'Tribulus', 'DIM'],
    dosage: 'Take 1 capsule twice daily',
    stock: 38
  },
  {
    id: 12,
    name: 'ProstaNab Inflammation Response',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 599.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 78,
    badge: null,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
    description: 'Support healthy inflammatory response.',
    shortDescription: 'Support healthy inflammation response',
    ingredients: ['Curcumin', 'Boswellia', 'Quercetin', 'Bromelain'],
    dosage: 'Take 1 capsule twice daily with food',
    stock: 52
  },

  // Nabdol Products
  {
    id: 13,
    name: 'Nabdol Pain Relief Complex',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 495.00,
    originalPrice: 645.00,
    rating: 4.9,
    reviews: 245,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1550572017-4e6c8c9f8e0c?w=400&h=400&fit=crop',
    description: 'Natural pain relief with anti-inflammatory herbs.',
    shortDescription: 'Natural pain relief and comfort',
    ingredients: ['Turmeric', 'Ginger', 'Devils Claw', 'Boswellia'],
    dosage: 'Take 2 capsules twice daily',
    stock: 72
  },
  {
    id: 14,
    name: 'Nabdol Joint Support',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 825.00,
    originalPrice: 975.00,
    rating: 4.8,
    reviews: 198,
    badge: 'sale',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    description: 'Advanced joint health formula for mobility and comfort.',
    shortDescription: 'Advanced joint health and mobility',
    ingredients: ['Glucosamine', 'Chondroitin', 'MSM', 'Collagen'],
    dosage: 'Take 3 capsules daily',
    stock: 48
  },
  {
    id: 15,
    name: 'Nabdol Muscle Recovery',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 555.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 167,
    badge: 'new',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    description: 'Fast muscle recovery and reduced soreness.',
    shortDescription: 'Fast muscle recovery formula',
    ingredients: ['Tart Cherry', 'BCAAs', 'Magnesium', 'Vitamin D'],
    dosage: 'Take 2 capsules after workout',
    stock: 55
  },
  {
    id: 16,
    name: 'Nabdol Anti-Stress Formula',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 450.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 112,
    badge: null,
    image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=400&h=400&fit=crop',
    description: 'Natural stress and anxiety relief support.',
    shortDescription: 'Natural stress and anxiety relief',
    ingredients: ['Ashwagandha', 'L-Theanine', 'Magnesium', 'Lavender'],
    dosage: 'Take 1 capsule twice daily',
    stock: 60
  }
];

// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Natural Herbs for Heart Health',
    excerpt: 'Discover how natural herbs can support cardiovascular health and what the latest research says about herbal remedies.',
    category: 'Health Tips',
    author: 'Dr. Sarah Mitchell',
    date: '2026-01-15',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Managing Blood Sugar Naturally: A Complete Guide',
    excerpt: 'Learn about natural approaches to blood sugar management and how to incorporate them into your daily routine.',
    category: 'Wellness',
    author: 'Michael Chen',
    date: '2026-01-12',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Understanding Prostate Health: What Every Man Should Know',
    excerpt: 'Important information about prostate health and natural supplements that can support optimal function.',
    category: "Men's Health",
    author: 'Dr. James Wilson',
    date: '2026-01-10',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Natural Approaches to Pain Management',
    excerpt: 'Explore natural alternatives for managing chronic pain and improving quality of life.',
    category: 'Pain Relief',
    author: 'Dr. Emily Roberts',
    date: '2026-01-08',
    image: 'https://images.unsplash.com/photo-1550572017-4e6c8c9f8e0c?w=600&h=400&fit=crop',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'The Science Behind Herbal Supplements',
    excerpt: 'Understanding how herbal supplements work and what to look for when choosing quality products.',
    category: 'Education',
    author: 'Dr. Robert Hayes',
    date: '2026-01-05',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Holistic Approaches to Joint Health',
    excerpt: 'Comprehensive strategies for maintaining healthy joints and mobility as we age.',
    category: 'Wellness',
    author: 'Dr. Lisa Park',
    date: '2026-01-03',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    readTime: '7 min read'
  }
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: 'John Anderson',
    role: 'Verified Customer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
    content: 'CardioNab has been a game changer for my heart health. I feel more energetic and my doctor has noticed improvements in my last checkup.',
    location: 'Accra, Ghana'
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Verified Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    content: 'DiaoNab Blood Sugar Balance has helped me maintain healthy levels naturally. Highly recommend for anyone looking for alternatives.',
    location: 'Kumasi, Ghana'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Verified Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    content: 'ProstaNab Prostate Health Complex has been excellent. Quality product with noticeable results. Great customer service too!',
    location: 'Tema, Ghana'
  },
  {
    id: 4,
    name: 'Emily Watson',
    role: 'Verified Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Nabdol Pain Relief Complex is amazing! Finally found natural relief for my joint pain. Life-changing product!',
    location: 'Cape Coast, Ghana'
  }
];

// Helper Functions
export function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}

export function getProductsByCategory(categoryId) {
  return products.filter(product => product.category === categoryId);
}

export function getFeaturedProducts(limit = 4) {
  return products.slice(0, limit);
}

export function getSaleProducts() {
  return products.filter(product => product.badge === 'sale');
}

export function getNewProducts() {
  return products.filter(product => product.badge === 'new');
}

export function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.categoryName.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
}

export function sortProducts(products, sortBy) {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.filter(p => p.badge === 'new').concat(sorted.filter(p => p.badge !== 'new'));
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

// Format price in Ghana Cedis
export function formatPrice(price) {
  return 'GH₵' + price.toFixed(2);
}

export function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  return {
    full: fullStars,
    half: halfStar,
    empty: emptyStars
  };
}
