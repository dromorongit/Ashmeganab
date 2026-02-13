/**
 * Ash Meganab Herbal - Utility Functions
 * ES6+ Modular JavaScript
 */

'use strict';

/**
 * Currency Formatting Utilities
 */
const CurrencyUtils = {
  /** Currency symbol */
  symbol: '₵',

  /** Currency code */
  code: 'GHS',

  /**
   * Format a number as Ghana Cedis currency
   * @param {number} amount - The amount to format
   * @returns {string} Formatted currency string
   */
  format(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      return `${this.symbol}0.00`;
    }
    const formatted = amount.toFixed(2);
    return `${this.symbol}${formatted}`;
  },

  /**
   * Parse a currency string to number
   * @param {string} currencyString - The currency string to parse
   * @returns {number} The numeric value
   */
  parse(currencyString) {
    if (typeof currencyString !== 'string') {
      return 0;
    }
    const numeric = currencyString.replace(/[^0-9.-]/g, '');
    return parseFloat(numeric) || 0;
  }
};

/**
 * Storage Utilities (localStorage wrapper)
 */
const StorageUtils = {
  /**
   * Get item from localStorage
   * @param {string} key - The storage key
   * @param {*} defaultValue - Default value if not found
   * @returns {*} The stored value or default
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item);
    } catch (error) {
      console.warn(`StorageUtils.get error for key "${key}":`, error);
      return defaultValue;
    }
  },

  /**
   * Set item in localStorage
   * @param {string} key - The storage key
   * @param {*} value - The value to store
   * @returns {boolean} Success status
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`StorageUtils.set error for key "${key}":`, error);
      return false;
    }
  },

  /**
   * Remove item from localStorage
   * @param {string} key - The storage key
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn(`StorageUtils.remove error for key "${key}":`, error);
    }
  },

  /**
   * Clear all items
   */
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('StorageUtils.clear error:', error);
    }
  }
};

/**
 * DOM Utilities
 */
const DOMUtils = {
  /**
   * Get element by ID
   * @param {string} id - Element ID
   * @returns {HTMLElement|null}
   */
  getById(id) {
    return document.getElementById(id);
  },

  /**
   * Get elements by class name
   * @param {string} className - Class name
   * @param {HTMLElement} parent - Parent element (optional)
   * @returns {NodeList}
   */
  getByClass(className, parent = document) {
    return parent.getElementsByClassName(className);
  },

  /**
   * Get elements by tag name
   * @param {string} tagName - Tag name
   * @param {HTMLElement} parent - Parent element (optional)
   * @returns {NodeList}
   */
  getByTag(tagName, parent = document) {
    return parent.getElementsByTagName(tagName);
  },

  /**
   * Query selector
   * @param {string} selector - CSS selector
   * @param {HTMLElement} parent - Parent element (optional)
   * @returns {HTMLElement|null}
   */
  query(selector, parent = document) {
    return parent.querySelector(selector);
  },

  /**
   * Query all selectors
   * @param {string} selector - CSS selector
   * @param {HTMLElement} parent - Parent element (optional)
   * @returns {NodeList}
   */
  queryAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  },

  /**
   * Create element with attributes and children
   * @param {string} tag - Tag name
   * @param {Object} attributes - Attributes object
   * @param {string|Array} children - Child elements or text
   * @returns {HTMLElement}
   */
  create(tag, attributes = {}, children = null) {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else if (key.startsWith('on')) {
        const event = key.substring(2).toLowerCase();
        element.addEventListener(event, value);
      } else {
        element.setAttribute(key, value);
      }
    });

    if (children) {
      if (Array.isArray(children)) {
        children.forEach(child => {
          if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
          } else {
            element.appendChild(child);
          }
        });
      } else if (typeof children === 'string') {
        element.innerHTML = children;
      } else {
        element.appendChild(children);
      }
    }

    return element;
  },

  /**
   * Add class to element
   * @param {HTMLElement} element
   * @param {string} className
   */
  addClass(element, className) {
    if (element && className) {
      element.classList.add(className);
    }
  },

  /**
   * Remove class from element
   * @param {HTMLElement} element
   * @param {string} className
   */
  removeClass(element, className) {
    if (element && className) {
      element.classList.remove(className);
    }
  },

  /**
   * Toggle class on element
   * @param {HTMLElement} element
   * @param {string} className
   */
  toggleClass(element, className) {
    if (element && className) {
      element.classList.toggle(className);
    }
  }
};

/**
 * Event Delegation Helper
 */
