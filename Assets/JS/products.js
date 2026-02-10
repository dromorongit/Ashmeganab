/**
 * Ash Meganab Herbal - Product Data
 * All product information stored in a centralized module
 */

'use strict';

/**
 * Product Categories Configuration
 */
const ProductCategories = {
  CARDIO_NAB: {
    id: 'cardionab',
    name: 'CardioNab',
    slug: 'cardionab',
    description: 'Natural cardiovascular support formulas',
    icon: '❤️'
  },
  DIAO_NAB: {
    id: 'dianab',
    name: 'DiaoNab',
    slug: 'dianab',
    description: 'Digestive health and wellness solutions',
    icon: '🌿'
  },
  PROSTA_NAB: {
    id: 'prostanab',
    name: 'ProstaNab',
    slug: 'prostanab',
    description: 'Prostate health and male wellness',
    icon: '💪'
  },
  NABDOL: {
    id: 'nabdol',
    name: 'Nabdol',
    slug: 'nabdol',
    description: 'Pain relief and inflammation management',
    icon: '🌟'
  }
};

/**
 * Product Data - Complete Catalog
 */
const ProductsData = [
  // CardioNab Products
  {
    id: 'cardionab-001',
    name: 'CardioNab Premium',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 150.00,
    unit: 'pack',
    description: 'Advanced cardiovascular support formula with hawthorn and garlic extract. Promotes healthy blood pressure and heart function.',
    benefits: [
      'Supports healthy blood pressure',
      'Promotes cardiovascular wellness',
      'Natural antioxidant properties',
      'Improves blood circulation'
    ],
    usage: 'Take 2 capsules daily with food',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop',
    featured: true,
    bestseller: true
  },
  {
    id: 'cardionab-002',
    name: 'CardioNab Basic',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 85.00,
    unit: 'pack',
    description: 'Essential cardiovascular support for everyday heart health maintenance.',
    benefits: [
      'Maintains heart health',
      'Supports healthy cholesterol levels',
      'Natural ingredients',
      'Easy to take'
    ],
    usage: 'Take 1-2 capsules daily',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop',
    featured: false,
    bestseller: false
  },

  // DiaoNab Products
  {
    id: 'dianab-001',
    name: 'DiaoNab Digest Formula',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 120.00,
    unit: 'pack',
    description: 'Comprehensive digestive support with ginger, peppermint, and fennel extracts.',
    benefits: [
      'Relieves digestive discomfort',
      'Reduces bloating and gas',
      'Supports healthy gut flora',
      'Promotes regular digestion'
    ],
    usage: 'Take 1 capsule after meals',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    featured: true,
    bestseller: true
  },
  {
    id: 'dianab-002',
    name: 'DiaoNab Colon Cleanse',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 95.00,
    unit: 'pack',
    description: 'Gentle colon cleansing formula with natural fiber and probiotics.',
    benefits: [
      'Supports colon health',
      'Natural fiber supplement',
      'Promotes regularity',
      'Enhances nutrient absorption'
    ],
    usage: 'Take 2 capsules with plenty of water',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    featured: false,
    bestseller: false
  },
  {
    id: 'dianab-003',
    name: 'DiaoNab Stomach Calm',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 75.00,
    unit: 'pack',
    description: 'Soothing stomach relief formula for quick digestive comfort.',
    benefits: [
      'Relieves stomach upset',
      'Reduces nausea',
      'Calms digestive spasms',
      'Fast-acting relief'
    ],
    usage: 'Take 1-2 capsules as needed',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    featured: false,
    bestseller: false
  },

  // ProstaNab Products
  {
    id: 'prostanab-001',
    name: 'ProstaNab Maximum',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 180.00,
    unit: 'pack',
    description: 'Advanced prostate health formula with saw palmetto and beta-sitosterol.',
    benefits: [
      'Supports prostate wellness',
      'Promotes healthy urinary function',
      'Reduces frequent urination',
      'Enhances male vitality'
    ],
    usage: 'Take 2 capsules daily',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop',
    featured: true,
    bestseller: true
  },
  {
    id: 'prostanab-002',
    name: 'ProstaNab Daily',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 110.00,
    unit: 'pack',
    description: 'Daily prostate maintenance formula for ongoing health support.',
    benefits: [
      'Maintains prostate health',
      'Supports hormonal balance',
      'Natural ingredients',
      'Easy daily regimen'
    ],
    usage: 'Take 1 capsule daily',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop',
    featured: false,
    bestseller: false
  },

  // Nabdol Products
  {
    id: 'nabdol-001',
    name: 'Nabdol Pain Relief',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 95.00,
    unit: 'pack',
    description: 'Natural pain relief formula with turmeric and boswellia extracts.',
    benefits: [
      'Relieves joint pain',
      'Reduces inflammation',
      'Supports mobility',
      'Non-addictive formula'
    ],
    usage: 'Take 2 capsules twice daily',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    featured: true,
    bestseller: true
  },
  {
    id: 'nabdol-002',
    name: 'Nabdol Joint Support',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 135.00,
    unit: 'pack',
    description: 'Comprehensive joint health formula with glucosamine and chondroitin alternatives.',
    benefits: [
      'Supports joint flexibility',
      'Promotes cartilage health',
      'Reduces stiffness',
      'Enhances mobility'
    ],
    usage: 'Take 2 capsules with food',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    featured: false,
    bestseller: false
  },
  {
    id: 'nabdol-003',
    name: 'Nabdol Muscle Recovery',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 85.00,
    unit: 'pack',
    description: 'Fast muscle recovery formula with arnica and menthol.',
    benefits: [
      'Reduces muscle soreness',
      'Speeds recovery',
      'Relieves tension',
      'Cooling sensation'
    ],
    usage: 'Apply topically or take 1 capsule as needed',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    featured: false,
    bestseller: false
  }
];

