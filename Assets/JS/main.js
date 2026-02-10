<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Ash Meganab - Natural Herbal Solutions for a Healthier You. Premium herbal supplements for cardiovascular health, blood sugar management, prostate health, and pain relief.">
  <meta name="keywords" content="herbal supplements, natural health, CardioNab, DiaoNab, ProstaNab, Nabdol, herbal remedies">
  <meta name="author" content="Ash Meganab">
  <meta name="robots" content="index, follow">
  <link rel="icon" type="image/jpeg" href="Assets/Images/ashmeganablogo.PNG">
  
  <title>Ash Meganab | Natural Herbal Solutions for a Healthier You</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="Assets/CSS/main.css">
  <style>
    /* Mini Quick Order Card Styles */
    .mini-quick-order-card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--spacing-lg);
      height: fit-content;
    }
    
    .mini-quick-order-card h3 {
      font-family: var(--font-secondary);
      font-size: var(--font-size-lg);
      color: var(--color-gray-800);
      margin-bottom: var(--spacing-md);
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }
    
    .mini-quick-order-card h3 svg {
      width: 20px;
      height: 20px;
      color: var(--color-primary);
    }
    
    .mini-quick-order-form .form-group {
      margin-bottom: var(--spacing-sm);
    }
    
    .mini-quick-order-form .form-group input,
    .mini-quick-order-form .form-group select {
      width: 100%;
      padding: var(--spacing-sm);
      border: 1px solid var(--color-gray-300);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
    }
    
    .mini-quick-order-form .form-group input:focus,
    .mini-quick-order-form .form-group select:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    
    .mini-quick-order-btn {
      width: 100%;
      padding: var(--spacing-sm);
      margin-top: var(--spacing-sm);
    }
    
    .quick-order-card-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
        <span>Ash Meganab</span>
      </a>
      
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="shop.html" class="nav-link">Shop</a>
        <div class="nav-item nav-item-has-children">
          <a href="shop.html" class="nav-link">Categories</a>
          <div class="nav-dropdown">
            <a href="shop.html?category=cardionab" class="nav-dropdown-item">CardioNab</a>
            <a href="shop.html?category=dianab" class="nav-dropdown-item">DiaoNab</a>
            <a href="shop.html?category=prostanab" class="nav-dropdown-item">ProstaNab</a>
            <a href="shop.html?category=nabdol" class="nav-dropdown-item">Nabdol</a>
          </div>
        </div>
        <a href="about.html" class="nav-link">About</a>
        <a href="blog.html" class="nav-link">Blog</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      
      <div class="header-actions">
        <div class="search-container">
          <form class="search-form">
            <input type="text" class="search-input" placeholder="Search products..." aria-label="Search">
            <button type="submit" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div class="search-results"></div>
        </div>
        
        <a href="checkout.html" class="cart-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">0</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  
  <div class="mobile-menu-overlay"></div>
  
  <!-- Mini Cart Drawer -->
  <div class="cart-overlay"></div>
  <aside class="cart-drawer">
    <div class="cart-header">
      <h3>Shopping Cart</h3>
      <button class="cart-close-btn" aria-label="Close Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="cart-items-container">
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started!</p>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-value">₵0.00</span>
      </div>
      <p class="cart-shipping-note">Shipping calculated at checkout</p>
      <div class="cart-buttons">
        <a href="checkout.html" class="btn btn-secondary cart-btn-secondary">View Cart</a>
        <a href="checkout.html" class="btn btn-primary cart-btn-primary">Checkout</a>
      </div>
    </div>
  </aside>
  
  <!-- Hero Section -->
  <section class="hero" style="position: relative; min-height: 600px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1a4d3e, #2d6a4f); margin-top: 70px; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80') center/cover; opacity: 0.15;"></div>
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, transparent 0%, rgba(26, 77, 62, 0.8) 100%);"></div>
    <div class="container" style="position: relative; z-index: 1; text-align: center; color: white;">
      <h1 style="font-family: var(--font-secondary); font-size: var(--font-size-5xl); margin-bottom: var(--spacing-lg); animation: slideUp 0.6s ease;">Natural Herbal Solutions for a Healthier You</h1>
      <p style="font-size: var(--font-size-lg); max-width: 600px; margin: 0 auto var(--spacing-2xl); opacity: 0.9; animation: slideUp 0.6s ease 0.2s backwards;">Discover premium herbal supplements crafted with natural ingredients to support your wellness journey. Pure. Natural. Effective.</p>
      <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
        <a href="shop.html" class="btn btn-primary btn-lg">Shop Now</a>
        <a href="shop.html?category=cardionab" class="btn btn-secondary btn-lg" style="background: transparent; border-color: white; color: white;">Explore Categories</a>
      </div>
    </div>
  </section>
  
  <!-- Advertisement Banner -->
  <section class="container">
    <div class="ad-banner" style="position: relative; background: linear-gradient(135deg, var(--color-cream), var(--color-off-white)); border: 1px solid var(--color-gray-200);">
      <div class="ad-banner-content">
        <span class="ad-banner-text"><strong>🌿 New Collection:</strong> Use code <strong>WELCOME10</strong> for 10% off your first order!</span>
      </div>
      <button class="ad-banner-close" aria-label="Close">&times;</button>
    </div>
  </section>
  
  <!-- Categories Section with Mini Quick Order -->
  <section class="categories-section section">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 280px; gap: var(--spacing-2xl); align-items: start;">
        <div>
          <h2 class="section-title">Our Categories</h2>
          <p class="section-subtitle">Explore our range of premium herbal supplements designed for your specific health needs</p>
          <div class="categories-grid" id="categories-grid"></div>
        </div>
        
        <!-- Mini Quick Order Card -->
        <div class="mini-quick-order-card">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Quick Order
          </h3>
          <form class="mini-quick-order-form" id="mini-quick-order-form-1">
            <div class="form-group">
              <input type="text" id="mini-name-1" name="name" placeholder="Full Name" required>
            </div>
            <div class="form-group">
              <input type="tel" id="mini-phone-1" name="phone" placeholder="Phone Number" required>
            </div>
            <div class="form-group">
              <select id="mini-product-1" name="product" required>
                <option value="">Select Product</option>
                <option value="cardionab">CardioNab - ₵690</option>
                <option value="dianab">DiaoNab - ₵720</option>
                <option value="prostanab">ProstaNab - ₵750</option>
                <option value="nabdol">Nabdol - ₵495</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary mini-quick-order-btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Featured Products Section with Mini Quick Order -->
  <section class="products-section">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 280px; gap: var(--spacing-2xl); align-items: start;">
        <div>
          <div class="products-header">
            <h2>Featured Products</h2>
            <a href="shop.html" class="view-all-link">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div class="products-grid" id="featured-products"></div>
        </div>
        
        <!-- Mini Quick Order Card -->
        <div class="mini-quick-order-card">
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Quick Order
          </h3>
          <form class="mini-quick-order-form" id="mini-quick-order-form-2">
            <div class="form-group">
              <input type="text" id="mini-name-2" name="name" placeholder="Full Name" required>
            </div>
            <div class="form-group">
              <input type="tel" id="mini-phone-2" name="phone" placeholder="Phone Number" required>
            </div>
            <div class="form-group">
              <select id="mini-product-2" name="product" required>
                <option value="">Select Product</option>
                <option value="cardionab">CardioNab - ₵690</option>
                <option value="dianab">DiaoNab - ₵720</option>
                <option value="prostanab">ProstaNab - ₵750</option>
                <option value="nabdol">Nabdol - ₵495</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary mini-quick-order-btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Why Choose Us Section -->
  <section class="why-us-section">
    <div class="container">
      <h2 class="section-title">Why Choose Ash Meganab</h2>
      <p class="section-subtitle">We're committed to providing the highest quality herbal supplements for your wellness journey</p>
      <div class="why-us-grid">
        <div class="why-us-card">
          <div class="why-us-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>100% Natural</h3>
          <p>All our products are made from pure, natural herbs with no artificial additives or preservatives.</p>
        </div>
        <div class="why-us-card">
          <div class="why-us-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Clinically Tested</h3>
          <p>Our formulations are based on traditional herbal knowledge and supported by modern research.</p>
        </div>
        <div class="why-us-card">
          <div class="why-us-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>Quality Guaranteed</h3>
          <p>ISO certified manufacturing ensures consistent quality and safety in every product.</p>
        </div>
        <div class="why-us-card">
          <div class="why-us-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3>Customer First</h3>
          <p>Your health and satisfaction are our top priorities. We're here to support you every step of the way.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <div class="container">
      <h2 class="section-title">What Our Customers Say</h2>
      <p class="section-subtitle">Real stories from real customers who have experienced the power of natural healing</p>
      <div class="testimonials-slider">
        <div class="testimonials-track" id="testimonials-track"></div>
        <div class="slider-dots" id="testimonial-dots"></div>
        <div class="slider-controls">
          <button class="slider-btn prev" aria-label="Previous Testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button class="slider-btn next" aria-label="Next Testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Newsletter Section -->
  <section class="newsletter-section">
    <div class="container">
      <div class="newsletter-container">
        <h2>Join Our Wellness Community</h2>
        <p>Subscribe to receive health tips, exclusive offers, and updates on new products</p>
        <form class="newsletter-form-inline" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-cta">
      <div class="footer-cta-content">
        <div class="footer-cta-text">
          <h3>Ready to Start Your Wellness Journey?</h3>
          <p>Explore our range of natural herbal supplements and find the perfect solution for your health needs.</p>
        </div>
        <a href="shop.html" class="btn btn-accent btn-lg">Shop Now</a>
      </div>
    </div>
    
    <div class="footer-grid">
      <div class="footer-about">
        <div class="footer-logo">
          <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
          <span class="footer-logo-text">Ash Meganab</span>
        </div>
        <p>Your trusted source for premium natural herbal supplements. We believe in the healing power of nature and are committed to your wellness journey.</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html" class="footer-link">Home</a></li>
          <li><a href="shop.html" class="footer-link">Shop</a></li>
          <li><a href="about.html" class="footer-link">About Us</a></li>
          <li><a href="blog.html" class="footer-link">Blog</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="shop.html?category=cardionab" class="footer-link">CardioNab</a></li>
          <li><a href="shop.html?category=dianab" class="footer-link">DiaoNab</a></li>
          <li><a href="shop.html?category=prostanab" class="footer-link">ProstaNab</a></li>
          <li><a href="shop.html?category=nabdol" class="footer-link">Nabdol</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your email address">
          <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
        <p class="newsletter-note">Get 10% off your first order!</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 Ash Meganab. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <a href="#" class="footer-legal-link">Cookie Policy</a>
          <a href="#" class="footer-legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Quick View Modal -->
  <div class="modal-overlay" id="quick-view-modal">
    <div class="modal-content" style="position: relative; max-width: 900px;">
      <button class="modal-close" aria-label="Close Modal">&times;</button>
      <div class="quick-view-grid">
        <div class="quick-view-image">
          <img src="" alt="Product Image">
        </div>
        <div class="quick-view-details">
          <span class="product-category"></span>
          <h2></h2>
          <span class="quick-view-price"></span>
          <p class="quick-view-description"></p>
          <form class="quick-view-form">
            <div class="quantity-selector">
              <label>Quantity:</label>
              <div class="quantity-input">
                <button type="button">-</button>
                <input type="number" value="1" min="1">
                <button type="button">+</button>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg add-to-cart-btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <!-- JavaScript -->
  <script type="module" src="Assets/JS/main.js"></script>
  <script>
    // Testimonials data inline for immediate rendering
    const testimonials = [
      { name: 'Kofi Mensah', role: 'Verified Customer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', rating: 5, content: 'CardioNab has been amazing for my heart health. I feel more energetic and my doctor has noticed improvements in my last checkup. Highly recommended!', location: 'Accra, Ghana' },
      { name: 'Ama Osei', role: 'Verified Customer', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop', rating: 5, content: 'DiaoNab Blood Sugar Balance has helped me maintain healthy levels naturally. Finally found a product that works for me!', location: 'Kumasi, Ghana' },
      { name: 'Yaw Asante', role: 'Verified Customer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', rating: 5, content: 'ProstaNab Prostate Health Complex is excellent. Quality product with noticeable results. Great customer service from Ash Meganab!', location: 'Takoradi, Ghana' },
      { name: 'Adjoa Nkrumah', role: 'Verified Customer', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop', rating: 5, content: 'Nabdol Pain Relief Complex is amazing! Finally found natural relief for my joint pain. Life-changing product for me and my family!', location: 'Tema, Ghana' }
    ];
    
    // Product prices
    const productPrices = {
      'cardionab': { price: 690.00, name: 'CardioNab Heart Support Formula' },
      'dianab': { price: 720.00, name: 'DiaoNab Blood Sugar Balance' },
      'prostanab': { price: 750.00, name: 'ProstaNab Prostate Health Complex' },
      'nabdol': { price: 495.00, name: 'Nabdol Pain Relief Complex' }
    };
    
    // Render testimonials
    document.addEventListener('DOMContentLoaded', function() {
      const track = document.getElementById('testimonials-track');
      const dotsContainer = document.getElementById('testimonial-dots');
      
      if (track && testimonials.length) {
        track.innerHTML = testimonials.map(t => `
          <div class="testimonial-card">
            <p class="testimonial-content">${t.content}</p>
            <div class="testimonial-author">
              <img src="${t.image}" alt="${t.name}" class="testimonial-avatar">
              <h4 class="testimonial-name">${t.name}</h4>
              <span class="testimonial-role">${t.role}</span>
              <div class="testimonial-rating">
                ${'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#c9a227"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'.repeat(t.rating)}
              </div>
            </div>
          </div>
        `).join('');
      }
      
      if (dotsContainer) {
        dotsContainer.innerHTML = testimonials.map((_, i) => `<div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');
      }
      
      // Initialize mini quick order forms
      initMiniQuickOrderForms();
    });
    
    // Initialize mini quick order forms
    function initMiniQuickOrderForms() {
      const forms = document.querySelectorAll('.mini-quick-order-form');
      
      forms.forEach(form => {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const name = form.querySelector('input[name="name"]').value.trim();
          const phone = form.querySelector('input[name="phone"]').value.trim();
          const productKey = form.querySelector('select[name="product"]').value;
          
          if (!name || !phone || !productKey) {
            alert('Please fill in all required fields.');
            return;
          }
          
          const product = productPrices[productKey];
          
          const orderData = {
            product: {
              id: productKey,
              name: product.name,
              price: product.price,
              category: productKey.charAt(0).toUpperCase() + productKey.slice(1),
              image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop'
            },
            quantity: 1,
            customer: { name, phone }
          };
          
          localStorage.setItem('quickOrder', JSON.stringify(orderData));
          alert('Order prepared! Redirecting to checkout...');
          window.location.href = 'checkout.html';
        });
      });
    }
    
    // Close ad banner
    document.querySelector('.ad-banner-close')?.addEventListener('click', function() {
      this.closest('.ad-banner').style.display = 'none';
    });
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Shop Ash Meganab's natural herbal supplements - CardioNab, DiaoNab, ProstaNab, and Nabdol for your health and wellness needs.">
  <title>Shop | Ash Meganab - Natural Herbal Solutions</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="Assets/Images/ashmeganablogo.PNG">
  
  <link rel="stylesheet" href="Assets/CSS/main.css">
  <style>
    /* Mini Quick Order Card Styles */
    .mini-quick-order-card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--spacing-lg);
      height: fit-content;
    }
    
    .mini-quick-order-card h3 {
      font-family: var(--font-secondary);
      font-size: var(--font-size-lg);
      color: var(--color-gray-800);
      margin-bottom: var(--spacing-md);
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }
    
    .mini-quick-order-card h3 svg {
      width: 20px;
      height: 20px;
      color: var(--color-primary);
    }
    
    .mini-quick-order-form .form-group {
      margin-bottom: var(--spacing-sm);
    }
    
    .mini-quick-order-form .form-group input,
    .mini-quick-order-form .form-group select {
      width: 100%;
      padding: var(--spacing-sm);
      border: 1px solid var(--color-gray-300);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
    }
    
    .mini-quick-order-form .form-group input:focus,
    .mini-quick-order-form .form-group select:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    
    .mini-quick-order-btn {
      width: 100%;
      padding: var(--spacing-sm);
      margin-top: var(--spacing-sm);
    }
    
    /* Shop layout with mini quick order sidebar */
    .shop-with-quick-order {
      display: grid;
      grid-template-columns: 280px 1fr 280px;
      gap: var(--spacing-xl);
      padding: var(--spacing-3xl) 0;
      align-items: start;
    }
    
    @media (max-width: 1200px) {
      .shop-with-quick-order {
        grid-template-columns: 1fr;
      }
      
      .shop-sidebar {
        position: static;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-lg);
      }
      
      .mini-quick-order-card {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .shop-sidebar {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
        <span>Ash Meganab</span>
      </a>
      
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="shop.html" class="nav-link active">Shop</a>
        <div class="nav-item nav-item-has-children">
          <a href="shop.html" class="nav-link">Categories</a>
          <div class="nav-dropdown">
            <a href="shop.html?category=cardionab" class="nav-dropdown-item">CardioNab</a>
            <a href="shop.html?category=dianab" class="nav-dropdown-item">DiaoNab</a>
            <a href="shop.html?category=prostanab" class="nav-dropdown-item">ProstaNab</a>
            <a href="shop.html?category=nabdol" class="nav-dropdown-item">Nabdol</a>
          </div>
        </div>
        <a href="about.html" class="nav-link">About</a>
        <a href="blog.html" class="nav-link">Blog</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      
      <div class="header-actions">
        <div class="search-container">
          <form class="search-form">
            <input type="text" class="search-input" placeholder="Search products..." aria-label="Search">
            <button type="submit" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div class="search-results"></div>
        </div>
        
        <a href="checkout.html" class="cart-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">0</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  
  <div class="mobile-menu-overlay"></div>
  
  <!-- Mini Cart Drawer -->
  <div class="cart-overlay"></div>
  <aside class="cart-drawer">
    <div class="cart-header">
      <h3>Shopping Cart</h3>
      <button class="cart-close-btn" aria-label="Close Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="cart-items-container">
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started!</p>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-value">₵0.00</span>
      </div>
      <p class="cart-shipping-note">Shipping calculated at checkout</p>
      <div class="cart-buttons">
        <a href="checkout.html" class="btn btn-secondary cart-btn-secondary">View Cart</a>
        <a href="checkout.html" class="btn btn-primary cart-btn-primary">Checkout</a>
      </div>
    </div>
  </aside>
  
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-content">
      <h1>Shop Our Products</h1>
      <p>Discover premium natural herbal supplements for your wellness journey</p>
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span>Shop</span>
      </div>
    </div>
  </section>
  
  <!-- Shop Section with Mini Quick Order -->
  <section class="container">
    <div class="shop-with-quick-order">
      <!-- Sidebar Filters -->
      <aside class="shop-sidebar">
        <div class="filter-section">
          <h4>Search</h4>
          <div class="search-widget">
            <input type="text" id="shop-search" placeholder="Search products...">
          </div>
          <div id="shop-search-results"></div>
        </div>
        
        <div class="filter-section">
          <h4>Categories</h4>
          <div class="filter-list">
            <label class="filter-item">
              <input type="checkbox" value="cardionab">
              <span>CardioNab (4)</span>
            </label>
            <label class="filter-item">
              <input type="checkbox" value="dianab">
              <span>DiaoNab (4)</span>
            </label>
            <label class="filter-item">
              <input type="checkbox" value="prostanab">
              <span>ProstaNab (4)</span>
            </label>
            <label class="filter-item">
              <input type="checkbox" value="nabdol">
              <span>Nabdol (4)</span>
            </label>
          </div>
        </div>
        
        <div class="filter-section">
          <h4>Price Range</h4>
          <input type="range" class="filter-price-slider" min="0" max="1200" value="900" step="50">
          <div class="price-range">
            <span>GH₵0</span>
            <span class="price-max">GH₵900</span>
          </div>
        </div>
      </aside>
      
      <!-- Products Grid -->
      <div class="shop-main">
        <div class="shop-controls">
          <div class="shop-results">
            <span class="shop-results-count">Showing 16 products</span>
          </div>
          <div class="shop-sort">
            <label for="sort-select">Sort by:</label>
            <select id="sort-select">
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rating</option>
              <option value="newest">Newest</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
          <div class="shop-view-toggle">
            <button class="view-btn active" data-view="grid" aria-label="Grid View">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button class="view-btn" data-view="list" aria-label="List View">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="products-grid" id="shop-products-grid"></div>
      </div>
      
      <!-- Mini Quick Order Card -->
      <div class="mini-quick-order-card">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Quick Order
        </h3>
        <form class="mini-quick-order-form" id="mini-quick-order-form-shop">
          <div class="form-group">
            <input type="text" id="mini-name-shop" name="name" placeholder="Full Name" required>
          </div>
          <div class="form-group">
            <input type="tel" id="mini-phone-shop" name="phone" placeholder="Phone Number" required>
          </div>
          <div class="form-group">
            <select id="mini-product-shop" name="product" required>
              <option value="">Select Product</option>
              <option value="cardionab">CardioNab - ₵690</option>
              <option value="dianab">DiaoNab - ₵720</option>
              <option value="prostanab">ProstaNab - ₵750</option>
              <option value="nabdol">Nabdol - ₵495</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary mini-quick-order-btn">Place Order</button>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Newsletter Section -->
  <section class="newsletter-section">
    <div class="container">
      <div class="newsletter-container">
        <h2>Join Our Wellness Community</h2>
        <p>Subscribe to receive health tips, exclusive offers, and updates on new products</p>
        <form class="newsletter-form-inline" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-cta">
      <div class="footer-cta-content">
        <div class="footer-cta-text">
          <h3>Ready to Start Your Wellness Journey?</h3>
          <p>Explore our range of natural herbal supplements and find the perfect solution for your health needs.</p>
        </div>
        <a href="shop.html" class="btn btn-accent btn-lg">Shop Now</a>
      </div>
    </div>
    
    <div class="footer-grid">
      <div class="footer-about">
        <div class="footer-logo">
          <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
          <span class="footer-logo-text">Ash Meganab</span>
        </div>
        <p>Your trusted source for premium natural herbal supplements. We believe in the healing power of nature and are committed to your wellness journey.</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html" class="footer-link">Home</a></li>
          <li><a href="shop.html" class="footer-link">Shop</a></li>
          <li><a href="about.html" class="footer-link">About Us</a></li>
          <li><a href="blog.html" class="footer-link">Blog</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="shop.html?category=cardionab" class="footer-link">CardioNab</a></li>
          <li><a href="shop.html?category=dianab" class="footer-link">DiaoNab</a></li>
          <li><a href="shop.html?category=prostanab" class="footer-link">ProstaNab</a></li>
          <li><a href="shop.html?category=nabdol" class="footer-link">Nabdol</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your email address">
          <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
        <p class="newsletter-note">Get 10% off your first order!</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 Ash Meganab. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <a href="#" class="footer-legal-link">Cookie Policy</a>
          <a href="#" class="footer-legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Quick View Modal -->
  <div class="modal-overlay" id="quick-view-modal">
    <div class="modal-content" style="position: relative; max-width: 900px;">
      <button class="modal-close" aria-label="Close Modal">&times;</button>
      <div class="quick-view-grid">
        <div class="quick-view-image">
          <img src="" alt="Product Image">
        </div>
        <div class="quick-view-details">
          <span class="product-category"></span>
          <h2></h2>
          <span class="quick-view-price"></span>
          <p class="quick-view-description"></p>
          <form class="quick-view-form">
            <div class="quantity-selector">
              <label>Quantity:</label>
              <div class="quantity-input">
                <button type="button">-</button>
                <input type="number" value="1" min="1">
                <button type="button">+</button>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg add-to-cart-btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <!-- JavaScript -->
  <script type="module" src="Assets/JS/main.js"></script>
  <script>
    // Product prices
    const productPrices = {
      'cardionab': { price: 690.00, name: 'CardioNab Heart Support Formula' },
      'dianab': { price: 720.00, name: 'DiaoNab Blood Sugar Balance' },
      'prostanab': { price: 750.00, name: 'ProstaNab Prostate Health Complex' },
      'nabdol': { price: 495.00, name: 'Nabdol Pain Relief Complex' }
    };
    
    // Initialize mini quick order form on shop page
    document.addEventListener('DOMContentLoaded', function() {
      const shopQuickOrderForm = document.getElementById('mini-quick-order-form-shop');
      
      if (shopQuickOrderForm) {
        shopQuickOrderForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const name = shopQuickOrderForm.querySelector('input[name="name"]').value.trim();
          const phone = shopQuickOrderForm.querySelector('input[name="phone"]').value.trim();
          const productKey = shopQuickOrderForm.querySelector('select[name="product"]').value;
          
          if (!name || !phone || !productKey) {
            alert('Please fill in all required fields.');
            return;
          }
          
          const product = productPrices[productKey];
          
          const orderData = {
            product: {
              id: productKey,
              name: product.name,
              price: product.price,
              category: productKey.charAt(0).toUpperCase() + productKey.slice(1),
              image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop'
            },
            quantity: 1,
            customer: { name, phone }
          };
          
          localStorage.setItem('quickOrder', JSON.stringify(orderData));
          alert('Order prepared! Redirecting to checkout...');
          window.location.href = 'checkout.html';
        });
      }
    });
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete your purchase at Ash Meganab - Secure checkout for natural herbal supplements">
  <title>Checkout | Ash Meganab - Natural Herbal Solutions</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="Assets/Images/ashmeganablogo.PNG">
  
<link rel="stylesheet" href="Assets/CSS/main.css">
  <style>
    .checkout-layout { display: grid; grid-template-columns: 1fr 400px; gap: 2rem; padding: 3rem 0; }
    .checkout-form h2 { font-family: var(--font-secondary); font-size: 1.5rem; margin-bottom: 1rem; }
    .checkout-section { background: var(--color-white); border-radius: 12px; box-shadow: var(--shadow-md); padding: 1.5rem; margin-bottom: 1.5rem; }
    .checkout-section h3 { font-family: var(--font-primary); font-size: 1.125rem; font-weight: 600; color: var(--color-gray-800); margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--color-gray-200); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: var(--color-gray-700); margin-bottom: 0.25rem; }
    .form-group label .required { color: var(--color-error); }
    .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid var(--color-gray-300); border-radius: 8px; font-size: 1rem; color: var(--color-gray-800); transition: all 0.2s; }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.1); }
    .form-group .error-message { font-size: 0.75rem; color: var(--color-error); margin-top: 0.25rem; display: none; }
    .form-group.error input, .form-group.error select { border-color: var(--color-error); }
    .form-group.error .error-message { display: block; }
    
    /* Single Product Order Summary */
    .order-summary { background: var(--color-white); border-radius: 12px; box-shadow: var(--shadow-md); padding: 1.5rem; height: fit-content; position: sticky; top: 100px; }
    .order-summary h3 { font-family: var(--font-secondary); font-size: 1.25rem; margin-bottom: 1rem; }
    
    /* Single Product Display */
    .single-product-display { display: flex; gap: 1rem; padding: 1rem; background: var(--color-gray-50); border-radius: 8px; margin-bottom: 1rem; }
    .single-product-image { width: 80px; height: 80px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
    .single-product-image img { width: 100%; height: 100%; object-fit: cover; }
    .single-product-info { flex: 1; }
    .single-product-info h4 { font-family: var(--font-primary); font-size: 0.875rem; font-weight: 600; color: var(--color-gray-800); margin-bottom: 0.25rem; }
    .single-product-category { font-size: 0.75rem; color: var(--color-gray-500); margin-bottom: 0.5rem; }
    .single-product-price { font-weight: 700; color: var(--color-primary); font-size: 1rem; }
    
    /* Quantity Controls */
    .quantity-controls { display: flex; align-items: center; gap: 0.75rem; margin: 1rem 0; }
    .quantity-controls label { font-size: 0.875rem; font-weight: 500; color: var(--color-gray-700); }
    .quantity-input { display: flex; align-items: center; border: 1px solid var(--color-gray-300); border-radius: 8px; overflow: hidden; }
    .quantity-input button { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 1.125rem; background: var(--color-gray-100); border: none; cursor: pointer; transition: all 0.2s; }
    .quantity-input button:hover { background: var(--color-gray-200); }
    .quantity-input input { width: 50px; height: 36px; border: none; text-align: center; font-size: 0.875rem; font-weight: 600; }
    .quantity-input input:focus { outline: none; }
    
    /* Order Totals */
    .order-totals { border-top: 1px solid var(--color-gray-200); padding-top: 1rem; margin-top: 1rem; }
    .order-row { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--color-gray-600); }
    .order-row.total { font-size: 1.125rem; font-weight: 700; color: var(--color-gray-900); margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--color-gray-200); }
    
    /* Clear Order Button */
    .clear-order-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; color: var(--color-error); background: none; border: 1px solid var(--color-error); border-radius: 6px; cursor: pointer; transition: all 0.2s; margin-bottom: 1rem; }
    .clear-order-btn:hover { background: var(--color-error); color: white; }
    
    /* Empty Cart Message */
    .empty-cart-message { text-align: center; padding: 3rem 1rem; }
    .empty-cart-message svg { width: 64px; height: 64px; color: var(--color-gray-400); margin-bottom: 1rem; }
    .empty-cart-message h3 { font-family: var(--font-secondary); font-size: 1.25rem; color: var(--color-gray-800); margin-bottom: 0.5rem; }
    .empty-cart-message p { color: var(--color-gray-500); margin-bottom: 1.5rem; }
    
    .payment-methods-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .payment-method { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border: 1px solid var(--color-gray-300); border-radius: 8px; cursor: pointer; transition: all 0.2s; }
    .payment-method:hover { border-color: var(--color-primary); }
    .payment-method input { accent-color: var(--color-primary); }
    .payment-method label { font-size: 0.875rem; color: var(--color-gray-700); cursor: pointer; }
    .place-order-btn { width: 100%; margin-top: 1.5rem; padding: 1rem; font-size: 1rem; }
    .country-display { padding: 0.75rem; background: var(--color-gray-100); border-radius: 8px; color: var(--color-gray-800); font-weight: 500; }
    
    @media (max-width: 992px) { .checkout-layout { grid-template-columns: 1fr; } .order-summary { position: static; } }
    @media (max-width: 768px) { .form-row { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
        <span>Ash Meganab</span>
      </a>
      
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="shop.html" class="nav-link">Shop</a>
        <div class="nav-item nav-item-has-children">
          <a href="shop.html" class="nav-link">Categories</a>
          <div class="nav-dropdown">
            <a href="shop.html?category=cardionab" class="nav-dropdown-item">CardioNab</a>
            <a href="shop.html?category=dianab" class="nav-dropdown-item">DiaoNab</a>
            <a href="shop.html?category=prostanab" class="nav-dropdown-item">ProstaNab</a>
            <a href="shop.html?category=nabdol" class="nav-dropdown-item">Nabdol</a>
          </div>
        </div>
        <a href="about.html" class="nav-link">About</a>
        <a href="blog.html" class="nav-link">Blog</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      
      <div class="header-actions">
        <a href="checkout.html" class="cart-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">0</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  
  <div class="mobile-menu-overlay"></div>
  
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-content">
      <h1>Checkout</h1>
      <p>Complete your order securely</p>
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="shop.html">Shop</a>
        <span>/</span>
        <span>Checkout</span>
      </div>
    </div>
  </section>
  
  <!-- Checkout Section -->
  <section class="container">
    <div class="checkout-layout">
      <!-- Order Form -->
      <form class="checkout-form" id="checkout-form">
        <!-- Customer Information -->
        <div class="checkout-section">
          <h3>Customer Information</h3>
          <div class="form-group">
            <label for="fullName">Full Name <span class="required">*</span></label>
            <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name">
            <span class="error-message">Full name is required</span>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="phone">Phone Number <span class="required">*</span></label>
              <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number">
              <span class="error-message">Phone number is required</span>
            </div>
            <div class="form-group">
              <label for="email">Email Address (Optional)</label>
              <input type="email" id="email" name="email" placeholder="Enter your email">
            </div>
          </div>
        </div>
        
        <!-- Delivery Information -->
        <div class="checkout-section">
          <h3>Delivery Information</h3>
          <div class="form-group">
            <label for="address">Delivery Address <span class="required">*</span></label>
            <input type="text" id="address" name="address" required placeholder="Enter your delivery address">
            <span class="error-message">Delivery address is required</span>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="city">City <span class="required">*</span></label>
              <input type="text" id="city" name="city" required placeholder="Enter your city">
              <span class="error-message">City is required</span>
            </div>
            <div class="form-group">
              <label for="notes">Additional Notes (Optional)</label>
              <textarea id="notes" name="notes" rows="2" placeholder="Any special delivery instructions..."></textarea>
            </div>
          </div>
          <div class="form-group">
            <label>Country</label>
            <div class="country-display">Ghana</div>
            <input type="hidden" id="country" name="country" value="Ghana">
          </div>
        </div>
        
        <!-- Payment Method (Payment on Delivery Only) -->
        <div class="checkout-section">
          <h3>Payment Method</h3>
          <div class="payment-info-box" style="background: var(--color-gray-50); padding: 1rem; border-radius: 8px; border: 1px solid var(--color-gray-200);">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <div>
                <p style="font-weight: 600; color: var(--color-gray-800); margin-bottom: 0.25rem;">Payment on Delivery</p>
                <p style="font-size: 0.875rem; color: var(--color-gray-600);">Pay when your order is delivered to your doorstep</p>
              </div>
            </div>
          </div>
          <input type="hidden" name="payment" value="delivery">
        </div>
        
        <!-- Order Notes -->
        <div class="checkout-section">
          <h3>Order Notes (Optional)</h3>
          <div class="form-group">
            <label for="orderNotes">Special Instructions</label>
            <textarea id="orderNotes" name="orderNotes" rows="3" placeholder="Any special instructions about your order..."></textarea>
          </div>
        </div>
      </form>
      
      <!-- Single Product Order Summary -->
      <aside class="order-summary">
        <h3>Your Order</h3>
        
        <!-- Empty State -->
        <div class="empty-cart-message" id="empty-cart-message" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <h3>No Product Selected</h3>
          <p>Go back to shop and select a product to place your order.</p>
          <a href="shop.html" class="btn btn-primary">Browse Products</a>
        </div>
        
        <!-- Single Product Display -->
        <div id="single-product-container">
          <button class="clear-order-btn" id="clear-order-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Clear Order
          </button>
          
          <div class="single-product-display" id="single-product-display">
            <div class="single-product-image">
              <img id="product-image" src="" alt="Product Image">
            </div>
            <div class="single-product-info">
              <h4 id="product-name">Product Name</h4>
              <p class="single-product-category" id="product-category">Category</p>
              <p class="single-product-price" id="product-price">₵0.00</p>
            </div>
          </div>
          
          <!-- Quantity Controls -->
          <div class="quantity-controls">
            <label>Quantity:</label>
            <div class="quantity-input">
              <button type="button" id="qty-decrement">-</button>
              <input type="number" id="product-quantity" value="1" min="1" max="10" readonly>
              <button type="button" id="qty-increment">+</button>
            </div>
          </div>
          
          <!-- Order Totals -->
          <div class="order-totals">
            <div class="order-row">
              <span>Unit Price</span>
              <span id="unit-price">₵0.00</span>
            </div>
            <div class="order-row">
              <span>Quantity</span>
              <span id="qty-display">1</span>
            </div>
            <div class="order-row">
              <span>Shipping</span>
              <span id="shipping-cost">₵0.00</span>
            </div>
            <div class="order-row total">
              <span>Total Amount</span>
              <span id="order-total">₵0.00</span>
            </div>
          </div>
        </div>
        
        <button type="submit" form="checkout-form" class="btn btn-primary place-order-btn">Place Order</button>
        <p style="font-size: 0.75rem; color: var(--color-gray-500); text-align: center; margin-top: 1rem;">Your personal data will be used to process your order and support your experience on our website.</p>
      </aside>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 Ash Meganab. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <a href="#" class="footer-legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- JavaScript -->
  <script type="module" src="Assets/JS/main.js"></script>
  <script>
    // Product prices for quick calculation
    const productPrices = {
      'cardionab': { price: 690.00, name: 'CardioNab Heart Support Formula' },
      'dianab': { price: 720.00, name: 'DiaoNab Blood Sugar Balance' },
      'prostanab': { price: 750.00, name: 'ProstaNab Prostate Health Complex' },
      'nabdol': { price: 495.00, name: 'Nabdol Pain Relief Complex' }
    };
    
    // Selected product data
    let selectedProduct = null;
    let quantity = 1;
    const shippingCost = 50.00; // Fixed shipping cost
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
      loadSelectedProduct();
      initQuantityControls();
      initClearOrder();
      initCheckoutForm();
    });
    
    // Load selected product from localStorage
    function loadSelectedProduct() {
      const stored = localStorage.getItem('selectedProduct');
      if (stored) {
        selectedProduct = JSON.parse(stored);
        displayProduct(selectedProduct);
      } else {
        showEmptyState();
      }
    }
    
    // Display the selected product
    function displayProduct(product) {
      document.getElementById('empty-cart-message').style.display = 'none';
      document.getElementById('single-product-container').style.display = 'block';
      
      document.getElementById('product-image').src = product.image || 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&h=400&fit=crop';
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-category').textContent = product.category;
      document.getElementById('product-price').textContent = '₵' + product.price.toFixed(2);
      document.getElementById('unit-price').textContent = '₵' + product.price.toFixed(2);
      
      quantity = 1;
      document.getElementById('product-quantity').value = quantity;
      document.getElementById('qty-display').textContent = quantity;
      
      updateTotals();
    }
    
    // Show empty state when no product selected
    function showEmptyState() {
      document.getElementById('empty-cart-message').style.display = 'block';
      document.getElementById('single-product-container').style.display = 'none';
    }
    
    // Initialize quantity controls
    function initQuantityControls() {
      const decrementBtn = document.getElementById('qty-decrement');
      const incrementBtn = document.getElementById('qty-increment');
      const quantityInput = document.getElementById('product-quantity');
      
      decrementBtn?.addEventListener('click', function() {
        if (selectedProduct && quantity > 1) {
          quantity--;
          quantityInput.value = quantity;
          document.getElementById('qty-display').textContent = quantity;
          updateTotals();
        }
      });
      
      incrementBtn?.addEventListener('click', function() {
        if (selectedProduct && quantity < 10) {
          quantity++;
          quantityInput.value = quantity;
          document.getElementById('qty-display').textContent = quantity;
          updateTotals();
        }
      });
    }
    
    // Calculate and update totals
    function updateTotals() {
      if (!selectedProduct) return;
      
      const subtotal = selectedProduct.price * quantity;
      const total = subtotal + shippingCost;
      
      document.getElementById('shipping-cost').textContent = '₵' + shippingCost.toFixed(2);
      document.getElementById('order-total').textContent = '₵' + total.toFixed(2);
    }
    
    // Initialize clear order button
    function initClearOrder() {
      document.getElementById('clear-order-btn')?.addEventListener('click', function() {
        localStorage.removeItem('selectedProduct');
        selectedProduct = null;
        showEmptyState();
      });
    }
    
    // Initialize checkout form
    function initCheckoutForm() {
      const form = document.getElementById('checkout-form');
      
      form?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!selectedProduct) {
          alert('Please select a product from the shop first.');
          window.location.href = 'shop.html';
          return;
        }
        
        // Validate required fields
        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        
        if (!fullName || !phone || !address || !city) {
          alert('Please fill in all required fields.');
          return;
        }
        
        // Collect order data
        const orderData = {
          product: selectedProduct,
          quantity: quantity,
          unitPrice: selectedProduct.price,
          subtotal: selectedProduct.price * quantity,
          shipping: shippingCost,
          total: (selectedProduct.price * quantity) + shippingCost,
          customer: {
            fullName: fullName,
            phone: phone,
            email: document.getElementById('email').value.trim(),
            address: address,
            city: city,
            notes: document.getElementById('notes').value.trim(),
            country: 'Ghana'
          },
          paymentMethod: document.querySelector('input[name="payment"]:checked')?.value || 'mobilemoney',
          orderNotes: document.getElementById('orderNotes').value.trim(),
          orderDate: new Date().toISOString()
        };
        
        // Show success message
        showOrderConfirmation(orderData);
      });
    }
    
    // Show order confirmation
    function showOrderConfirmation(orderData) {
      const layout = document.querySelector('.checkout-layout');
      const total = orderData.total.toFixed(2);
      
      layout.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; max-width: 600px; margin: 0 auto;">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 2rem;">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 10 11 15 8 12"></polyline>
          </svg>
          <h2 style="font-family: var(--font-secondary); font-size: 2rem; margin-bottom: 1rem;">Order Confirmed!</h2>
          <p style="color: #6c757d; margin-bottom: 1.5rem;">Thank you for your order, ${orderData.customer.fullName}!</p>
          <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
            <p style="margin-bottom: 0.5rem;"><strong>Order Total:</strong> ₵${total}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Product:</strong> ${orderData.product.name}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Quantity:</strong> ${orderData.quantity}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Delivery:</strong> ${orderData.customer.address}, ${orderData.customer.city}</p>
            <p style="margin-bottom: 0;"><strong>Phone:</strong> ${orderData.customer.phone}</p>
          </div>
          <p style="color: #6c757d; margin-bottom: 2rem;">We will contact you shortly to confirm your order and arrange delivery.</p>
          <a href="index.html" class="btn btn-primary">Continue Shopping</a>
        </div>
      `;
      
      // Clear localStorage
      localStorage.removeItem('selectedProduct');
    }
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn about Ash Meganab - our mission, vision, and commitment to providing natural herbal supplements for your health and wellness.">
  <title>About Us | Ash Meganab - Natural Herbal Solutions</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="Assets/Images/ashmeganablogo.PNG">
  
  <link rel="stylesheet" href="Assets/CSS/main.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
        <span>Ash Meganab</span>
      </a>
      
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="shop.html" class="nav-link">Shop</a>
        <div class="nav-item nav-item-has-children">
          <a href="shop.html" class="nav-link">Categories</a>
          <div class="nav-dropdown">
            <a href="shop.html?category=cardionab" class="nav-dropdown-item">CardioNab</a>
            <a href="shop.html?category=dianab" class="nav-dropdown-item">DiaoNab</a>
            <a href="shop.html?category=prostanab" class="nav-dropdown-item">ProstaNab</a>
            <a href="shop.html?category=nabdol" class="nav-dropdown-item">Nabdol</a>
          </div>
        </div>
        <a href="about.html" class="nav-link active">About</a>
        <a href="blog.html" class="nav-link">Blog</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      
      <div class="header-actions">
        <div class="search-container">
          <form class="search-form">
            <input type="text" class="search-input" placeholder="Search products..." aria-label="Search">
            <button type="submit" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div class="search-results"></div>
        </div>
        
        <a href="cart.html" class="cart-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">0</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  
  <div class="mobile-menu-overlay"></div>
  
  <!-- Mini Cart Drawer -->
  <div class="cart-overlay"></div>
  <aside class="cart-drawer">
    <div class="cart-header">
      <h3>Shopping Cart</h3>
      <button class="cart-close-btn" aria-label="Close Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="cart-items-container">
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started!</p>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-value">$0.00</span>
      </div>
      <p class="cart-shipping-note">Shipping calculated at checkout</p>
      <div class="cart-buttons">
        <a href="cart.html" class="btn btn-secondary cart-btn-secondary">View Cart</a>
        <a href="checkout.html" class="btn btn-primary cart-btn-primary">Checkout</a>
      </div>
    </div>
  </aside>
  
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-content">
      <h1>About Us</h1>
      <p>Discover our story and commitment to natural wellness</p>
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span>About Us</span>
      </div>
    </div>
  </section>
  
  <!-- About Hero -->
  <section class="container">
    <div class="about-hero">
      <div class="about-hero-content">
        <h2>Our Story: Rooted in Nature, Guided by Science</h2>
        <p>At Ash Meganab, we believe that nature holds the key to optimal health and wellness. Founded with a vision to make premium herbal supplements accessible to everyone, we've spent years researching and formulating the most effective natural solutions.</p>
        <p>Our journey began with a simple question: How can we combine ancient herbal wisdom with modern scientific research to create supplements that truly make a difference?</p>
        <p>Today, Ash Meganab stands as a trusted name in natural health, serving thousands of customers worldwide who share our belief in the healing power of nature.</p>
        <a href="shop.html" class="btn btn-primary">Explore Our Products</a>
      </div>
      <div class="about-hero-image">
        <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop" alt="Natural herbal supplements">
      </div>
    </div>
    
    <div class="about-stats">
      <div class="stat-item">
        <div class="stat-number">500K+</div>
        <div class="stat-label">Happy Customers</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">Premium Products</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">15+</div>
        <div class="stat-label">Years of Experience</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">99%</div>
        <div class="stat-label">Customer Satisfaction</div>
      </div>
    </div>
  </section>
  
  <!-- Mission & Vision -->
  <section class="mission-vision-section">
    <div class="container">
      <div class="mv-grid">
        <div class="mv-card">
          <h3>Our Mission</h3>
          <p>To improve lives through the power of natural herbs by providing premium quality supplements that are scientifically formulated, ethically sourced, and accessible to all. We are committed to helping our customers achieve optimal health and wellness through natural means.</p>
        </div>
        <div class="mv-card">
          <h3>Our Vision</h3>
          <p>To be the world's most trusted name in natural herbal supplements, leading the industry in quality, innovation, and customer education. We envision a world where natural health solutions are the first choice for wellness-conscious individuals everywhere.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Quality Assurance -->
  <section class="quality-section">
    <div class="container">
      <h2 class="section-title">Our Quality Commitment</h2>
      <p class="section-subtitle">Every product we create meets the highest standards of quality and safety</p>
      <div class="quality-grid">
        <div class="quality-card">
          <div class="quality-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>Third-Party Tested</h3>
          <p>All our products undergo rigorous testing by independent laboratories to ensure purity, potency, and safety.</p>
        </div>
        <div class="quality-card">
          <div class="quality-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h3>GMP Certified</h3>
          <p>Our manufacturing facilities follow Good Manufacturing Practices, ensuring consistent quality in every batch.</p>
        </div>
        <div class="quality-card">
          <div class="quality-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>Organic Sourcing</h3>
          <p>We source our herbs from certified organic farms that follow sustainable agricultural practices.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="newsletter-section">
    <div class="container">
      <div class="newsletter-container">
        <h2>Ready to Experience Natural Wellness?</h2>
        <p>Join thousands of satisfied customers who have transformed their health with Ash Meganab supplements</p>
        <a href="shop.html" class="btn btn-accent btn-lg">Shop Now</a>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-cta">
      <div class="footer-cta-content">
        <div class="footer-cta-text">
          <h3>Ready to Start Your Wellness Journey?</h3>
          <p>Explore our range of natural herbal supplements and find the perfect solution for your health needs.</p>
        </div>
        <a href="shop.html" class="btn btn-accent btn-lg">Shop Now</a>
      </div>
    </div>
    
    <div class="footer-grid">
      <div class="footer-about">
        <div class="footer-logo">
          <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
          <span class="footer-logo-text">Ash Meganab</span>
        </div>
        <p>Your trusted source for premium natural herbal supplements. We believe in the healing power of nature and are committed to your wellness journey.</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html" class="footer-link">Home</a></li>
          <li><a href="shop.html" class="footer-link">Shop</a></li>
          <li><a href="about.html" class="footer-link">About Us</a></li>
          <li><a href="blog.html" class="footer-link">Blog</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="shop.html?category=cardionab" class="footer-link">CardioNab</a></li>
          <li><a href="shop.html?category=dianab" class="footer-link">DiaoNab</a></li>
          <li><a href="shop.html?category=prostanab" class="footer-link">ProstaNab</a></li>
          <li><a href="shop.html?category=nabdol" class="footer-link">Nabdol</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Customer Support</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">FAQs</a></li>
          <li><a href="#" class="footer-link">Shipping Info</a></li>
          <li><a href="#" class="footer-link">Returns Policy</a></li>
          <li><a href="#" class="footer-link">Track Order</a></li>
          <li><a href="contact.html" class="footer-link">Contact Us</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your email address">
          <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
        <p class="newsletter-note">Get 10% off your first order!</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 Ash Meganab. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <a href="#" class="footer-legal-link">Cookie Policy</a>
          <a href="#" class="footer-legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- JavaScript -->
  <script type="module" src="Assets/JS/main.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Read the latest articles on natural health, herbal remedies, and wellness tips from Ash Meganab's experts.">
  <title>Blog | Ash Meganab - Natural Herbal Solutions</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="Assets/Images/ashmeganablogo.PNG">
  
  <link rel="stylesheet" href="Assets/CSS/main.css">
  <style>
    .blog-layout { display: grid; grid-template-columns: 1fr 320px; gap: 2rem; padding: 3rem 0; }
    .blog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
    .blog-sidebar { position: sticky; top: 100px; height: fit-content; }
    .sidebar-widget { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #e9ecef; }
    .sidebar-widget:last-child { border-bottom: none; }
    .sidebar-widget h4 { font-family: var(--font-primary); font-size: 1rem; font-weight: 600; color: var(--color-gray-800); margin-bottom: 1rem; }
    .search-widget input { width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 8px; font-size: 0.875rem; }
    .search-widget input:focus { outline: none; border-color: var(--color-primary); }
    .category-widget li { margin-bottom: 0.5rem; }
    .category-widget a { display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--color-gray-600); }
    .category-widget a:hover { color: var(--color-primary); }
    .category-widget span { color: var(--color-gray-400); }
    .recent-post-item { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .recent-post-item:last-child { margin-bottom: 0; }
    .recent-post-thumb { width: 70px; height: 70px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
    .recent-post-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .recent-post-info h5 { font-family: var(--font-primary); font-size: 0.875rem; font-weight: 500; color: var(--color-gray-800); margin-bottom: 0.25rem; }
    .recent-post-info span { font-size: 0.75rem; color: var(--color-gray-500); }
    @media (max-width: 992px) { .blog-layout { grid-template-columns: 1fr; } .blog-sidebar { position: static; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } }
    @media (max-width: 768px) { .blog-sidebar { grid-template-columns: 1fr; } .blog-grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
        <span>Ash Meganab</span>
      </a>
      
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="shop.html" class="nav-link">Shop</a>
        <div class="nav-item nav-item-has-children">
          <a href="shop.html" class="nav-link">Categories</a>
          <div class="nav-dropdown">
            <a href="shop.html?category=cardionab" class="nav-dropdown-item">CardioNab</a>
            <a href="shop.html?category=dianab" class="nav-dropdown-item">DiaoNab</a>
            <a href="shop.html?category=prostanab" class="nav-dropdown-item">ProstaNab</a>
            <a href="shop.html?category=nabdol" class="nav-dropdown-item">Nabdol</a>
          </div>
        </div>
        <a href="about.html" class="nav-link">About</a>
        <a href="blog.html" class="nav-link active">Blog</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      
      <div class="header-actions">
        <button class="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  
  <div class="mobile-menu-overlay"></div>
  
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-content">
      <h1>Our Blog</h1>
      <p>Latest articles on natural health and wellness</p>
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span>Blog</span>
      </div>
    </div>
  </section>
  
  <!-- Blog Section -->
  <section class="container">
    <div class="blog-layout">
      <div class="blog-grid" id="blog-grid"></div>
      
      <aside class="blog-sidebar">
        <div class="sidebar-widget">
          <h4>Search</h4>
          <div class="search-widget">
            <input type="text" placeholder="Search articles...">
          </div>
        </div>
        
        <div class="sidebar-widget">
          <h4>Categories</h4>
          <ul class="category-widget">
            <li><a href="#">Health Tips <span>(12)</span></a></li>
            <li><a href="#">Wellness <span>(8)</span></a></li>
            <li><a href="#">Men's Health <span>(5)</span></a></li>
            <li><a href="#">Pain Relief <span>(4)</span></a></li>
            <li><a href="#">Education <span>(6)</span></a></li>
          </ul>
        </div>
        
        <div class="sidebar-widget">
          <h4>Recent Posts</h4>
          <div class="recent-post-item">
            <div class="recent-post-thumb">
              <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=100&h=100&fit=crop" alt="Recent Post">
            </div>
            <div class="recent-post-info">
              <h5>The Benefits of Natural Herbs for Heart Health</h5>
              <span>Jan 15, 2026</span>
            </div>
          </div>
          <div class="recent-post-item">
            <div class="recent-post-thumb">
              <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=100&h=100&fit=crop" alt="Recent Post">
            </div>
            <div class="recent-post-info">
              <h5>Managing Blood Sugar Naturally</h5>
              <span>Jan 12, 2026</span>
            </div>
          </div>
          <div class="recent-post-item">
            <div class="recent-post-thumb">
              <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&h=100&fit=crop" alt="Recent Post">
            </div>
            <div class="recent-post-info">
              <h5>Understanding Prostate Health</h5>
              <span>Jan 10, 2026</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
  
  <!-- Newsletter Section -->
  <section class="newsletter-section">
    <div class="container">
      <div class="newsletter-container">
        <h2>Join Our Wellness Community</h2>
        <p>Subscribe to receive health tips and exclusive offers</p>
        <form class="newsletter-form-inline" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-cta">
      <div class="footer-cta-content">
        <div class="footer-cta-text">
          <h3>Ready to Start Your Wellness Journey?</h3>
          <p>Explore our range of natural herbal supplements.</p>
        </div>
        <a href="shop.html" class="btn btn-accent btn-lg">Shop Now</a>
      </div>
    </div>
    
    <div class="footer-grid">
      <div class="footer-about">
        <div class="footer-logo">
          <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
          <span class="footer-logo-text">Ash Meganab</span>
        </div>
        <p>Your trusted source for premium natural herbal supplements.</p>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html" class="footer-link">Home</a></li>
          <li><a href="shop.html" class="footer-link">Shop</a></li>
          <li><a href="about.html" class="footer-link">About Us</a></li>
          <li><a href="blog.html" class="footer-link">Blog</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="shop.html?category=cardionab" class="footer-link">CardioNab</a></li>
          <li><a href="shop.html?category=dianab" class="footer-link">DiaoNab</a></li>
          <li><a href="shop.html?category=prostanab" class="footer-link">ProstaNab</a></li>
          <li><a href="shop.html?category=nabdol" class="footer-link">Nabdol</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Customer Support</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">FAQs</a></li>
          <li><a href="#" class="footer-link">Shipping Info</a></li>
          <li><a href="#" class="footer-link">Returns Policy</a></li>
          <li><a href="contact.html" class="footer-link">Contact Us</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your email address">
          <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 Ash Meganab. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <a href="#" class="footer-legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- JavaScript -->
  <script type="module" src="Assets/JS/main.js"></script>
  <script>
    const blogPosts = [
      { id: 1, title: 'The Benefits of Natural Herbs for Heart Health', excerpt: 'Discover how natural herbs can support cardiovascular health and what the latest research says about herbal remedies.', category: 'Health Tips', author: 'Dr. Sarah Mitchell', date: '2026-01-15', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop', readTime: '5 min read' },
      { id: 2, title: 'Managing Blood Sugar Naturally: A Complete Guide', excerpt: 'Learn about natural approaches to blood sugar management and how to incorporate them into your daily routine.', category: 'Wellness', author: 'Michael Chen', date: '2026-01-12', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop', readTime: '7 min read' },
      { id: 3, title: 'Understanding Prostate Health: What Every Man Should Know', excerpt: 'Important information about prostate health and natural supplements that can support optimal function.', category: "Men's Health", author: 'Dr. James Wilson', date: '2026-01-10', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop', readTime: '6 min read' },
      { id: 4, title: 'Natural Approaches to Pain Management', excerpt: 'Explore natural alternatives for managing chronic pain and improving quality of life.', category: 'Pain Relief', author: 'Dr. Emily Roberts', date: '2026-01-08', image: 'https://images.unsplash.com/photo-1550572017-4e6c8c9f8e0c?w=600&h=400&fit=crop', readTime: '8 min read' },
      { id: 5, title: 'The Science Behind Herbal Supplements', excerpt: 'Understanding how herbal supplements work and what to look for when choosing quality products.', category: 'Education', author: 'Dr. Robert Hayes', date: '2026-01-05', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop', readTime: '6 min read' },
      { id: 6, title: 'Holistic Approaches to Joint Health', excerpt: 'Comprehensive strategies for maintaining healthy joints and mobility as we age.', category: 'Wellness', author: 'Dr. Lisa Park', date: '2026-01-03', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop', readTime: '7 min read' }
    ];
    
    document.addEventListener('DOMContentLoaded', function() {
      const grid = document.getElementById('blog-grid');
      if (grid) {
        grid.innerHTML = blogPosts.map(post => `
          <article class="blog-card">
            <div class="blog-card-image">
              <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-card-content">
              <div class="blog-meta">
                <span class="blog-category">${post.category}</span>
                <span>${post.readTime}</span>
              </div>
              <h3><a href="#">${post.title}</a></h3>
              <p>${post.excerpt}</p>
              <a href="#" class="blog-read-more">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
          </article>
        `).join('');
      }
    });
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Contact Ash Meganab - Get in touch with our team for inquiries about our natural herbal supplements.">
  <title>Contact Us | Ash Meganab - Natural Herbal Solutions</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="Assets/Images/ashmeganablogo.PNG">
  
  <link rel="stylesheet" href="Assets/CSS/main.css">
  <style>
    .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; padding: 3rem 0; }
    .contact-info-section h2 { font-family: var(--font-secondary); font-size: 2.5rem; margin-bottom: 1rem; }
    .contact-info-section > p { font-size: 1rem; color: var(--color-gray-600); margin-bottom: 2rem; }
    .contact-details { display: flex; flex-direction: column; gap: 1.5rem; }
    .contact-item { display: flex; gap: 1rem; }
    .contact-icon { width: 50px; height: 50px; background: var(--color-gray-100); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .contact-icon svg { width: 24px; height: 24px; color: var(--color-primary); }
    .contact-item h4 { font-family: var(--font-primary); font-size: 1rem; font-weight: 600; color: var(--color-gray-800); margin-bottom: 0.25rem; }
    .contact-item p { font-size: 0.875rem; color: var(--color-gray-600); }
    .contact-map { margin-top: 2rem; height: 300px; background: var(--color-gray-200); border-radius: 12px; overflow: hidden; }
    .contact-map iframe { width: 100%; height: 100%; border: none; }
    .contact-form-section h2 { font-family: var(--font-secondary); font-size: 2rem; margin-bottom: 1.5rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-size: 0.875rem; font-weight: 500; color: var(--color-gray-700); margin-bottom: 0.25rem; }
    .form-group label .required { color: var(--color-error); }
    .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 0.75rem; border: 1px solid #dee2e6; border-radius: 8px; font-size: 1rem; color: var(--color-gray-800); transition: all 0.2s; }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.1); }
    .form-group textarea { resize: vertical; min-height: 150px; }
    .form-group .error-message { font-size: 0.75rem; color: var(--color-error); margin-top: 0.25rem; display: none; }
    .form-group.error input, .form-group.error textarea { border-color: var(--color-error); }
    .form-group.error .error-message { display: block; }
    .form-submit { margin-top: 1.5rem; }
    .form-submit button { min-width: 200px; }
    @media (max-width: 992px) { .contact-layout { grid-template-columns: 1fr; } }
    @media (max-width: 768px) { .form-row { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
        <span>Ash Meganab</span>
      </a>
      
      <nav class="nav-menu">
        <a href="index.html" class="nav-link">Home</a>
        <a href="shop.html" class="nav-link">Shop</a>
        <div class="nav-item nav-item-has-children">
          <a href="shop.html" class="nav-link">Categories</a>
          <div class="nav-dropdown">
            <a href="shop.html?category=cardionab" class="nav-dropdown-item">CardioNab</a>
            <a href="shop.html?category=dianab" class="nav-dropdown-item">DiaoNab</a>
            <a href="shop.html?category=prostanab" class="nav-dropdown-item">ProstaNab</a>
            <a href="shop.html?category=nabdol" class="nav-dropdown-item">Nabdol</a>
          </div>
        </div>
        <a href="about.html" class="nav-link">About</a>
        <a href="blog.html" class="nav-link">Blog</a>
        <a href="contact.html" class="nav-link active">Contact</a>
      </nav>
      
      <div class="header-actions">
        <div class="search-container">
          <form class="search-form">
            <input type="text" class="search-input" placeholder="Search products..." aria-label="Search">
            <button type="submit" class="search-btn" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div class="search-results"></div>
        </div>
        
        <a href="cart.html" class="cart-btn" aria-label="Shopping Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">0</span>
        </a>
        
        <button class="mobile-menu-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  
  <div class="mobile-menu-overlay"></div>
  
  <!-- Mini Cart Drawer -->
  <div class="cart-overlay"></div>
  <aside class="cart-drawer">
    <div class="cart-header">
      <h3>Shopping Cart</h3>
      <button class="cart-close-btn" aria-label="Close Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="cart-items-container">
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h4>Your cart is empty</h4>
        <p>Add some products to get started!</p>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart-subtotal">
        <span class="cart-subtotal-label">Subtotal</span>
        <span class="cart-subtotal-value">$0.00</span>
      </div>
      <div class="cart-buttons">
        <a href="cart.html" class="btn btn-secondary cart-btn-secondary">View Cart</a>
        <a href="checkout.html" class="btn btn-primary cart-btn-primary">Checkout</a>
      </div>
    </div>
  </aside>
  
  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-hero-content">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you</p>
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span>Contact</span>
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section class="container">
    <div class="contact-layout">
      <div class="contact-info-section">
        <h2>Get in Touch</h2>
        <p>Have questions about our products or need assistance? Our team is here to help you on your wellness journey.</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h4>Our Location</h4>
              <p>123 Wellness Avenue, Health District<br>New York, NY 10001, USA</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h4>Phone Number</h4>
              <p>Customer Service: +1 (800) 123-4567<br>Support: +1 (800) 123-4568</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <h4>Email Address</h4>
              <p>General: info@ashmeganab.com<br>Support: support@ashmeganab.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h4>Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div class="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
      <div class="contact-form-section">
        <h2>Send Us a Message</h2>
        <form id="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="contact-name">Your Name <span class="required">*</span></label>
              <input type="text" id="contact-name" name="name" required>
              <span class="error-message">Please enter your name</span>
            </div>
            <div class="form-group">
              <label for="contact-email">Email Address <span class="required">*</span></label>
              <input type="email" id="contact-email" name="email" required>
              <span class="error-message">Please enter a valid email</span>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="contact-subject">Subject <span class="required">*</span></label>
              <input type="text" id="contact-subject" name="subject" required>
              <span class="error-message">Please enter a subject</span>
            </div>
            <div class="form-group">
              <label for="contact-phone">Phone Number</label>
              <input type="tel" id="contact-phone" name="phone">
            </div>
          </div>
          
          <div class="form-group">
            <label for="contact-message">Your Message <span class="required">*</span></label>
            <textarea id="contact-message" name="message" required></textarea>
            <span class="error-message">Please enter your message</span>
          </div>
          
          <div class="form-submit">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Newsletter Section -->
  <section class="newsletter-section">
    <div class="container">
      <div class="newsletter-container">
        <h2>Join Our Wellness Community</h2>
        <p>Subscribe to receive health tips and exclusive offers</p>
        <form class="newsletter-form-inline" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer-cta">
      <div class="footer-cta-content">
        <div class="footer-cta-text">
          <h3>Ready to Start Your Wellness Journey?</h3>
          <p>Explore our range of natural herbal supplements.</p>
        </div>
        <a href="shop.html" class="btn btn-accent btn-lg">Shop Now</a>
      </div>
    </div>
    
    <div class="footer-grid">
      <div class="footer-about">
        <div class="footer-logo">
          <img src="Assets/Images/ashmeganablogo.PNG" alt="Ash Meganab Logo">
          <span class="footer-logo-text">Ash Meganab</span>
        </div>
        <p>Your trusted source for premium natural herbal supplements.</p>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="index.html" class="footer-link">Home</a></li>
          <li><a href="shop.html" class="footer-link">Shop</a></li>
          <li><a href="about.html" class="footer-link">About Us</a></li>
          <li><a href="blog.html" class="footer-link">Blog</a></li>
          <li><a href="contact.html" class="footer-link">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Categories</h4>
        <ul class="footer-links">
          <li><a href="shop.html?category=cardionab" class="footer-link">CardioNab</a></li>
          <li><a href="shop.html?category=dianab" class="footer-link">DiaoNab</a></li>
          <li><a href="shop.html?category=prostanab" class="footer-link">ProstaNab</a></li>
          <li><a href="shop.html?category=nabdol" class="footer-link">Nabdol</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Customer Support</h4>
        <ul class="footer-links">
          <li><a href="#" class="footer-link">FAQs</a></li>
          <li><a href="#" class="footer-link">Shipping Info</a></li>
          <li><a href="#" class="footer-link">Returns Policy</a></li>
          <li><a href="contact.html" class="footer-link">Contact Us</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your email address">
          <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copyright">© 2026 Ash Meganab. All Rights Reserved.</p>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <a href="#" class="footer-legal-link">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- JavaScript -->
  <script type="module" src="Assets/JS/main.js"></script>
</body>
</html>
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
