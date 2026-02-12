const PDFDocument = require('pdfkit');

const exportPDF = (orders) => {
  const doc = new PDFDocument({ margin: 50 });

  // Header
  doc.fontSize(24).font('Helvetica-Bold').fillColor('#000000');
  doc.text('Ash Meganab Herbal', 50, 50, { align: 'center' });
  
  doc.fontSize(16).font('Helvetica').fillColor('#000000');
  doc.text('Order Report', { align: 'center' });
  
  doc.fontSize(10).fillColor('#000000');
  doc.text(`Generated on: ${new Date().toLocaleString()}`, { align: 'center' });
  
  doc.moveDown(2);

  // Summary stats
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total_price_GHS, 0);
  const pendingOrders = orders.filter(o => o.order_status === 'Pending').length;
  const deliveredOrders = orders.filter(o => o.order_status === 'Delivered').length;

  doc.fontSize(12).fillColor('#000000');
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

  doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000');
  doc.text('Order ID', columns.orderId, tableTop);
  doc.text('Customer', columns.customer, tableTop);
  doc.text('Product', columns.product, tableTop);
  doc.text('Qty', columns.qty, tableTop);
  doc.text('Total', columns.total, tableTop);
  doc.text('Status', columns.status, tableTop);

  // Draw line under header
  doc.strokeColor('#000000')
     .lineWidth(1)
     .moveTo(50, tableTop + 15)
     .lineTo(550, tableTop + 15)
     .stroke();

  // Table rows
  let y = tableTop + 30;
  doc.font('Helvetica').fillColor('#000000');

  orders.forEach((order, index) => {
    // Check if we need a new page
    if (y > 700) {
      doc.addPage();
      y = 50;
    }

    const bgColor = index % 2 === 0 ? '#ffffff' : '#f0f0f0';
    
    // Draw row background
    doc.rect(45, y - 5, 510, 20).fill(bgColor);

    doc.fontSize(9).fillColor('#000000');
    doc.text(order.order_id.substring(0, 15), columns.orderId, y);
    doc.text(order.customer_full_name.substring(0, 20), columns.customer, y);
    doc.text(order.product_name.substring(0, 15), columns.product, y);
    doc.text(order.quantity.toString(), columns.qty, y);
    doc.text(`GHS ${order.total_price_GHS.toFixed(2)}`, columns.total, y);
    doc.text(order.order_status, columns.status, y);
    
    y += 25;
  });

  // Footer
  const pageCount = doc.bufferedPageRange().count;
  for (let i = 0; i < pageCount; i++) {
    doc.switchToPage(i);
    doc.fontSize(8).fillColor('#000000');
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
