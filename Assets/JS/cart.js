/* ===================================
   Ash Meganab - Cart Module
   Herbal E-Commerce Website
   =================================== */

// Cart State
let cart = [];

// Cart Event Names
export const CART_UPDATED = 'cart:updated';
export const CART_OPENED = 'cart:opened';
export const CART_CLOSED = 'cart:closed';

// Initialize cart from localStorage
export function initCart() {
  const savedCart = localStorage.getItem('ashmeganab_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      console.error('Error parsing cart from localStorage:', e);
      cart = [];
    }
  }
  return cart;
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('ashmeganab_cart', JSON.stringify(cart));
  emitCartEvent();
}

// Emit custom cart events
function emitCartEvent() {
  window.dispatchEvent(new CustomEvent(CART_UPDATED, { detail: cart }));
}

// Get cart items
export function getCart() {
  return cart;
}

// Get cart count
export function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Get cart subtotal
export function getCartSubtotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Add item to cart
export function addToCart(product, quantity = 1) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      categoryName: product.categoryName,
      quantity: quantity
    });
  }
  
  saveCart();
  showAddedToCartToast(product.name);
  return cart;
}

// Update item quantity
export function updateQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    item.quantity = quantity;
    saveCart();
  }
  
  return cart;
}

// Increment quantity
export function incrementQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity += 1;
    saveCart();
  }
  
  return cart;
}

// Decrement quantity
export function decrementQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (item.quantity <= 1) {
      removeFromCart(productId);
      return;
    }
    item.quantity -= 1;
    saveCart();
  }
  
  return cart;
}

// Remove item from cart
export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  return cart;
}

// Clear entire cart
export function clearCart() {
  cart = [];
  saveCart();
  return cart;
}

// Check if product is in cart
export function isInCart(productId) {
  return cart.some(item => item.id === productId);
}

// Get quantity of specific product
export function getProductQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  return item ? item.quantity : 0;
}

// Show added to cart toast notification
function showAddedToCartToast(productName) {
  const existingToast = document.querySelector('.cart-toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'cart-toast';
  toast.innerHTML = `
    <div class="cart-toast-content">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${productName} added to cart!</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('active');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

// Apply promo code
export function applyPromoCode(code) {
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

// Calculate shipping (in Ghana Cedis)
export function calculateShipping(subtotal) {
  if (subtotal >= 1125) { // ~75 USD
    return { free: true, cost: 0 };
  }
  return { free: false, cost: 120.00 }; // ~8 USD
}

// Format price in Ghana Cedis
export function formatPrice(price) {
  return 'GH₵' + price.toFixed(2);
}

// Calculate order total
export function calculateOrderTotal(subtotal, discount = 0, shipping = 0) {
  const discountAmount = subtotal * discount;
  return subtotal - discountAmount + shipping;
}

// Render cart items in mini-cart
export function renderMiniCartItems(container) {
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started!</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-category">${item.categoryName}</span>
        <span class="cart-item-price">${formatPrice(item.price)}</span>
        <div class="cart-item-actions">
          <div class="cart-item-quantity">
            <button class="cart-qty-btn" data-action="decrement" data-id="${item.id}">-</button>
            <span class="cart-qty-value">${item.quantity}</span>
            <button class="cart-qty-btn" data-action="increment" data-id="${item.id}">+</button>
          </div>
          <button class="cart-item-remove" data-remove="${item.id}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Update cart summary
export function updateCartSummary(subtotalEl, totalEl, shippingEl) {
  const subtotal = getCartSubtotal();
  const { free, cost } = calculateShipping(subtotal);
  const total = subtotal + cost;
  
  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(subtotal);
  }
  
  if (shippingEl) {
    shippingEl.textContent = free ? 'FREE' : formatPrice(cost);
  }
  
  if (totalEl) {
    totalEl.textContent = formatPrice(total);
  }
  
  return { subtotal, shipping: cost, total };
}

// Export cart data for checkout
export function getCartForCheckout() {
  const subtotal = getCartSubtotal();
  const { free, cost } = calculateShipping(subtotal);
  return {
    items: [...cart],
    subtotal: subtotal,
    shipping: { free, cost },
    total: calculateOrderTotal(subtotal, 0, cost)
  };
}
