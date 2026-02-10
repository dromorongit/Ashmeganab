/**
 * Ash Meganab Herbal - Main JavaScript
 * Core site functionality and event handlers
 */

'use strict';

/**
 * Main Application Controller
 */
const App = {
  /**
   * Initialize the application
   */
  init() {
    this.initNavigation();
    this.initMobileMenu();
    this.initScrollEffects();
    this.initAnimations();
    this.initTestimonialSlider();
    this.initProductCards();
    this.initSearchBar();
    console.log('Ash Meganab Herbal App initialized');
  },

  /**
   * Initialize navigation highlighting
   */
  initNavigation() {
    const currentPage = URLUtils.getPageName();
    const navLinks = DOMUtils.queryAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  /**
   * Initialize mobile hamburger menu
   */
  initMobileMenu() {
    const navToggle = DOMUtils.getById('nav-toggle');
    const navMenu = DOMUtils.getById('nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (event) => {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    }
  },

  /**
   * Initialize scroll effects
   */
  initScrollEffects() {
    const header = DOMUtils.getById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', throttle(() => {
      const currentScroll = window.pageYOffset;

      // Add shadow on scroll
      if (currentScroll > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, 100));
  },

  /**
   * Initialize scroll animations
   */
  initAnimations() {
    // Use Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe animatable elements
    const animatableElements = DOMUtils.queryAll('.card, .category-card, .product-card, .section-header');
    animatableElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  },

  /**
   * Initialize testimonial slider
   */
  initTestimonialSlider() {
    const slides = DOMUtils.queryAll('.testimonial-slide');
    const dots = DOMUtils.queryAll('.testimonial-dots .dot');

    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
      // Wrap around
      if (index >= slides.length) currentSlide = 0;
      else if (index < 0) currentSlide = slides.length - 1;
      else currentSlide = index;

      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
      });

      // Remove active class from all dots
      dots.forEach(dot => dot.classList.remove('active'));

      // Show current slide
      slides[currentSlide].style.display = 'block';
      setTimeout(() => {
        slides[currentSlide].classList.add('active');
      }, 10);

      // Update dots
      if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
      }
    };

    const startAutoSlide = () => {
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    };

    const stopAutoSlide = () => {
      clearInterval(slideInterval);
    };

    // Set up dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
      });
    });

    // Initialize
    showSlide(0);
    startAutoSlide();
  },

  /**
   * Initialize product card interactions
   */
  initProductCards() {
    EventUtils.delegate('.products-grid', '.product-card', 'click', (event, card) => {
      // Let the default behavior happen (anchor link or button)
    });
  },

  /**
   * Initialize search functionality on shop page
   */
  initSearchBar() {
    const searchInput = DOMUtils.getById('product-search');
    const productsGrid = DOMUtils.getById('products-grid');

    if (!searchInput || !productsGrid) return;

    // Debounced search
    const handleSearch = debounce((query) => {
      const products = ProductService.search(query);
      this.renderProducts(products, productsGrid);

      // Update category filters if needed
      const categoryFilter = DOMUtils.getById('category-filter');
      if (categoryFilter && categoryFilter.value !== 'all') {
        this.filterByCategory(categoryFilter.value);
      }
    }, 300);

    searchInput.addEventListener('input', (event) => {
      handleSearch(event.target.value);
    });
  },

  /**
   * Render products to grid
   * @param {Array} products - Products to render
   * @param {HTMLElement} container - Container element
   */
  renderProducts(products, container) {
    if (!container) return;

    if (products.length === 0) {
      container.innerHTML = `
        <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: var(--spacing-2xl);">
          <p style="font-size: 1.1rem; color: var(--color-text-light);">No products found matching your criteria.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(product => this.createProductCard(product)).join('');
  },

  /**
   * Create product card HTML
   * @param {Object} product - Product data
   * @returns {string}
   */
  createProductCard(product) {
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-image-container">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-image"
            loading="lazy"
          >
        </div>
        <div class="product-info">
          <span class="product-category">${product.categoryName}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description.substring(0, 80)}...</p>
          <div class="product-price">${CurrencyUtils.format(product.price)}</div>
          <button 
            class="btn btn-primary product-btn place-order-btn"
            data-product-id="${product.id}"
            aria-label="Place order for ${product.name}"
          >
            Place Order
          </button>
        </div>
      </article>
    `;
  },

  /**
   * Filter products by category
   * @param {string} categorySlug
   */
  filterByCategory(categorySlug) {
    const products = categorySlug === 'all' 
      ? ProductService.getAll() 
      : ProductService.getByCategory(categorySlug);
    
    const productsGrid = DOMUtils.getById('products-grid');
    this.renderProducts(products, productsGrid);
  },

  /**
   * Place order for product
   * @param {string} productId
   */
  placeOrder(productId) {
    const product = ProductService.getById(productId);
    if (!product) {
      alert('Product not found');
      return;
    }

    // Store in localStorage
    const orderItem = ProductService.formatForStorage(product, 1);
    StorageUtils.set('ashmeg_pending_order', orderItem);

    // Redirect to checkout
    window.location.href = 'checkout.html';
  }
};

/**
 * Category Filter Module
 */
const CategoryFilter = {
  init() {
    const filterSelect = DOMUtils.getById('category-filter');
    if (!filterSelect) return;

    filterSelect.addEventListener('change', (event) => {
      const category = event.target.value;
      App.filterByCategory(category);
    });
  }
};

/**
 * Footer Collapsible Sections (Mobile)
 */
const FooterSections = {
  init() {
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) return;

    const sections = DOMUtils.queryAll('.footer-section');
    
    sections.forEach(section => {
      const title = section.querySelector('.footer-title');
      const links = section.querySelector('.footer-links');
      
      if (!title || !links) return;

      // Initially hide on mobile
      links.style.display = 'none';
      links.style.maxHeight = '0';
      links.style.overflow = 'hidden';
      links.style.transition = 'max-height 0.3s ease';

      title.style.cursor = 'pointer';
      title.style.position = 'relative';

      // Add toggle indicator
      title.insertAdjacentHTML('beforeend', '<span class="toggle-indicator" style="float:right;">+</span>');

      title.addEventListener('click', () => {
        const isOpen = links.style.maxHeight !== '0px';
        
        if (isOpen) {
          links.style.maxHeight = '0';
          title.querySelector('.toggle-indicator').textContent = '+';
        } else {
          links.style.maxHeight = links.scrollHeight + 'px';
          title.querySelector('.toggle-indicator').textContent = '−';
        }
      });
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  CategoryFilter.init();
  FooterSections.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App, CategoryFilter, FooterSections };
}
