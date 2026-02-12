const Order = require('../models/orderModel');

// @desc    Create a new order
// @route   POST /api/orders
// @access  Public
exports.createOrder = async (req, res) => {
  try {
    console.log('Order request received:', JSON.stringify(req.body));
    
    const {
      customer_full_name,
      customer_phone,
      customer_email,
      delivery_address,
      city,
      product_name,
      product_category,
      quantity,
      unit_price_GHS,
      additional_notes
    } = req.body;

    // Validate required fields
    if (!customer_full_name || !customer_phone || !delivery_address || !city || !product_name) {
      console.log('Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Calculate total price
    const total_price_GHS = quantity * unit_price_GHS;
    console.log('Creating order with total:', total_price_GHS);

    // Create order
    const order = await Order.create({
      customer_full_name,
      customer_phone,
      customer_email,
      delivery_address,
      city,
      product_name,
      product_category,
      quantity,
      unit_price_GHS,
      total_price_GHS,
      additional_notes
    });

    console.log('Order created successfully:', order.order_id);

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: {
        order_id: order.order_id,
        order_status: order.order_status,
        created_at: order.created_at
      }
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
};

// @desc    Get all orders
// @route   GET /api/admin/orders
// @access  Private (Admin)
exports.getAllOrders = async (req, res) => {
  try {
    const { status, search, startDate, endDate, page = 1, limit = 20 } = req.query;

    // Build query
    const query = {};

    if (status && status !== 'all') {
      query.order_status = status;
    }

    if (search) {
      query.$or = [
        { customer_full_name: { $regex: search, $options: 'i' } },
        { customer_phone: { $regex: search, $options: 'i' } },
        { order_id: { $regex: search, $options: 'i' } }
      ];
    }

    if (startDate || endDate) {
      query.created_at = {};
      if (startDate) query.created_at.$gte = new Date(startDate);
      if (endDate) query.created_at.$lte = new Date(endDate);
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get orders with pagination
    const orders = await Order.find(query)
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count
    const total = await Order.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        orders,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: error.message
    });
  }
};

// @desc    Get single order
// @route   GET /api/admin/orders/:id
// @access  Private (Admin)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order',
      error: error.message
    });
  }
};

// @desc    Update order status
// @route   PUT /api/admin/orders/:id
// @access  Private (Admin)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { order_status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { 
        order_status,
        updated_at: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: order
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update order',
      error: error.message
    });
  }
};

// @desc    Delete order
// @route   DELETE /api/admin/orders/:id
// @access  Private (Admin)
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Order deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete order',
      error: error.message
    });
  }
};

// @desc    Get order statistics
// @route   GET /api/admin/orders/stats
// @access  Private (Admin)
exports.getOrderStats = async (req, res) => {
  try {
    // Get count by status (without totalRevenue in each group)
    const stats = await Order.aggregate([
      {
        $group: {
          _id: '$order_status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalOrders = await Order.countDocuments();
    
    // Get total revenue as a separate calculation
    const totalRevenueResult = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$total_price_GHS' } } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        byStatus: stats,
        totalOrders,
        totalRevenue: totalRevenueResult[0]?.total || 0
      }
    });
  } catch (error) {
    console.error('Error fetching order stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order statistics',
      error: error.message
    });
  }
};
