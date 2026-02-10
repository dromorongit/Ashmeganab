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
  
  // Handle mobile dropdown toggles - only on the parent nav-link
  const navItemHasChildren = document.querySelectorAll('.nav-item-has-children');
  
  navItemHasChildren.forEach(item => {
    const parentLink = item.querySelector('.nav-link');
    if (parentLink) {
      parentLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          e.stopPropagation();
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
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  mobileMenuOverlay.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu when clicking on nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close mobile menu when clicking on dropdown items
  navMenu.querySelectorAll('.nav-dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
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
      window.location.href = 'cart.html';
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
    case 'cart.html':
      initCartPage();
      break;
    case 'checkout.html':
      initCheckoutPage();
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
// Product Card HTML Generator
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
          <button class="product-action-btn add-to-cart-btn" data-id="${product.id}" title="Add to Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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
        <button class="product-btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
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
  
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', handleAddToCart);
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
// Add to Cart Handler
// ===================================

function handleAddToCart(e) {
  const productId = parseInt(e.target.dataset.id || e.target.closest('.add-to-cart-btn').dataset.id);
  const product = getProductById(productId);
  
  if (product) {
    import('./cart.js').then(({ addToCart }) => {
      addToCart(product, 1);
    });
  }
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
  
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', handleAddToCart);
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
      document.querySelector('.price-max').textContent = `GH₵${maxPrice}`;
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
// Quick View Modal
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
  
  const addToCartBtn = modalContent.querySelector('.add-to-cart-btn');
  addToCartBtn.dataset.id = product.id;
  
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
// Cart Page
// ===================================

function initCartPage() {
  renderCartTable();
  initCartPageHandlers();
}

function renderCartTable() {
  const tbody = document.querySelector('#cart-items-body');
  const cart = getCart();
  
  if (!tbody) return;
  
  if (cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 3rem;">
          <p style="font-size: 1.125rem; color: #6c757d; margin-bottom: 1rem;">Your cart is empty</p>
          <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = cart.map(item => `
    <tr data-id="${item.id}">
      <td>
        <div class="cart-product">
          <div class="cart-product-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-product-info">
            <h4>${item.name}</h4>
            <p>${item.categoryName}</p>
          </div>
        </div>
      </td>
      <td class="cart-price">${formatPrice(item.price)}</td>
      <td>
        <div class="cart-quantity">
          <div class="cart-qty-input">
            <button data-action="decrement" data-id="${item.id}">-</button>
            <input type="number" value="${item.quantity}" min="1" readonly data-id="${item.id}">
            <button data-action="increment" data-id="${item.id}">+</button>
          </div>
        </div>
      </td>
      <td class="cart-total">${formatPrice(item.price * item.quantity)}</td>
      <td>
        <button class="cart-remove-btn" data-id="${item.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </td>
    </tr>
  `).join('');
  
  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = getCartSubtotal();
  import('./cart.js').then(({ calculateShipping, formatPrice }) => {
    const { free, cost } = calculateShipping(subtotal);
    const total = subtotal + cost;
    
    const subtotalEl = document.querySelector('#cart-subtotal');
    const shippingEl = document.querySelector('#cart-shipping');
    const totalEl = document.querySelector('#cart-total');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = free ? 'FREE' : formatPrice(cost);
    if (totalEl) totalEl.textContent = formatPrice(total);
  });
}

function initCartPageHandlers() {
  document.addEventListener('click', (e) => {
    if (e.target.dataset.action) {
      const action = e.target.dataset.action;
      const productId = parseInt(e.target.dataset.id);
      
      import('./cart.js').then(({ incrementQuantity, decrementQuantity }) => {
        if (action === 'increment') {
          incrementQuantity(productId);
        } else if (action === 'decrement') {
          decrementQuantity(productId);
        }
        renderCartTable();
        updateCartCountBadge();
      });
    }
    
    if (e.target.closest('.cart-remove-btn')) {
      const productId = parseInt(e.target.closest('.cart-remove-btn').dataset.id);
      
      import('./cart.js').then(({ removeFromCart }) => {
        removeFromCart(productId);
        renderCartTable();
        updateCartCountBadge();
      });
    }
  });
  
  const promoBtn = document.querySelector('#apply-promo');
  const promoInput = document.querySelector('#promo-code');
  
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim();
      const result = applyPromoCode(code);
      
      if (result.valid) {
        const cartSubtotal = getCartSubtotal();
        const discount = cartSubtotal * result.discount;
        const discountEl = document.querySelector('#cart-discount');
        
        if (discountEl) {
          discountEl.textContent = `-${formatPrice(discount)}`;
          discountEl.closest('tr').style.display = 'flex';
        }
        
        const totalEl = document.querySelector('#cart-total');
        if (totalEl) {
          const newTotal = cartSubtotal - discount;
          totalEl.textContent = formatPrice(newTotal);
        }
        
        alert(`Promo code ${result.code} applied! ${result.discount * 100}% off - You save ${formatPrice(discount)}`);
      } else {
        alert('Invalid promo code');
      }
    });
  }
}

// ===================================
// Checkout Page
// ===================================

function initCheckoutPage() {
  renderCheckoutOrderSummary();
  initCheckoutForm();
}

function renderCheckoutOrderSummary() {
  const container = document.querySelector('#checkout-order-items');
  const cart = getCart();
  
  if (!container) return;
  
  if (cart.length === 0) {
    window.location.href = 'shop.html';
    return;
  }
  
  container.innerHTML = cart.map(item => `
    <div class="checkout-order-item">
      <div class="checkout-order-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="checkout-order-info">
        <h4>${item.name}</h4>
        <span class="checkout-order-qty">Qty: ${item.quantity}</span>
      </div>
      <span class="checkout-order-price">${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join('');
  
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const subtotal = getCartSubtotal();
  import('./cart.js').then(({ calculateShipping, formatPrice }) => {
    const { free, cost } = calculateShipping(subtotal);
    const total = subtotal + cost;
    
    const elements = {
      subtotal: document.querySelector('#order-subtotal'),
      shipping: document.querySelector('#order-shipping'),
      total: document.querySelector('#order-total')
    };
    
    if (elements.subtotal) elements.subtotal.textContent = formatPrice(subtotal);
    if (elements.shipping) elements.shipping.textContent = free ? 'FREE' : formatPrice(cost);
    if (elements.total) elements.total.textContent = formatPrice(total);
  });
}

function initCheckoutForm() {
  const form = document.querySelector('#checkout-form');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateCheckoutForm()) {
      const container = document.querySelector('.checkout-layout');
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; max-width: 600px; margin: 0 auto;">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 2rem;">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 10 11 15 8 12"></polyline>
          </svg>
          <h2 style="font-family: var(--font-secondary); font-size: 2rem; margin-bottom: 1rem;">Order Confirmed!</h2>
          <p style="color: #6c757d; margin-bottom: 2rem;">Thank you for your purchase. Your order has been confirmed and will be shipped soon.</p>
          <a href="index.html" class="btn btn-primary">Continue Shopping</a>
        </div>
      `;
      
      import('./cart.js').then(({ clearCart }) => clearCart());
    }
  });
}

function validateCheckoutForm() {
  const requiredFields = ['firstName', 'lastName', 'phone', 'address', 'city', 'zip'];
  let isValid = true;
  
  requiredFields.forEach(fieldName => {
    const field = document.querySelector(`#${fieldName}`);
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
