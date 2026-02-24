/**
 * Ash Meganab Herbal - Quick Order Module
 * Handles quick order card functionality on homepage
 */

'use strict';

/**
 * Quick Order Controller
 */
const QuickOrder = {
  /** Selected product */
  selectedProduct: null,

  /**
   * Initialize quick order functionality
   */
  init() {
    this.initProductDropdown();
    this.initQuantityControls();
    this.initFormValidation();
    this.initSubmit();
  },

  /**
   * Initialize product dropdown with products
   */
  initProductDropdown() {
    const productSelect = DOMUtils.getById('qo-product');
    if (!productSelect) return;

    // Populate dropdown with products
    const products = QuickOrderProducts;
    
    productSelect.innerHTML = `
      <option value="">-- Select a Product --</option>
      ${products.map(product => `
        <option value="${product.id}" data-price="${product.price}">
          ${product.name} - ${CurrencyUtils.format(product.price)}
        </option>
      `).join('')}
    `;

    // Handle selection change
    productSelect.addEventListener('change', (event) => {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const productId = event.target.value;

      if (productId) {
        const price = parseFloat(selectedOption.dataset.price) || 0;
        this.selectedProduct = products.find(p => p.id === productId);
        this.updatePriceDisplay(price);
      } else {
        this.selectedProduct = null;
        this.updatePriceDisplay(0);
      }

      // Validate field
      this.validateField(productSelect, { required: true, fieldName: 'Product' });
    });
  },

  /**
   * Initialize quantity controls
   */
  initQuantityControls() {
    const decrementBtn = DOMUtils.getById('qo-qty-decrement');
    const incrementBtn = DOMUtils.getById('qo-qty-increment');
    const quantityInput = DOMUtils.getById('qo-quantity');

    if (decrementBtn) {
      decrementBtn.addEventListener('click', () => {
        let currentQty = parseInt(quantityInput.value) || 1;
        if (currentQty > 1) {
          quantityInput.value = currentQty - 1;
          this.updateCalculatedPrice();
        }
      });
    }

    if (incrementBtn) {
      incrementBtn.addEventListener('click', () => {
        let currentQty = parseInt(quantityInput.value) || 1;
        if (currentQty < 99) {
          quantityInput.value = currentQty + 1;
          this.updateCalculatedPrice();
        }
      });
    }

    if (quantityInput) {
      quantityInput.addEventListener('input', debounce(() => {
        this.updateCalculatedPrice();
      }, 200));
    }
  },

  /**
   * Update price display when product is selected
   * @param {number} price
   */
  updatePriceDisplay(price) {
    const priceDisplay = DOMUtils.getById('qo-total-price');
    if (priceDisplay) {
      priceDisplay.textContent = CurrencyUtils.format(price);
    }
  },

  /**
   * Update calculated total price
   */
  updateCalculatedPrice() {
    const productSelect = DOMUtils.getById('qo-product');
    const quantityInput = DOMUtils.getById('qo-quantity');
    const priceDisplay = DOMUtils.getById('qo-total-price');

    if (!productSelect || !quantityInput || !priceDisplay) return;

    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const price = parseFloat(selectedOption.dataset.price) || 0;
    const quantity = parseInt(quantityInput.value) || 1;

    const total = price * quantity;
    priceDisplay.textContent = CurrencyUtils.format(total);
  },

  /**
   * Initialize form validation
   */
  initFormValidation() {
    const fields = {
      fullName: {
        element: DOMUtils.getById('qo-full-name'),
        rules: { required: true, fieldName: 'Full Name', minLength: 3 }
      },
      phone: {
        element: DOMUtils.getById('qo-phone'),
        rules: { required: true, fieldName: 'Phone Number', phone: true }
      },
      product: {
        element: DOMUtils.getById('qo-product'),
        rules: { required: true, fieldName: 'Product' }
      },
      quantity: {
        element: DOMUtils.getById('qo-quantity'),
        rules: { required: true, fieldName: 'Quantity', quantity: true }
      }
    };

    // Add real-time validation
    Object.entries(fields).forEach(([key, field]) => {
      if (field.element) {
        field.element.addEventListener('blur', () => {
          const value = key === 'product' ? field.element.value : field.element.value.trim();
          this.validateField(field.element, field.rules);
        });

        if (key === 'quantity') {
          field.element.addEventListener('input', () => {
            this.validateField(field.element, field.rules);
            this.updateCalculatedPrice();
          });
        }
      }
    });
  },

  /**
   * Validate single field
   * @param {HTMLElement} element
   * @param {Object} rules
   * @returns {string|null}
   */
  validateField(element, rules) {
    const errorContainer = element.parentNode.querySelector('.form-error');
    let value = element.value;

    if (element.id === 'qo-quantity') {
      value = parseInt(value) || 0;
    } else {
      value = value.trim();
    }

    let error = null;

    if (rules.required && (value === '' || value === null || value === undefined)) {
      error = `${rules.fieldName || 'This field'} is required`;
    } else if (rules.minLength && typeof value === 'string' && value.length < rules.minLength) {
      error = `${rules.fieldName || 'This field'} must be at least ${rules.minLength} characters`;
    } else if (rules.phone && !ValidationUtils.phone(value)) {
      error = 'Please enter a valid Ghana phone number (e.g., 0241234567)';
    } else if (rules.quantity && !ValidationUtils.quantity(value, 1, 99)) {
      error = 'Quantity must be between 1 and 99';
    }

    if (error) {
      element.classList.add('error');
      if (errorContainer) {
        errorContainer.textContent = error;
        errorContainer.style.display = 'block';
      }
    } else {
      element.classList.remove('error');
      if (errorContainer) {
        errorContainer.style.display = 'none';
      }
    }

    return error;
  },

  /**
   * Initialize form submission
   */
  initSubmit() {
    const form = DOMUtils.getById('quick-order-form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Validate all fields
      let isValid = true;
      const formData = {
        fullName: null,
        phone: null,
        productId: null,
        productName: null,
        productPrice: null,
        quantity: null
      };

      // Validate Full Name
      const fullNameEl = DOMUtils.getById('qo-full-name');
      const fullName = fullNameEl ? fullNameEl.value.trim() : '';
      if (this.validateField(fullNameEl, { required: true, fieldName: 'Full Name', minLength: 3 })) {
        isValid = false;
      } else {
        formData.fullName = fullName;
      }

      // Validate Phone
      const phoneEl = DOMUtils.getById('qo-phone');
      const phone = phoneEl ? phoneEl.value.trim() : '';
      if (this.validateField(phoneEl, { required: true, fieldName: 'Phone Number', phone: true })) {
        isValid = false;
      } else {
        formData.phone = phone;
      }

      // Validate Product
      const productEl = DOMUtils.getById('qo-product');
      const productId = productEl ? productEl.value : '';
      if (this.validateField(productEl, { required: true, fieldName: 'Product' })) {
        isValid = false;
      } else {
        formData.productId = productId;
        const selectedOption = productEl.options[productEl.selectedIndex];
        formData.productName = selectedOption.text.split(' - ')[0];
        formData.productPrice = parseFloat(selectedOption.dataset.price) || 0;
      }

      // Validate Quantity
      const quantityEl = DOMUtils.getById('qo-quantity');
      const quantity = parseInt(quantityEl ? quantityEl.value : 0);
      if (this.validateField(quantityEl, { required: true, fieldName: 'Quantity', quantity: true })) {
        isValid = false;
      } else {
        formData.quantity = quantity;
      }

      if (!isValid) {
        this.showMessage('Please fill in all required fields correctly', 'error');
        return;
      }

      // Submit order
      await this.submitOrder(formData);
    });
  },

  /**
   * Submit quick order via WhatsApp
   * @param {Object} formData
   */
  submitOrder(formData) {
    const submitBtn = DOMUtils.getById('qo-submit-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const spinner = submitBtn ? submitBtn.querySelector('.spinner') : null;

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Opening WhatsApp...';
      if (spinner) spinner.style.display = 'inline-block';
    }

    // Calculate total
    const total = formData.productPrice * formData.quantity;

    // Format order message for WhatsApp
    let orderMessage = `*Quick Order - Ash Meganab Herbal*%0A%0A`;
    orderMessage += `*Customer Details:*%0A`;
    orderMessage += `Name: ${formData.fullName}%0A`;
    orderMessage += `Phone: ${formData.phone}%0A`;
    orderMessage += `%0A*Order Details:*%0A`;
    orderMessage += `Product: ${formData.productName}%0A`;
    orderMessage += `Price: ₵${formData.productPrice}%0A`;
    orderMessage += `Quantity: ${formData.quantity}%0A`;
    orderMessage += `*Total: ₵${total}*%0A`;
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

    // Show WhatsApp confirmation
    this.showWhatsAppConfirmation();

    // Reset form
    this.resetForm();

    // GA4 Generate Lead Event Tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'generate_lead', {
        method: 'Quick Order Form'
      });
    }
  },

  /**
   * Show WhatsApp order confirmation
   */
  showWhatsAppConfirmation() {
    const form = DOMUtils.getById('quick-order-form');
    const successContainer = DOMUtils.getById('qo-success');

    if (!successContainer) return;

    const orderIdEl = DOMUtils.getById('qo-success-order-id');
    const totalEl = DOMUtils.getById('qo-success-total');

    if (orderIdEl) orderIdEl.textContent = 'WHATSAPP';
    if (totalEl) totalEl.textContent = 'Check WhatsApp';

    const successTitle = successContainer.querySelector('h3');
    if (successTitle) successTitle.textContent = 'Opening WhatsApp...';

    const successText = successContainer.querySelectorAll('p');
    if (successText[1]) {
      successText[1].innerHTML = `Your order details are being prepared.<br><br>
        <strong>Please complete your order in the WhatsApp chat window.</strong><br><br>
        If WhatsApp doesn't open automatically, <a href="https://wa.me/233548551667" target="_blank">click here</a> to open WhatsApp.`;
    }

    if (form) form.style.display = 'none';
    successContainer.style.display = 'block';

    // Scroll to success message
    successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  /**
   * Show message
   * @param {string} message
   * @param {string} type
   */
  showMessage(message, type = 'success') {
    const messageContainer = DOMUtils.getById('qo-message');
    if (!messageContainer) return;

    messageContainer.textContent = message;
    messageContainer.className = `qo-message ${type}`;
    messageContainer.style.display = 'block';

    // Scroll to message
    messageContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (type === 'error') {
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 5000);
    }
  },

  /**
   * Show success message
   * @param {Object} orderData
   */
  showSuccessMessage(orderData) {
    const form = DOMUtils.getById('quick-order-form');
    const successContainer = DOMUtils.getById('qo-success');

    if (!successContainer) return;

    const orderIdEl = DOMUtils.getById('qo-success-order-id');
    const totalEl = DOMUtils.getById('qo-success-total');

    if (orderIdEl) orderIdEl.textContent = orderData.orderId;
    if (totalEl) totalEl.textContent = CurrencyUtils.format(orderData.total);

    if (form) form.style.display = 'none';
    successContainer.style.display = 'block';

    // Scroll to success message
    successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  /**
   * Reset form
   */
  resetForm() {
    const form = DOMUtils.getById('quick-order-form');
    if (!form) return;

    form.reset();
    this.selectedProduct = null;
    this.updatePriceDisplay(0);

    // Remove validation classes
    const inputs = form.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
      input.classList.remove('error');
    });

    const errorMessages = form.querySelectorAll('.form-error');
    errorMessages.forEach(msg => {
      msg.style.display = 'none';
    });
  },

  /**
   * Reset to form (from success state)
   */
  resetToForm() {
    const form = DOMUtils.getById('quick-order-form');
    const successContainer = DOMUtils.getById('qo-success');

    if (form) form.style.display = 'block';
    if (successContainer) successContainer.style.display = 'none';

    StorageUtils.remove('ashmeg_quick_order');
  }
};

/**
 * Quick Order Phone Formatter
 */
const QuickOrderPhoneFormatter = {
  init() {
    const phoneInput = DOMUtils.getById('qo-phone');
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
  QuickOrder.init();
  QuickOrderPhoneFormatter.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuickOrder, QuickOrderPhoneFormatter };
}
