const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { verifyToken, generateToken } = require('../middleware/authMiddleware');
const Order = require('../models/orderModel');
const orderController = require('../controllers/orderController');
const exportExcel = require('../utils/exportExcel');
const exportPDF = require('../utils/exportPDF');

// @route   POST /api/admin/login
// @desc    Admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Check credentials against environment variables
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // In production, use hashed password comparison
    // For simplicity, we're using direct comparison with env password
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate token
    const token = generateToken({
      id: 'admin',
      email: process.env.ADMIN_EMAIL,
      role: 'admin'
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        admin: {
          email: process.env.ADMIN_EMAIL,
          role: 'admin'
        }
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
});

// @route   GET /api/admin/orders
// @desc    Get all orders (Protected)
router.get('/orders', verifyToken, orderController.getAllOrders);

// @route   GET /api/admin/orders/:id
// @desc    Get single order (Protected)
router.get('/orders/:id', verifyToken, orderController.getOrderById);

// @route   PUT /api/admin/orders/:id
// @desc    Update order status (Protected)
router.put('/orders/:id', verifyToken, orderController.updateOrderStatus);

// @route   DELETE /api/admin/orders/:id
// @desc    Delete order (Protected)
router.delete('/orders/:id', verifyToken, orderController.deleteOrder);

// @route   GET /api/admin/orders/stats
// @desc    Get order statistics (Protected)
router.get('/orders/stats', verifyToken, orderController.getOrderStats);

// @route   GET /api/admin/export/excel
// @desc    Export orders to Excel (Protected)
router.get('/export/excel', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find().sort({ created_at: -1 });
    const buffer = exportExcel(orders);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=ashmeganab-orders-${Date.now()}.xlsx`);
    res.send(buffer);
  } catch (error) {
    console.error('Excel export error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to export Excel',
      error: error.message
    });
  }
});

// @route   GET /api/admin/export/pdf
// @desc    Export orders to PDF (Protected)
router.get('/export/pdf', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find().sort({ created_at: -1 });
    const doc = exportPDF(orders);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=ashmeganab-orders-${Date.now()}.pdf`);
    doc.pipe(res);
    doc.end();
  } catch (error) {
    console.error('PDF export error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to export PDF',
      error: error.message
    });
  }
});

module.exports = router;
