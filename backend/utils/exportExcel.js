const XLSX = require('xlsx');

const exportExcel = (orders) => {
  // Prepare data for Excel
  const data = orders.map(order => ({
    'Order ID': order.order_id,
    'Customer Name': order.customer_full_name,
    'Phone': order.customer_phone,
    'Email': order.customer_email || 'N/A',
    'Delivery Address': order.delivery_address,
    'City': order.city,
    'Product': order.product_name,
    'Category': order.product_category,
    'Quantity': order.quantity,
    'Unit Price (GHS)': order.unit_price_GHS,
    'Total Price (GHS)': order.total_price_GHS,
    'Status': order.order_status,
    'Notes': order.additional_notes || 'N/A',
    'Created At': new Date(order.created_at).toLocaleString(),
    'Updated At': new Date(order.updated_at).toLocaleString()
  }));

  // Create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Set column widths
  const columnWidths = [
    { wch: 25 }, // Order ID
    { wch: 25 }, // Customer Name
    { wch: 20 }, // Phone
    { wch: 30 }, // Email
    { wch: 40 }, // Delivery Address
    { wch: 20 }, // City
    { wch: 25 }, // Product
    { wch: 20 }, // Category
    { wch: 10 }, // Quantity
    { wch: 18 }, // Unit Price
    { wch: 18 }, // Total Price
    { wch: 15 }, // Status
    { wch: 30 }, // Notes
    { wch: 25 }, // Created At
    { wch: 25 }  // Updated At
  ];
  worksheet['!cols'] = columnWidths;

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');

  // Generate buffer
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  return buffer;
};

module.exports = exportExcel;
