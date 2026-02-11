require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDatabase = require('./config/database');

// Import routes
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Trust proxy (for Railway deployment behind reverse proxy)
app.set('trust proxy', 1);

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    
    // Allow specific origins
    const allowedOrigins = [
      'https://dromorongit.github.io',
      'https://ashmeganab.com',
      'http://localhost:3000',
      'http://localhost:5500'
    ];
    
    if(allowedOrigins.indexOf(origin) === -1) {
      console.log('CORS allowed origin:', origin);
    }
    
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Serve static files (for admin panel if needed)
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Ash Meganab Admin API',
    version: '1.0.0',
    endpoints: {
      public: {
        'POST /api/orders': 'Create a new order'
      },
      admin: {
        'POST /api/admin/login': 'Admin login',
        'GET /api/admin/orders': 'Get all orders (protected)',
        'GET /api/admin/orders/:id': 'Get single order (protected)',
        'PUT /api/admin/orders/:id': 'Update order status (protected)',
        'DELETE /api/admin/orders/:id': 'Delete order (protected)',
        'GET /api/admin/orders/stats': 'Get order statistics (protected)',
        'GET /api/admin/export/excel': 'Export to Excel (protected)',
        'GET /api/admin/export/pdf': 'Export to PDF (protected)'
      }
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Connect to database
    await connectDatabase();

    // Start listening
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📋 API Documentation: http://localhost:${PORT}/api`);
      console.log(`🏥 Health Check: http://localhost:${PORT}/health`);
      console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

startServer();

module.exports = app;
