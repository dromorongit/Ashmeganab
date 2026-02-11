const PDFDocument = require('pdfkit');

const exportPDF = (orders) => {
  const doc = new PDFDocument({ margin: 50 });

  // Header
  doc.fontSize(24).font('Helvetica-Bold').fillColor('#2d6a4f');
  doc.text('Ash Meganab Herbal', 50, 50, { align: 'center' });
  
  doc.fontSize(16).font('Helvetica').fillColor('#4a4a4a');
  doc.text('Order Report', { align: 'center' });
  
  doc.fontSize(10).fillColor('#6c757d');
  doc.text(`Generated on: ${new Date().toLocaleString()}`, { align: 'center' });
  
  doc.moveDown(2);

  // Summary stats
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total_price_GHS, 0);
  const pendingOrders = orders.filter(o => o.order_status === 'Pending').length;
  const deliveredOrders = orders.filter(o => o.order_status === 'Delivered').length;

  doc.fontSize(12).fillColor('#1b1b1b');
  doc.text('Summary', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(10);
  doc.text(`Total Orders: ${totalOrders}`, { continued: true });
  doc.text(`         Total Revenue: GHS ${totalRevenue.toFixed(2)}`, { align: 'right' });
  doc.text(`Pending: ${pendingOrders}`, { continued: true });
  doc.text(`         Delivered: ${deliveredOrders}`, { align: 'right' });
  
  doc.moveDown(2);

  // Table header
  const tableTop = 200;
  const columns = {
    orderId: 50,
    customer: 130,
    product: 260,
    qty: 340,
    total: 380,
    status: 450
  };

  doc.fontSize(10).font('Helvetica-Bold').fillColor('#2d6a4f');
  doc.text('Order ID', columns.orderId, tableTop);
  doc.text('Customer', columns.customer, tableTop);
  doc.text('Product', columns.product, tableTop);
  doc.text('Qty', columns.qty, tableTop);
  doc.text('Total', columns.total, tableTop);
  doc.text('Status', columns.status, tableTop);

  // Draw line under header
  doc.strokeColor('#e9ecef')
     .lineWidth(1)
     .moveTo(50, tableTop + 15)
     .lineTo(550, tableTop + 15)
     .stroke();

  // Table rows
  let y = tableTop + 30;
  doc.font('Helvetica').fillColor('#1b1b1b');

  orders.forEach((order, index) => {
    // Check if we need a new page
    if (y > 700) {
      doc.addPage();
      y = 50;
    }

    const bgColor = index % 2 === 0 ? '#ffffff' : '#f8f9fa';
    
    // Draw row background
    doc.rect(45, y - 5, 510, 20).fill(bgColor);

    doc.fontSize(9);
    doc.text(order.order_id.substring(0, 15), columns.orderId, y);
    doc.text(order.customer_full_name.substring(0, 20), columns.customer, y);
    doc.text(order.product_name.substring(0, 15), columns.product, y);
    doc.text(order.quantity.toString(), columns.qty, y);
    doc.text(`GHS ${order.total_price_GHS.toFixed(2)}`, columns.total, y);
    
    // Status color
    if (order.order_status === 'Pending') {
      doc.fillColor('#ffc107');
    } else if (order.order_status === 'Processed') {
      doc.fillColor('#17a2b8');
    } else if (order.order_status === 'Delivered') {
      doc.fillColor('#28a745');
    }
    doc.text(order.order_status, columns.status, y);
    doc.fillColor('#1b1b1b');

    y += 25;
  });

  // Footer
  const pageCount = doc.bufferedPageRange().count;
  for (let i = 0; i < pageCount; i++) {
    doc.switchToPage(i);
    doc.fontSize(8).fillColor('#6c757d');
    doc.text(
      `Page ${i + 1} of ${pageCount}`,
      50,
      doc.page.height - 50,
      { align: 'center' }
    );
  }

  return doc;
};

module.exports = exportPDF;
