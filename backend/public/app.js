// Admin API Configuration
const API_BASE_URL = window.location.origin + '/api/admin';

// Check authentication
const token = localStorage.getItem('adminToken');
if (!token && !window.location.pathname.endsWith('/index.html')) {
  window.location.href = 'index.html';
}

// API Helper Functions
const api = {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('adminToken');
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }
    
    return data;
  },
  
  login(email, password) {
    return this.request('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  },
  
  getOrders(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/orders${query ? '?' + query : ''}`);
  },
  
  updateOrderStatus(id, status) {
    return this.request(`/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ order_status: status })
    });
  },
  
  deleteOrder(id) {
    return this.request(`/orders/${id}`, {
      method: 'DELETE'
    });
  },
  
  getStats() {
    return this.request('/orders/stats');
  },
  
  exportExcel() {
    return this.request('/export/excel', { method: 'GET' });
  },
  
  exportPDF() {
    return this.request('/export/pdf', { method: 'GET' });
  }
};

// Utility functions
function formatCurrency(amount) {
  return 'GHS ' + parseFloat(amount).toFixed(2);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-GH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Make api available globally
window.api = api;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
