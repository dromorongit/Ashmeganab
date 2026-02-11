# Ash Meganab Admin Backend

A Node.js/Express backend for managing orders from the Ash Meganab Herbal website.

## Features

- **Order Management**: Receive and store orders from the frontend
- **Admin Dashboard**: View, search, filter, and manage orders
- **JWT Authentication**: Secure admin access
- **Export Functionality**: Export orders to Excel or PDF
- **Real-time Stats**: Dashboard with order statistics

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- PDFKit (PDF export)
- XLSX (Excel export)

## Project Structure

```
backend/
├── server.js              # Main entry point
├── package.json           # Dependencies
├── .env                   # Environment variables
├── config/
│   └── database.js       # MongoDB connection
├── models/
│   └── orderModel.js     # Order schema
├── controllers/
│   └── orderController.js # Order logic
├── routes/
│   ├── orderRoutes.js    # Public order routes
│   └── adminRoutes.js    # Admin routes
├── middleware/
│   └── authMiddleware.js # JWT verification
└── utils/
    ├── exportExcel.js    # Excel export utility
    └── exportPDF.js      # PDF export utility
```

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ashmeganab
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRES_IN=7d
   ADMIN_EMAIL=admin@ashmeganab.com
   ADMIN_PASSWORD=your-password
   CORS_ORIGIN=https://your-domain.com
   ```

## Running Locally

```bash
cd backend
npm start
```

The server will start on http://localhost:3000

## Railway Deployment

### 1. Create Railway Account & Project
- Sign up at [railway.app](https://railway.app)
- Create a new project and select "Deploy from GitHub repo"

### 2. Add MongoDB Database
- In your Railway project, click "Add Database" → "MongoDB"
- Wait for the database to be provisioned

### 3. Configure Environment Variables
In Railway project settings, add these environment variables:
```
PORT=3000
MONGODB_URI=<from MongoDB service>
JWT_SECRET=<generate a secure random string>
JWT_EXPIRES_IN=7d
ADMIN_EMAIL=admin@ashmeganab.com
ADMIN_PASSWORD=<your-admin-password>
CORS_ORIGIN=https://your-frontend-domain.netlify.app
NODE_ENV=production
```

### 4. Deploy
- Railway will automatically deploy from your GitHub repo
- Set the root directory to `backend` in Railway settings

## Frontend Integration

Update `Assets/JS/checkout.js` with your Railway URL:

```javascript
config: {
  apiBaseUrl: 'https://your-railway-app.up.railway.app/api/orders'
}
```

## Admin Panel Access

After deployment:
- Admin Login: `https://your-railway-app.up.railway.app/admin/`
- Or use the standalone admin panel in `backend/public/`

Default credentials (set in .env):
- Email: admin@ashmeganab.com
- Password: admin123

## API Endpoints

### Public
- `POST /api/orders` - Create new order

### Admin (Protected)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/orders` - Get all orders
- `GET /api/admin/orders/:id` - Get single order
- `PUT /api/admin/orders/:id` - Update order status
- `DELETE /api/admin/orders/:id` - Delete order
- `GET /api/admin/orders/stats` - Get order statistics
- `GET /api/admin/export/excel` - Export to Excel
- `GET /api/admin/export/pdf` - Export to PDF

## Security Notes

- Change the default admin credentials in production
- Use a strong, random JWT_SECRET
- Keep your .env file secret and never commit it to GitHub
- Use MongoDB Atlas for production-grade database
