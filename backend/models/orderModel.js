const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    default: () => `ORD-${Date.now()}-${uuidv4().slice(0, 8).toUpperCase()}`,
    unique: true,
    index: true
  },
  customer_full_name: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  customer_phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  customer_email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  delivery_address: {
    type: String,
    required: [true, 'Delivery address is required'],
    trim: true,
    maxlength: [500, 'Address cannot exceed 500 characters']
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
    maxlength: [100, 'City cannot exceed 100 characters']
  },
  product_name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  product_category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
    max: [99, 'Quantity cannot exceed 99']
  },
  unit_price_GHS: {
    type: Number,
    required: [true, 'Unit price is required'],
    min: [0, 'Price cannot be negative']
  },
  total_price_GHS: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Price cannot be negative']
  },
  additional_notes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  },
  order_status: {
    type: String,
    enum: ['Pending', 'Processed', 'Delivered'],
    default: 'Pending',
    index: true
  },
  created_at: {
    type: Date,
    default: Date.now,
    index: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for performance
orderSchema.index({ created_at: -1 });
orderSchema.index({ order_status: 1, created_at: -1 });
orderSchema.index({ customer_full_name: 'text', customer_phone: 'text' });

// Virtual for formatted order ID
orderSchema.virtual('formattedOrderId').get(function() {
  return this.order_id;
});

// Method to calculate total price
orderSchema.methods.calculateTotal = function() {
  return this.quantity * this.unit_price_GHS;
};

// Pre-save hook to update total price
orderSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

module.exports = mongoose.model('Order', orderSchema);
