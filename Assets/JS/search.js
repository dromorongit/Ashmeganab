/* ===================================
   Ash Meganab - Search Module
   Herbal E-Commerce Website
   =================================== */

import { products, searchProducts as searchProductsData, categories } from './products.js';

// Search State
let searchTimeout = null;
const MIN_SEARCH_LENGTH = 2;

// Initialize search functionality
export function initSearch(searchInput, resultsContainer) {
  if (!searchInput || !resultsContainer) return;
  
  // Focus event
  searchInput.addEventListener('focus', () => {
    searchInput.classList.add('active');
  });
  
  // Blur event with delay to allow clicking results
  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      searchInput.classList.remove('active');
      if (resultsContainer) {
        resultsContainer.classList.remove('active');
      }
    }, 200);
  });
  
  // Input event for live search
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    // Hide results if input is empty
    if (query.length === 0) {
      if (resultsContainer) {
        resultsContainer.classList.remove('active');
      }
      return;
    }
    
    // Debounce search
    searchTimeout = setTimeout(() => {
      performSearch(query, resultsContainer);
    }, 200);
  });
  
  // Enter key event
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value.trim();
      if (query.length >= MIN_SEARCH_LENGTH) {
        // Redirect to shop page with search query
        window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
      }
    }
  });
}

// Perform search and display results
function performSearch(query, container) {
  const results = searchProductsData(query);
  displaySearchResults(results, query, container);
}

// Display search results
function displaySearchResults(results, query, container) {
  if (!container) return;
  
  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-result-item" style="padding: 1rem; text-align: center;">
        <p style="color: #6c757d; font-size: 0.875rem;">No products found for "${query}"</p>
      </div>
    `;
    container.classList.add('active');
    return;
  }
  
  // Limit to 5 results
  const displayResults = results.slice(0, 5);
  
  container.innerHTML = displayResults.map(product => `
    <a href="shop.html?product=${product.id}" class="search-result-item">
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h4>${product.name}</h4>
        <p>$${product.price.toFixed(2)}</p>
      </div>
    </a>
  `).join('');
  
  // Add "View all results" link if there are more results
  if (results.length > 5) {
    container.innerHTML += `
      <a href="shop.html?q=${encodeURIComponent(query)}" class="search-result-item" style="justify-content: center; background: #f8f9fa;">
        <span style="color: #2d6a4f; font-weight: 500;">View all ${results.length} results</span>
      </a>
    `;
  }
  
  container.classList.add('active');
}

// Initialize header search
export function initHeaderSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  
  if (searchInput && searchResults) {
    initSearch(searchInput, searchResults);
  }
}

// Initialize shop page search/filter
export function initShopSearch() {
  const searchInput = document.querySelector('#shop-search');
  const resultsContainer = document.querySelector('#shop-search-results');
  
  if (searchInput && resultsContainer) {
    initSearch(searchInput, resultsContainer);
  }
}

// Get URL search params
export function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    query: params.get('q') || '',
    category: params.get('category') || '',
    product: params.get('product') || ''
  };
}

// Filter products by category
export function filterByCategory(products, categoryId) {
  if (!categoryId || categoryId === 'all') {
    return products;
  }
  return products.filter(product => product.category === categoryId);
}

// Filter products by price range
export function filterByPriceRange(products, minPrice, maxPrice) {
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
}

// Filter products by rating
export function filterByRating(products, minRating) {
  return products.filter(product => product.rating >= minRating);
}

// Combined filter function
export function filterProducts(products, filters) {
  let filtered = [...products];
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }
  
  if (filters.minRating) {
    filtered = filtered.filter(p => p.rating >= filters.minRating);
  }
  
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query)
    );
  }
  
  return filtered;
}
