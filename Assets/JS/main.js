/* ===================================
   Ash Meganab - Main JavaScript Module
   Herbal E-Commerce Website
   =================================== */

import { initCart, getCart, getCartCount, renderMiniCartItems, updateCartSummary, CART_UPDATED, formatPrice } from './cart.js';
import { initHeaderSearch, initShopSearch } from './search.js';
import { products, getFeaturedProducts, getProductById, sortProducts, generateStarRating, categories, formatPrice as formatProductPrice } from './products.js';

// ===================================
// DOM Elements
// ===================================

const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const cartBtn = document.querySelector('.cart-btn');
const cartDrawer = document.querySelector('.cart-drawer');
const cartOverlay = document.querySelector('.cart-overlay');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const cartItemsContainer = document.querySelector('.cart-items-container');

// ===================================
// Initialization
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  initCart();
  updateCartCountBadge();
  
  if (cartItemsContainer) {
    renderMiniCartItems(cartItemsContainer);
  }
  
  updateCartSummary(
    document.querySelector('.cart-subtotal-value'),
    document.querySelector('.cart-total-value'),
    document.querySelector('.cart-shipping-value')
  );
  
  initNavigation();
  initMobileMenu();
  initCartDrawer();
  initHeaderSearch();
  initScrollEffects();
  initAnimations();
  initPageSpecific();
  
  // Initialize quick order form if exists
  initQuickOrderForm();
});

// ===================================
// Navigation
// ===================================

function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Handle mobile dropdown toggles - only toggle on parent link, don't prevent navigation
  const navItemHasChildren = document.querySelectorAll('.nav-item-has-children');
  
  navItemHasChildren.forEach(item => {
    const parentLink = item.querySelector('.nav-link');
    if (parentLink) {
      parentLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          // Only toggle dropdown, don't prevent navigation
          // The navigation will happen naturally
          item.classList.toggle('active');
        }
      });
    }
  });
}

// ===================================
// Mobile Menu
// ===================================

