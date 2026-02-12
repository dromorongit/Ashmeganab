// Dashboard functionality
document.addEventListener('DOMContentLoaded', () => {
  // Check authentication
  const token = localStorage.getItem('adminToken');
  if (!token) {
    window.location.href = 'index.html';
    return;
  }

  // Initialize dashboard
  Dashboard.init();
});

const Dashboard = {
  currentPage: 1,
  currentOrder: null,

  init() {
    this.loadOrders();
    this.loadStats();
    this.initEventListeners();
  },

  initEventListeners() {
    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', debounce(() => {
        this.currentPage = 1;
        this.loadOrders();
      }, 300));
    }

    // Status filter
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
      statusFilter.addEventListener('change', () => {
        this.currentPage = 1;
        this.loadOrders();
      });
    }

    // Export buttons
    document.getElementById('export-excel-btn')?.addEventListener('click', () => this.exportOrders('excel'));
    document.getElementById('export-pdf-btn')?.addEventListener('click', () => this.exportOrders('pdf'));

    // Logout
    document.getElementById('logout-btn')?.addEventListener('click', () => this.logout());

    // Modal
    document.querySelector('.modal-close')?.addEventListener('click', () => this.closeModal());
    document.getElementById('update-status-btn')?.addEventListener('click', () => this.updateStatus());

    // Close modal on backdrop click
    document.getElementById('order-modal')?.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        this.closeModal();
      }
    });
  },

  async loadOrders() {
    const tbody = document.getElementById('orders-tbody');
    const loading = document.getElementById('loading');
    const noOrders = document.getElementById('no-orders');

    if (!tbody) return;

    tbody.innerHTML = '';
    loading.style.display = 'block';
    noOrders.style.display = 'none';

    try {
      const search = document.getElementById('search-input')?.value || '';
      const status = document.getElementById('status-filter')?.value || 'all';

      const result = await api.getOrders({
        page: this.currentPage,
        limit: 20,
        search,
        status
      });

      loading.style.display = 'none';

      if (result.data.orders.length === 0) {
        noOrders.style.display = 'block';
        return;
      }

      this.renderOrders(result.data.orders);
      this.renderPagination(result.data.pagination);

    } catch (error) {
      console.error('Error loading orders:', error);
      loading.style.display = 'none';
      alert('Failed to load orders: ' + error.message);
    }
  },

  renderOrders(orders) {
    const tbody = document.getElementById('orders-tbody');
    if (!tbody) return;

    tbody.innerHTML = orders.map(order => `
      <tr>
        <td><strong>${order.order_id}</strong></td>
        <td>
          <div>${order.customer_full_name}</div>
          <small style="color: #666;">${order.customer_phone}</small>
        </td>
        <td>
          <div>${order.product_name}</div>
          <small style="color: #666;">${order.product_category}</small>
        </td>
        <td>${order.quantity}</td>
        <td><strong>${formatCurrency(order.total_price_GHS)}</strong></td>
        <td>
          <span class="status-badge ${order.order_status.toLowerCase()}">${order.order_status}</span>
        </td>
        <td>${formatDate(order.created_at)}</td>
        <td>
          <button class="action-btn view" onclick="Dashboard.viewOrder('${order._id}')">View</button>
          <button class="action-btn delete" onclick="Dashboard.deleteOrder('${order._id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  },

  renderPagination(pagination) {
    const paginationEl = document.getElementById('pagination');
    if (!paginationEl) return;

    if (pagination.pages <= 1) {
      paginationEl.innerHTML = '';
      return;
    }

    let html = '';
    
    // Previous button
    if (pagination.page > 1) {
      html += `<button onclick="Dashboard.goToPage(${pagination.page - 1})">Previous</button>`;
    }

    // Page numbers
    for (let i = 1; i <= pagination.pages; i++) {
      if (i === 1 || i === pagination.pages || (i >= pagination.page - 2 && i <= pagination.page + 2)) {
        html += `<button class="${i === pagination.page ? 'active' : ''}" onclick="Dashboard.goToPage(${i})">${i}</button>`;
      } else if (i === pagination.page - 3 || i === pagination.page + 3) {
        html += `<span>...</span>`;
      }
    }

    // Next button
    if (pagination.page < pagination.pages) {
      html += `<button onclick="Dashboard.goToPage(${pagination.page + 1})">Next</button>`;
    }

    paginationEl.innerHTML = html;
  },

  goToPage(page) {
    this.currentPage = page;
    this.loadOrders();
  },

  async loadStats() {
    try {
      const stats = await api.getStats();
      
      // Debug log
      console.log('Stats loaded:', stats);
      
      const pendingCount = stats.data.byStatus.find(s => s._id === 'Pending')?.count || 0;
      const processedCount = stats.data.byStatus.find(s => s._id === 'Processed')?.count || 0;
      const deliveredCount = stats.data.byStatus.find(s => s._id === 'Delivered')?.count || 0;
      
      document.getElementById('pending-count').textContent = pendingCount;
      document.getElementById('processed-count').textContent = processedCount;
      document.getElementById('delivered-count').textContent = deliveredCount;
      document.getElementById('total-revenue').textContent = formatCurrency(stats.data.totalRevenue);

    } catch (error) {
      console.error('Error loading stats:', error);
      // Set default values on error
      document.getElementById('pending-count').textContent = '-';
      document.getElementById('processed-count').textContent = '-';
      document.getElementById('delivered-count').textContent = '-';
      document.getElementById('total-revenue').textContent = 'GHS 0.00';
    }
  },

  async viewOrder(id) {
    try {
      const result = await api.request(`/orders/${id}`);
      this.currentOrder = result.data;
      
      const modalBody = document.getElementById('modal-body');
      const order = result.data;
      
      modalBody.innerHTML = `
        <div class="order-detail-row">
          <span class="order-detail-label">Order ID:</span>
          <span class="order-detail-value"><strong>${order.order_id}</strong></span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Customer:</span>
          <span class="order-detail-value">${order.customer_full_name}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Phone:</span>
          <span class="order-detail-value">${order.customer_phone}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Email:</span>
          <span class="order-detail-value">${order.customer_email || 'N/A'}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Address:</span>
          <span class="order-detail-value">${order.delivery_address}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">City:</span>
          <span class="order-detail-value">${order.city}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Product:</span>
          <span class="order-detail-value">${order.product_name}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Category:</span>
          <span class="order-detail-value">${order.product_category}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Quantity:</span>
          <span class="order-detail-value">${order.quantity}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Unit Price:</span>
          <span class="order-detail-value">${formatCurrency(order.unit_price_GHS)}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Total:</span>
          <span class="order-detail-value"><strong>${formatCurrency(order.total_price_GHS)}</strong></span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Status:</span>
          <span class="order-detail-value">
            <select id="status-select" style="padding: 8px; border-radius: 4px; border: 1px solid #dee2e6;">
              <option value="Pending" ${order.order_status === 'Pending' ? 'selected' : ''}>Pending</option>
              <option value="Processed" ${order.order_status === 'Processed' ? 'selected' : ''}>Processed</option>
              <option value="Delivered" ${order.order_status === 'Delivered' ? 'selected' : ''}>Delivered</option>
            </select>
          </span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Notes:</span>
          <span class="order-detail-value">${order.additional_notes || 'N/A'}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">Created:</span>
          <span class="order-detail-value">${formatDate(order.created_at)}</span>
        </div>
      `;
      
      document.getElementById('order-modal').classList.add('active');
      
    } catch (error) {
      console.error('Error loading order:', error);
      alert('Failed to load order details');
    }
  },

  async updateStatus() {
    if (!this.currentOrder) return;
    
    const newStatus = document.getElementById('status-select')?.value;
    if (!newStatus) return;
    
    try {
      await api.updateOrderStatus(this.currentOrder._id, newStatus);
      this.closeModal();
      // Small delay to ensure database update completes
      setTimeout(() => {
        this.loadOrders();
        this.loadStats();
      }, 100);
      alert('Order status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update order status');
    }
  },

  async deleteOrder(id) {
    if (!confirm('Are you sure you want to delete this order?')) return;
    
    try {
      await api.deleteOrder(id);
      this.loadOrders();
      this.loadStats();
      alert('Order deleted successfully');
    } catch (error) {
      console.error('Error deleting order:', error);
      alert('Failed to delete order');
    }
  },

  closeModal() {
    document.getElementById('order-modal').classList.remove('active');
    this.currentOrder = null;
  },

  async exportOrders(type) {
    try {
      const result = type === 'excel' 
        ? await api.exportExcel()
        : await api.exportPDF();
      
      // Create download link
      const url = URL.createObjectURL(result);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ashmeganab-orders-${Date.now()}.${type === 'excel' ? 'xlsx' : 'pdf'}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error exporting orders:', error);
      alert('Failed to export orders');
    }
  },

  logout() {
    localStorage.removeItem('adminToken');
    window.location.href = 'index.html';
  }
};

// Utility: Debounce
function debounce(func, wait) {
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

// Make Dashboard available globally
window.Dashboard = Dashboard;