const EventUtils = {
  /**
   * Attach event listener using delegation
   * @param {string} parentSelector - Parent selector
   * @param {string} childSelector - Child selector
   * @param {string} eventType - Event type
   * @param {Function} handler - Event handler
   */
  delegate(parentSelector, childSelector, eventType, handler) {
    const parent = DOMUtils.query(parentSelector);
    if (!parent) return;

    parent.addEventListener(eventType, (event) => {
      const target = event.target.closest(childSelector);
      if (target) {
        handler(event, target);
      }
    });
  }
};

/**
 * Form Validation Utilities
 */
const ValidationUtils = {
  /**
   * Validate required field
   * @param {string} value
   * @returns {boolean}
   */
  required(value) {
    return value !== null && value !== undefined && value.trim() !== '';
  },

  /**
   * Validate email format
   * @param {string} email
   * @returns {boolean}
   */
  email(email) {
    if (!email || email.trim() === '') return true; // Email is optional
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  /**
   * Validate phone number (Ghana format)
   * @param {string} phone
   * @returns {boolean}
   */
  phone(phone) {
    if (!phone || phone.trim() === '') return false;
    // Ghana phone: 10 digits, starts with 0 or without 0
    const regex = /^(\+233|0)[0-9]{9}$/;
    return regex.test(phone.replace(/\s/g, ''));
  },

  /**
   * Validate quantity
   * @param {number} quantity
   * @param {number} min
   * @param {number} max
   * @returns {boolean}
   */
  quantity(quantity, min = 1, max = 999) {
    return typeof quantity === 'number' && quantity >= min && quantity <= max;
  },

  /**
   * Validate checkbox is checked
   * @param {boolean} checked
   * @returns {boolean}
   */
  checkbox(checked) {
    return checked === true;
  },

  /**
   * Get error message for validation
   * @param {string} fieldName
   * @param {Object} rules
   * @returns {string|null}
   */
  validateField(value, rules) {
    if (rules.required && !this.required(value)) {
      return `${rules.fieldName || 'This field'} is required`;
    }
    if (rules.email && !this.email(value)) {
      return 'Please enter a valid email address';
    }
    if (rules.phone && !this.phone(value)) {
      return 'Please enter a valid Ghana phone number (e.g., 0241234567)';
    }
    if (rules.minLength && value.length < rules.minLength) {
      return `${rules.fieldName || 'This field'} must be at least ${rules.minLength} characters`;
    }
    if (rules.checkbox && !this.checkbox(value)) {
      return 'Please confirm this statement';
    }
    return null;
  }
};

/**
 * URL Utilities
 */
const URLUtils = {
  /**
   * Get query parameter
   * @param {string} name - Parameter name
   * @returns {string|null}
   */
  getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },

  /**
   * Redirect to URL
   * @param {string} url
   * @param {Object} params - Query parameters
   */
  redirect(url, params = {}) {
    const urlObj = new URL(url, window.location.origin);
    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value);
    });
    window.location.href = urlObj.toString();
  },

  /**
   * Get current page name
   * @returns {string}
   */
  getPageName() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }
};

/**
 * Animation Utilities
 */
const AnimationUtils = {
  /**
   * Fade in element
   * @param {HTMLElement} element
   * @param {number} duration
   */
  fadeIn(element, duration = 300) {
    if (!element) return;
    element.style.opacity = '0';
    element.style.display = '';
    
    // Force reflow
    element.offsetHeight;
    
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '1';
  },

  /**
   * Fade out element
   * @param {HTMLElement} element
   * @param {number} duration
   */
  fadeOut(element, duration = 300) {
    if (!element) return;
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  },

  /**
   * Show success feedback
   * @param {HTMLElement} element
   */
  showSuccess(element) {
    if (!element) return;
    element.classList.add('success');
    element.classList.remove('error');
    setTimeout(() => {
      element.classList.remove('success');
    }, 3000);
  },

  /**
   * Show error feedback
   * @param {HTMLElement} element
   */
  showError(element) {
    if (!element) return;
    element.classList.add('error');
    element.classList.remove('success');
    setTimeout(() => {
      element.classList.remove('error');
    }, 3000);
  }
};

/**
 * Debounce Utility
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle Utility
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function}
 */
function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Generate unique ID
 * @returns {string}
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

/**
 * Export utilities for module usage
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CurrencyUtils,
    StorageUtils,
    DOMUtils,
    EventUtils,
    ValidationUtils,
    URLUtils,
    AnimationUtils,
    debounce,
    throttle,
    generateId
  };
}