function initMobileMenu() {
  if (!mobileMenuBtn || !navMenu || !mobileMenuOverlay) return;
  
  // Toggle menu when clicking hamburger button
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking overlay
  mobileMenuOverlay.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Stop propagation on menu clicks to prevent overlay from catching them
  navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Close menu when clicking on links - using mousedown for faster response
  const navMenuLinks = navMenu.querySelectorAll('a');
  navMenuLinks.forEach(link => {
    link.addEventListener('mousedown', (e) => {
      // Close menu on mousedown - navigation will happen on click
      if (window.innerWidth <= 992) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      mobileMenuBtn.classList.remove('active');
      navMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ===================================
// Cart Drawer
// ===================================

function initCartDrawer() {
  if (!cartBtn || !cartDrawer || !cartOverlay || !cartCloseBtn) return;
  
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  });
  
  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  
  document.addEventListener('click', (e) => {
    if (e.target.closest('.cart-qty-btn')) {
      const btn = e.target.closest('.cart-qty-btn');
      const action = btn.dataset.action;
      const productId = parseInt(btn.dataset.id);
      
      if (action === 'increment') {
        import('./cart.js').then(({ incrementQuantity }) => {
          incrementQuantity(productId);
          renderMiniCartItems(cartItemsContainer);
          updateCartCountBadge();
          updateCartSummary(
            document.querySelector('.cart-subtotal-value'),
            document.querySelector('.cart-total-value'),
            document.querySelector('.cart-shipping-value')
          );
        });
      } else if (action === 'decrement') {
        import('./cart.js').then(({ decrementQuantity }) => {
          decrementQuantity(productId);
          renderMiniCartItems(cartItemsContainer);
          updateCartCountBadge();
          updateCartSummary(
            document.querySelector('.cart-subtotal-value'),
            document.querySelector('.cart-total-value'),
            document.querySelector('.cart-shipping-value')
          );
        });
      }
    }
    
    if (e.target.closest('.cart-item-remove')) {
      const btn = e.target.closest('.cart-item-remove');
      const productId = parseInt(btn.dataset.remove);
      
      import('./cart.js').then(({ removeFromCart }) => {
        removeFromCart(productId);
        renderMiniCartItems(cartItemsContainer);
        updateCartCountBadge();
        updateCartSummary(
          document.querySelector('.cart-subtotal-value'),
          document.querySelector('.cart-total-value'),
          document.querySelector('.cart-shipping-value')
        );
      });
    }
    
    if (e.target.closest('.cart-btn-primary')) {
      window.location.href = 'checkout.html';
    }
    
    if (e.target.closest('.cart-btn-secondary')) {
      window.location.href = 'checkout.html';
    }
  });
  
  window.addEventListener(CART_UPDATED, () => {
    renderMiniCartItems(cartItemsContainer);
    updateCartCountBadge();
    updateCartSummary(
      document.querySelector('.cart-subtotal-value'),
      document.querySelector('.cart-total-value'),
      document.querySelector('.cart-shipping-value')
    );
  });
}

function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===================================
// Cart Count Badge
// ===================================

function updateCartCountBadge() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    const count = getCartCount();
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// ===================================
// Scroll Effects
// ===================================

function initScrollEffects() {
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===================================
// Animations
// ===================================

function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.card, .category-card, .product-card, .testimonial-card, .why-us-card, .quality-card');
  animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// Page-Specific Initialization
// ===================================

function initPageSpecific() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  switch (currentPage) {
    case 'index.html':
      initHomepage();
      break;
    case 'shop.html':
      initShopPage();
      break;
    case 'checkout.html':
      // Checkout has its own inline script
      break;
    case 'contact.html':
      initContactPage();
      break;
  }
}

// ===================================
// Homepage
// ===================================

function initHomepage() {
  renderFeaturedProducts();
  renderCategories();
  initTestimonialsSlider();
}

// ===================================
// Product Card HTML Generator (Place Order instead of Add to Cart)
// ===================================

function generateProductCard(product) {
  const rating = generateStarRating(product.rating);
  const starsHtml = `
    ${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'.repeat(rating.full)}
    ${rating.half ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="currentColor" stroke-width="2"/></svg>' : ''}
    ${'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'.repeat(rating.empty)}
  `;
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : 'New'}</span>` : ''}
        <div class="product-actions">
          <button class="product-action-btn wishlist-btn" title="Add to Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button class="product-action-btn quick-view-btn" data-id="${product.id}" title="Quick View">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button class="product-action-btn place-order-btn" data-id="${product.id}" title="Place Order">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryName}</span>
        <h3 class="product-title">
          <a href="shop.html?product=${product.id}">${product.name}</a>
        </h3>
        <div class="product-rating">
          <div class="stars">${starsHtml}</div>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">${formatProductPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="original-price">${formatProductPrice(product.originalPrice)}</span>` : ''}
        </div>
        <button class="product-btn place-order-btn" data-id="${product.id}">Place Order</button>
      </div>
    </div>
  `;
}

// ===================================
// Render Functions
// ===================================

function renderFeaturedProducts() {
  const container = document.querySelector('#featured-products');
  if (!container) return;
  
  const featured = getFeaturedProducts(4);
  container.innerHTML = featured.map(product => generateProductCard(product)).join('');
  
  container.querySelectorAll('.place-order-btn').forEach(btn => {
    btn.addEventListener('click', handlePlaceOrder);
  });
}

function renderCategories() {
  const container = document.querySelector('#categories-grid');
  if (!container) return;
  
  const categoryIcons = {
    heart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    droplet: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    thermometer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>'
  };
  
  container.innerHTML = categories.map(cat => `
    <a href="shop.html?category=${cat.slug}" class="category-card">
      <div class="category-icon">${categoryIcons[cat.icon]}</div>
      <h3>${cat.name}</h3>
      <p>Natural herbal formula for optimal health</p>
      <span class="category-link">View Products <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
    </a>
  `).join('');
}

// ===================================
// Testimonials Slider
// ===================================

function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.slider-dot');
  
  if (!track || dots.length === 0) return;
  
  let currentSlide = 0;
  const totalSlides = dots.length;
  
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  let autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(autoSlide);
      goToSlide(index);
      autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });
  });
  
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      goToSlide(currentSlide - 1);
      autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(autoSlide);
      goToSlide(currentSlide + 1);
      autoSlide = setInterval(() => goToSlide(currentSlide + 1), 5000);
    });
  }
}

// ===================================
// Place Order Handler (replaces Add to Cart)
// ===================================

function handlePlaceOrder(e) {
  const productId = parseInt(e.target.dataset.id || e.target.closest('.place-order-btn').dataset.id);
  const product = getProductById(productId);
  
  if (product) {
    // Store selected product in localStorage
    const selectedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.categoryName,
      categoryId: product.category,
      image: product.image
    };
    
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    
    // Redirect to checkout
    window.location.href = 'checkout.html';
  }
}

// ===================================
// Quick Order Form
// ===================================

function initQuickOrderForm() {
  const form = document.getElementById('quick-order-form');
  if (!form) return;
  
  const productSelect = document.getElementById('quick-product');
  const quantityInput = document.getElementById('quick-quantity');
  const totalDisplay = document.getElementById('quick-total');
  
  // Product prices
  const prices = {
    'cardionab': 690.00,
    'dianab': 720.00,
    'prostanab': 750.00,
    'nabdol': 495.00
  };
  
  // Update total when product or quantity changes
  function updateTotal() {
    const product = productSelect?.value;
    const quantity = parseInt(quantityInput?.value) || 1;
    
    if (product && prices[product]) {
      const total = prices[product] * quantity;
      totalDisplay.textContent = '₵' + total.toFixed(2);
    } else {
      totalDisplay.textContent = '₵0.00';
    }
  }
  
  productSelect?.addEventListener('change', updateTotal);
  quantityInput?.addEventListener('input', updateTotal);
  
  // Quantity buttons
  form.querySelectorAll('.qty-decrement').forEach(btn => {
    btn.addEventListener('click', () => {
      const qty = parseInt(quantityInput.value);
      if (qty > 1) {
        quantityInput.value = qty - 1;
        updateTotal();
      }
    });
  });
  
  form.querySelectorAll('.qty-increment').forEach(btn => {
    btn.addEventListener('click', () => {
      const qty = parseInt(quantityInput.value);
      if (qty < 10) {
        quantityInput.value = qty + 1;
        updateTotal();
      }
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('quick-name')?.value.trim();
    const phone = document.getElementById('quick-phone')?.value.trim();
    const product = productSelect?.value;
    const quantity = parseInt(quantityInput?.value) || 1;
    
    if (!name || !phone || !product) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Create order data
    const productNames = {
      'cardionab': 'CardioNab Heart Support Formula',
      'dianab': 'DiaoNab Blood Sugar Balance',
      'prostanab': 'ProstaNab Prostate Health Complex',
      'nabdol': 'Nabdol Pain Relief Complex'
    };
    
    const orderData = {
      product: {
        id: product,
        name: productNames[product],
        price: prices[product],
        category: product.charAt(0).toUpperCase() + product.slice(1),
        image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop'
      },
      quantity: quantity,
      customer: {
        name: name,
        phone: phone
      }
    };
    
    // Store and redirect to checkout
    localStorage.setItem('quickOrder', JSON.stringify(orderData));
    
    alert('Order prepared! Redirecting to checkout...');
    window.location.href = 'checkout.html';
  });
}

// ===================================
// Shop Page
// ===================================

function initShopPage() {
  initShopSearch();
  renderShopProducts();
  initShopFilters();
  initQuickViewModal();
}

function renderShopProducts(productsToRender = products) {
  const container = document.querySelector('#shop-products-grid');
  if (!container) return;
  
  container.innerHTML = productsToRender.map(product => generateProductCard(product)).join('');
  
  container.querySelectorAll('.place-order-btn').forEach(btn => {
    btn.addEventListener('click', handlePlaceOrder);
  });
  
  container.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.currentTarget.dataset.id);
      openQuickView(productId);
    });
  });
}

function initShopFilters() {
  const categoryFilters = document.querySelectorAll('.filter-item input[type="checkbox"]');
  
  categoryFilters.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedCategories = Array.from(categoryFilters)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      
      const filtered = selectedCategories.length > 0
        ? products.filter(p => selectedCategories.includes(p.category))
        : products;
      
      renderShopProducts(filtered);
    });
  });
  
  const sortSelect = document.querySelector('#sort-select');
  
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const sorted = sortProducts(products, e.target.value);
      renderShopProducts(sorted);
    });
  }
  
  const priceSlider = document.querySelector('.filter-price-slider');
  
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      const maxPrice = e.target.value;
      document.querySelector('.price-max').textContent = `₵${maxPrice}`;
    });
    
    priceSlider.addEventListener('change', (e) => {
      const maxPrice = parseFloat(e.target.value);
      const filtered = products.filter(p => p.price <= maxPrice);
      renderShopProducts(filtered);
    });
  }
  
  const viewBtns = document.querySelectorAll('.view-btn');
  const productsGrid = document.querySelector('#shop-products-grid');
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (btn.dataset.view === 'list') {
        productsGrid.classList.add('list-view');
      } else {
        productsGrid.classList.remove('list-view');
      }
    });
  });
}

// ===================================
// Quick View Modal (Place Order instead of Add to Cart)
// ===================================

function initQuickViewModal() {
  const modal = document.querySelector('#quick-view-modal');
  const closeBtn = modal ? modal.querySelector('.modal-close') : null;
  
  if (!modal) return;
  
  closeBtn.addEventListener('click', () => closeQuickView());
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQuickView();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeQuickView();
    }
  });
}

function openQuickView(productId) {
  const modal = document.querySelector('#quick-view-modal');
  const product = getProductById(productId);
  
  if (!product || !modal) return;
  
  const modalContent = modal.querySelector('.modal-content');
  
  modalContent.querySelector('.quick-view-image img').src = product.image;
  modalContent.querySelector('.product-category').textContent = product.categoryName;
  modalContent.querySelector('.quick-view-details h2').textContent = product.name;
  modalContent.querySelector('.quick-view-price').textContent = formatProductPrice(product.price);
  modalContent.querySelector('.quick-view-description').textContent = product.description;
  
  const placeOrderBtn = modalContent.querySelector('.place-order-btn');
  placeOrderBtn.dataset.id = product.id;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.querySelector('#quick-view-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===================================
// Contact Page
// ===================================

function initContactPage() {
  const form = document.querySelector('#contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateContactForm()) {
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    }
  });
}

function validateContactForm() {
  const requiredFields = ['name', 'email', 'subject', 'message'];
  let isValid = true;
  
  requiredFields.forEach(fieldName => {
    const field = document.querySelector(`#contact-${fieldName}`);
    const group = field ? field.closest('.form-group') : null;
    
    if (field && !field.value.trim()) {
      if (group) group.classList.add('error');
      isValid = false;
    } else if (field && group) {
      group.classList.remove('error');
    }
  });
  
  return isValid;
}

// ===================================
// Utility Functions
// ===================================

function getCartSubtotal() {
  return getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
}

function applyPromoCode(code) {
  const promoCodes = {
    'WELCOME10': 0.10,
    'HEALTH20': 0.20,
    'FIRST15': 0.15
  };
  
  if (promoCodes.hasOwnProperty(code.toUpperCase())) {
    return {
      valid: true,
      discount: promoCodes[code.toUpperCase()],
      code: code.toUpperCase()
    };
  }
  
  return {
    valid: false,
    discount: 0,
    code: null
  };
}

// Export for use in other modules
export { handlePlaceOrder };