/**
 * Product Service - Methods for product operations
 */
const ProductService = {
  /**
   * Get all products
   * @returns {Array}
   */
  getAll() {
    return ProductsData;
  },

  /**
   * Get product by ID
   * @param {string} productId
   * @returns {Object|null}
   */
  getById(productId) {
    return ProductsData.find(product => product.id === productId) || null;
  },

  /**
   * Get products by category
   * @param {string} categorySlug
   * @returns {Array}
   */
  getByCategory(categorySlug) {
    return ProductsData.filter(product => product.category === categorySlug);
  },

  /**
   * Get featured products
   * @returns {Array}
   */
  getFeatured() {
    return ProductsData.filter(product => product.featured);
  },

  /**
   * Get bestselling products
   * @returns {Array}
   */
  getBestsellers() {
    return ProductsData.filter(product => product.bestseller);
  },

  /**
   * Search products
   * @param {string} query
   * @returns {Array}
   */
  search(query) {
    const searchTerm = query.toLowerCase().trim();
    return ProductsData.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.categoryName.toLowerCase().includes(searchTerm)
    );
  },

  /**
   * Get product categories
   * @returns {Array}
   */
  getCategories() {
    return Object.values(ProductCategories);
  },

  /**
   * Get price range
   * @returns {Object}
   */
  getPriceRange() {
    const prices = ProductsData.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  },

  /**
   * Format product for storage
   * @param {Object} product
   * @param {number} quantity
   * @returns {Object}
   */
  formatForStorage(product, quantity = 1) {
    return {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productImage: product.image,
      productCategory: product.categoryName,
      quantity: quantity,
      subtotal: product.price * quantity
    };
  }
};

/**
 * Quick Order Products - Simplified list for quick order form
 */
const QuickOrderProducts = ProductService.getAll().map(product => ({
  id: product.id,
  name: product.name,
  price: product.price,
  category: product.categoryName
}));

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ProductCategories,
    ProductsData,
    ProductService,
    QuickOrderProducts
  };
}
