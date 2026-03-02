/**
 * Ash Meganab Herbal - Product Data
 * All product information stored in a centralized module
 */

'use strict';

/**
 * Product Categories Configuration
 */
const ProductCategories = {
  NABDOL: {
    id: 'nabdol',
    name: 'Nabdol',
    slug: 'nabdol',
    description: 'Pain relief and inflammation management',
    icon: '🌟'
  },
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
  }
};

/**
 * Product Data - Complete Catalog
 */
const ProductsData = [
  // NabDol Pain Relief
  {
    id: 'nabdol-001',
    name: 'NabDol Pain Relief',
    category: 'nabdol',
    categoryName: 'Nabdol',
    price: 599.00,
    salePrice: 450.00,
    unit: 'pack',
    description: 'Natural pain relief formula with turmeric and boswellia extracts for effective inflammation management.',
    benefits: [
      'Relieves joint pain',
      'Reduces inflammation',
      'Supports mobility',
      'Non-addictive formula'
    ],
    usage: 'Two Pills, morning & evening, 30 to 40 minutes before meals',
    image: 'Assets/Images/nabdol.PNG',
    featured: true,
    bestseller: true
  },

  // CardioNab Tablets
  {
    id: 'cardionab-001',
    name: 'CardioNab Tablets',
    category: 'cardionab',
    categoryName: 'CardioNab',
    price: 599.00,
    salePrice: 450.00,
    unit: 'pack',
    description: 'Advanced cardiovascular support formula with hawthorn and garlic extract for heart health.',
    benefits: [
      'Supports healthy blood pressure',
      'Promotes cardiovascular wellness',
      'Natural antioxidant properties',
      'Improves blood circulation'
    ],
    usage: 'Two Pills, morning & evening, 30 to 40 minutes before meals',
    image: 'Assets/Images/cardionab.PNG',
    featured: true,
    bestseller: true
  },

  // DiaoNab Natural Tablets
  {
    id: 'dianab-001',
    name: 'DiaoNab Natural Tablets',
    category: 'dianab',
    categoryName: 'DiaoNab',
    price: 599.00,
    salePrice: 450.00,
    unit: 'pack',
    description: 'Comprehensive digestive support with ginger, peppermint, and fennel extracts for gut health.',
    benefits: [
      'Relieves digestive discomfort',
      'Reduces bloating and gas',
      'Supports healthy gut flora',
      'Promotes regular digestion'
    ],
    usage: 'Two Pills, morning & evening, 30 to 40 minutes before meals',
    image: 'Assets/Images/diaonab.PNG',
    featured: true,
    bestseller: true
  },

  // ProstaNab Natural Tablets
  {
    id: 'prostanab-001',
    name: 'ProstaNab Natural Tablets',
    category: 'prostanab',
    categoryName: 'ProstaNab',
    price: 599.00,
    salePrice: 450.00,
    unit: 'pack',
    description: 'Advanced prostate health formula with saw palmetto and beta-sitosterol for optimal male wellness.',
    benefits: [
      'Supports prostate wellness',
      'Promotes healthy urinary function',
      'Reduces frequent urination',
      'Enhances male vitality'
    ],
    usage: 'Two Pills, morning & evening, 30 to 40 minutes before meals',
    image: 'Assets/Images/prostanab.PNG',
    featured: true,
    bestseller: true
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
   * Get effective price (sale price if available, otherwise regular price)
   * @param {Object} product
   * @returns {number}
   */
  getEffectivePrice(product) {
    return product.salePrice || product.price;
  },

  /**
   * Check if product is on sale
   * @param {Object} product
   * @returns {boolean}
   */
  isOnSale(product) {
    return product.salePrice && product.salePrice < product.price;
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
    const prices = ProductsData.map(p => this.getEffectivePrice(p));
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
    const effectivePrice = this.getEffectivePrice(product);
    return {
      productId: product.id,
      productName: product.name,
      productPrice: effectivePrice,
      productImage: product.image,
      productCategory: product.categoryName,
      quantity: quantity,
      subtotal: effectivePrice * quantity
    };
  }
};

/**
 * Quick Order Products - Simplified list for quick order form
 */
const QuickOrderProducts = ProductService.getAll().map(product => ({
  id: product.id,
  name: product.name,
  price: ProductService.getEffectivePrice(product),
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
