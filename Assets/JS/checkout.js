/**
 * Ash Meganab Herbal - Checkout Module
 * Handles checkout page functionality including cart, form, and order submission
 */

'use strict';

/**
 * Checkout Controller
 */
const Checkout = {
  /** Current order items */
  items: [],

  /** Order total */
  total: 0,

  /** Quantity button click flag */
  quantityClickInProgress: false,

  /**
   * Initialize checkout page
   */
  init() {
    this.loadOrderItems();
    this.renderOrderSummary();
    this.initQuantityControls();
    this.initFormValidation();
    this.initClearOrder();
    this.initPlaceOrder();
  },

  /**
   * Load order items from localStorage
   */
  loadOrderItems() {
    const pendingOrder = StorageUtils.get('ashmeg_pending_order');
    const quickOrder = StorageUtils.get('ashmeg_quick_order');

    if (pendingOrder) {
      this.items = [pendingOrder];
    } else if (quickOrder) {
      this.items = [{
        productId: quickOrder.productId,
        productName: quickOrder.productName,
        productPrice: quickOrder.productPrice,
        productImage: quickOrder.productImage,
        productCategory: quickOrder.productCategory,
        quantity: quickOrder.quantity,
        subtotal: quickOrder.productPrice * quickOrder.quantity
      }];
    } else {
      // Check URL parameters for product
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('product');
      
      if (productId) {
        const product = ProductService.getById(productId);
        if (product) {
          const orderItem = ProductService.formatForStorage(product, 1);
          this.items = [orderItem];
          StorageUtils.set('ashmeg_pending_order', orderItem);
        } else {
          this.items = [];
        }
      } else {
        this.items = [];
      }
    }

    // If no items, create empty state
    if (!this.items || this.items.length === 0) {
      this.items = [];
    }
  },

  /**
   * Render order summary
   */
  renderOrderSummary() {
    const checkoutSummary = DOMUtils.getById('checkout-summary');
    const emptyState = DOMUtils.getById('empty-order-state');
    const orderItemsContainer = DOMUtils.getById('order-items');
    const totalElement = DOMUtils.getById('order-total');
    const quantityControls = DOMUtils.getById('quantity-controls');

    if (!checkoutSummary) return;

    if (this.items.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (orderItemsContainer) orderItemsContainer.innerHTML = '';
      if (totalElement) totalElement.textContent = CurrencyUtils.format(0);
      if (quantityControls) quantityControls.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (quantityControls) quantityControls.style.display = 'flex';

    // Render items
    if (orderItemsContainer) {
      orderItemsContainer.innerHTML = this.items.map((item, index) => `
        <div class="order-item" data-index="${index}">
          <div class="order-item-image">
            <img 
              src="${item.productImage}" 
              alt="${item.productName}"
              loading="lazy"
            >
          </div>
          <div class="order-item-details">
            <h4 class="order-item-name">${item.productName}</h4>
            <p class="order-item-category">${item.productCategory}</p>
            <div class="order-item-price">${CurrencyUtils.format(item.productPrice)} × ${item.quantity}</div>
          </div>
          <div class="order-item-subtotal">${CurrencyUtils.format(item.subtotal)}</div>
          <button class="order-item-remove" onclick="Checkout.removeItem(${index})" title="Remove item">✕</button>
        </div>
      `).join('');
    }

    // Calculate and display total
    this.calculateTotal();
    if (totalElement) {
      totalElement.textContent = CurrencyUtils.format(this.total);
    }
  },

  /**
   * Calculate order total
   */
  calculateTotal() {
    this.total = this.items.reduce((sum, item) => sum + (item.productPrice * item.quantity), 0);
    return this.total;
  },

  /**
   * Initialize quantity increment/decrement controls
   */
  initQuantityControls() {
    const decrementBtn = DOMUtils.getById('qty-decrement');
    const incrementBtn = DOMUtils.getById('qty-increment');
    const quantityValue = DOMUtils.getById('qty-value');
    const clearBtn = DOMUtils.getById('clear-order-btn');

    if (decrementBtn) {
      decrementBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.quantityClickInProgress || this.items.length === 0) return;
        this.quantityClickInProgress = true;
        const currentQty = parseInt(quantityValue.textContent) || 1;
        if (currentQty > 1) {
          this.updateQuantity(currentQty - 1);
        }
        setTimeout(() => { this.quantityClickInProgress = false; }, 100);
      });
    }

    if (incrementBtn) {
      incrementBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.quantityClickInProgress || this.items.length === 0) return;
        this.quantityClickInProgress = true;
        const currentQty = parseInt(quantityValue.textContent) || 1;
        if (currentQty < 99) {
          this.updateQuantity(currentQty + 1);
        }
        setTimeout(() => { this.quantityClickInProgress = false; }, 100);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearOrder();
      });
    }
  },

  /**
   * Remove item from order
   * @param {number} index
   */
  removeItem(index) {
    this.items.splice(index, 1);
    if (this.items.length === 1) {
      StorageUtils.set('ashmeg_pending_order', this.items[0]);
    } else {
      StorageUtils.remove('ashmeg_pending_order');
    }
    this.renderOrderSummary();
    this.updateQuantityDisplay(1);
  },

  /**
   * Update quantity for all items
   * @param {number} newQuantity
   */
  updateQuantity(newQuantity) {
    if (newQuantity < 1 || newQuantity > 99) return;

    // Update all items to the same quantity
    this.items.forEach(item => {
      item.quantity = newQuantity;
      item.subtotal = item.productPrice * newQuantity;
    });

    // Update localStorage
    if (this.items.length === 1) {
      StorageUtils.set('ashmeg_pending_order', this.items[0]);
    }

    // Re-render
    this.renderOrderSummary();
    this.updateQuantityDisplay(newQuantity);
  },

  /**
   * Update quantity display
   * @param {number} quantity
   */
  updateQuantityDisplay(quantity) {
    const quantityValue = DOMUtils.getById('qty-value');
    if (quantityValue) {
      quantityValue.textContent = quantity;
    }
  },

  /**
   * Clear order
   */
  clearOrder() {
    this.items = [];
    StorageUtils.remove('ashmeg_pending_order');
    StorageUtils.remove('ashmeg_quick_order');
    this.renderOrderSummary();
    this.updateQuantityDisplay(1);
  },

  /**
   * Initialize form validation
   */
  initFormValidation() {
    const form = DOMUtils.getById('checkout-form');
    if (!form) return;

    const fields = {
      fullName: {
        element: DOMUtils.getById('full-name'),
        rules: { required: true, fieldName: 'Full Name', minLength: 3 }
      },
      phone: {
        element: DOMUtils.getById('phone'),
        rules: { required: true, fieldName: 'Phone Number', phone: true }
      },
      email: {
        element: DOMUtils.getById('email'),
        rules: { required: false, fieldName: 'Email', email: true }
      },
      address: {
        element: DOMUtils.getById('address'),
        rules: { required: true, fieldName: 'Delivery Address', minLength: 10 }
      },
      city: {
        element: DOMUtils.getById('city'),
        rules: { required: true, fieldName: 'City', minLength: 2 }
      },
      notes: {
        element: DOMUtils.getById('notes'),
        rules: { required: false }
      },
      fundsConfirmation: {
        element: DOMUtils.getById('funds-confirmation'),
        rules: { required: true, fieldName: 'Funds Confirmation', checkbox: true }
      }
    };

    // Real-time validation
    Object.entries(fields).forEach(([key, field]) => {
      if (field.element) {
        // Handle checkbox separately
        if (field.element.type === 'checkbox') {
          field.element.addEventListener('change', () => {
            this.validateField(field.element, field.rules);
          });
        } else {
          field.element.addEventListener('blur', () => {
            this.validateField(field.element, field.rules);
          });

          field.element.addEventListener('input', debounce(() => {
            this.validateField(field.element, field.rules);
          }, 300));
        }
      }
    });

    // Form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      console.log('Form submitted, starting validation...');

      // Validate all fields
      let isValid = true;
      const formData = {};

      Object.entries(fields).forEach(([key, field]) => {
        const error = this.validateField(field.element, field.rules);
        if (error) {
          console.log('Validation error for', key, ':', error);
          isValid = false;
        } else {
          // Handle checkbox separately
          if (field.element.type === 'checkbox') {
            formData[key] = field.element.checked;
          } else {
            formData[key] = field.element.value.trim();
          }
        }
      });

      if (!isValid) {
        this.showFormMessage('Please fill in all required fields correctly', 'error');
        return;
      }

      if (this.items.length === 0) {
        this.showFormMessage('Please select a product to order', 'error');
        return;
      }

      console.log('Validation passed, submitting order...');
      // Submit order
      this.submitOrder(formData);
    });
  },

  /**
   * Validate single field
   * @param {HTMLElement} element
   * @param {Object} rules
   * @returns {string|null}
   */
  validateField(element, rules) {
    let errorContainer = element.parentNode.querySelector('.form-error');
    let value = element ? element.value.trim() : '';
    
    // Handle checkbox validation - check parent and grandparent for error container
    if (rules.checkbox && element && element.type === 'checkbox') {
      value = element.checked;
      // For checkbox, look for error container in parent or grandparent
      if (!errorContainer) {
        errorContainer = element.parentElement.parentElement.querySelector('.form-error');
      }
    }

    const error = ValidationUtils.validateField(value, rules);

    if (error) {
      element.classList.add('error');
      if (errorContainer) {
        errorContainer.textContent = error;
        errorContainer.style.display = 'block';
      } else if (element) {
        element.setAttribute('aria-invalid', 'true');
      }
    } else {
      element.classList.remove('error');
      if (errorContainer) {
        errorContainer.style.display = 'none';
      } else if (element) {
        element.removeAttribute('aria-invalid');
      }
    }

    return error;
  },

  /**
   * Show form message
   * @param {string} message
   * @param {string} type - 'success' or 'error'
   */
  showFormMessage(message, type = 'success') {
    const messageContainer = DOMUtils.getById('form-message');
    if (!messageContainer) return;

    messageContainer.textContent = message;
    messageContainer.className = `form-message ${type}`;
    messageContainer.style.display = 'block';

    // Scroll to message
    messageContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Hide after delay for error messages
    if (type === 'error') {
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 5000);
    }
  },

  /**
   * Initialize place order button
   */
  initPlaceOrder() {
    // Additional button-specific handlers can be added here
  },

  /**
   * Initialize clear order button
   */
  initClearOrder() {
    const clearBtn = DOMUtils.getById('clear-order-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearOrder();
      });
    }
  },

  /**
  * Configuration
  */
  config: {
    // Backend API URL - update this after deploying to Railway
    apiBaseUrl: 'https://ashmeganab-production.up.railway.app/api/orders'
  },

  /**
   * Submit order via API
   * @param {Object} customerData
   */
  async submitOrder(customerData) {
    const submitBtn = DOMUtils.getById('place-order-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const spinner = submitBtn ? submitBtn.querySelector('.spinner') : null;

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Processing...';
      if (spinner) spinner.style.display = 'inline-block';
    }

    try {
      // Prepare order data
      const orderData = {
        customer_full_name: customerData.fullName,
        customer_phone: customerData.phone.replace(/\s/g, ''), // Remove spaces from phone
        customer_email: customerData.email || undefined,
        delivery_address: customerData.address,
        city: customerData.city,
        product_name: this.items[0].productName,
        product_category: this.items[0].productCategory,
        quantity: this.items[0].quantity,
        unit_price_GHS: this.items[0].productPrice,
        total_price_GHS: this.items[0].subtotal,
        additional_notes: customerData.notes || undefined
      };

      // Submit to backend API
      const response = await fetch(this.config.apiBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit order');
      }

      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Place Order';
        if (spinner) spinner.style.display = 'none';
      }

      // Clear pending order
      StorageUtils.remove('ashmeg_pending_order');
      StorageUtils.remove('ashmeg_quick_order');

      // Show success
      this.showSuccessMessage({
        orderId: result.data.order_id,
        total: result.data.total_price_GHS || this.items[0].subtotal
      });

    } catch (error) {
      console.error('Order submission error:', error);
      
      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Place Order';
        if (spinner) spinner.style.display = 'none';
      }

      // Show error message
      this.showFormMessage(`Failed to submit order: ${error.message}. Please try again or order via WhatsApp.`, 'error');

      // Fallback to WhatsApp if API fails
      if (confirm('API submission failed. Would you like to order via WhatsApp instead?')) {
        this.submitOrderViaWhatsApp(customerData);
      }
    }
  },

  /**
   * Submit order via WhatsApp (fallback)
   * @param {Object} customerData
   */
  submitOrderViaWhatsApp(customerData) {
    const submitBtn = DOMUtils.getById('place-order-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const spinner = submitBtn ? submitBtn.querySelector('.spinner') : null;

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Opening WhatsApp...';
      if (spinner) spinner.style.display = 'inline-block';
    }

    // Calculate final total
    const finalTotal = this.calculateTotal();

    // Format order message for WhatsApp
    let orderMessage = `*New Order - Ash Meganab Herbal*%0A%0A`;
    orderMessage += `*Customer Details:*%0A`;
    orderMessage += `Name: ${customerData.fullName}%0A`;
    orderMessage += `Phone: ${customerData.phone}%0A`;
    if (customerData.email) {
      orderMessage += `Email: ${customerData.email}%0A`;
    }
    orderMessage += `Address: ${customerData.address}%0A`;
    orderMessage += `City: ${customerData.city}%0A`;
    if (customerData.notes) {
      orderMessage += `Notes: ${customerData.notes}%0A`;
    }
    orderMessage += `%0A*Order Details:*%0A`;
    
    this.items.forEach((item, index) => {
      orderMessage += `${index + 1}. ${item.productName}%0A`;
      orderMessage += `   Price: ₵${item.productPrice}%0A`;
      orderMessage += `   Quantity: ${item.quantity}%0A`;
      orderMessage += `   Subtotal: ₵${item.subtotal}%0A%0A`;
    });
    
    orderMessage += `*Total: ₵${finalTotal}*%0A`;
    orderMessage += `%0AOrder Date: ${new Date().toLocaleDateString()}`;

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/233548551667?text=${orderMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset button
    if (submitBtn) {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Place Order';
      if (spinner) spinner.style.display = 'none';
    }

    // Clear pending order
    StorageUtils.remove('ashmeg_pending_order');
    StorageUtils.remove('ashmeg_quick_order');
    this.items = [];

    // Show confirmation
    this.showWhatsAppConfirmation();
  },

  /**
   * Show WhatsApp order confirmation
   */
  showWhatsAppConfirmation() {
    const formContainer = document.getElementById('checkout-form-container');
    const successContainer = document.getElementById('success-container');
    
    if (!successContainer) return;
    
    // Update success content for WhatsApp
    const orderIdElement = document.getElementById('success-order-id');
    const orderTotalElement = document.getElementById('success-order-total');
    
    if (orderIdElement) orderIdElement.textContent = 'WHATSAPP';
    if (orderTotalElement) orderTotalElement.textContent = 'Check WhatsApp';
    
    const successTitle = successContainer.querySelector('.success-title');
    const successMessage = successContainer.querySelector('.success-message');
    
    if (successTitle) successTitle.textContent = 'Opening WhatsApp...';
    if (successMessage) {
      successMessage.innerHTML = `Your order details are being prepared.<br><br>
        <strong>Please complete your order in the WhatsApp chat window.</strong><br><br>
        If WhatsApp doesn't open automatically, <a href="https://wa.me/233548551667" target="_blank">click here</a> to open WhatsApp.`;
    }
    
    if (formContainer) formContainer.style.display = 'none';
    successContainer.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Show success message after order submission
   * @param {Object} orderData
   */
  showSuccessMessage(orderData) {
    const formContainer = DOMUtils.getById('checkout-form-container');
    const successContainer = DOMUtils.getById('success-container');
    const orderIdElement = DOMUtils.getById('success-order-id');
    const orderTotalElement = DOMUtils.getById('success-order-total');

    if (!successContainer) return;

    if (orderIdElement) orderIdElement.textContent = orderData.orderId;
    if (orderTotalElement) orderTotalElement.textContent = CurrencyUtils.format(orderData.total);

    if (formContainer) formContainer.style.display = 'none';
    successContainer.style.display = 'block';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update page title
    document.title = 'Order Confirmed - Ash Meganab Herbal';
  }
};

/**
 * Format phone number input
 */
const PhoneFormatter = {
  init() {
    const phoneInput = DOMUtils.getById('phone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', (event) => {
      let value = event.target.value.replace(/\D/g, '');
      
      if (value.length > 0) {
        if (value.startsWith('233')) {
          value = value.substring(3);
        }
        if (value.length > 0) {
          value = value.substring(0, 10);
          if (value.length > 3) {
            value = value.substring(0, 3) + ' ' + value.substring(3);
          }
          if (value.length > 7) {
            value = value.substring(0, 7) + ' ' + value.substring(7);
          }
        }
        event.target.value = value;
      }
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Checkout.init();
  PhoneFormatter.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Checkout, PhoneFormatter };
}
