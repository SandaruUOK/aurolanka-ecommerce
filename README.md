# AuroLanka E-Commerce Platform

Full-stack e-commerce application for mobile phones and accessories. React frontend with Node.js/Express backend and MongoDB database.

## Tech Stack

- **Frontend**: React + Vite, Context API, Axios
- **Backend**: Node.js + Express, JWT auth, bcryptjs
- **Database**: MongoDB + Mongoose

## Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/aurolanka-db
JWT_SECRET=your-secure-secret-key
PORT=5000
```

```bash
npm run create-admin
npm run seed
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Access
- Frontend: http://localhost:5173
- Backend: http://localhost:5000/api

## Default Accounts

**Admin**: admin@aurolanka.com / admin123  
**Customer**: demo@aurolanka.com / demo123

## Key Scripts

### Backend
- `npm run dev` - Start development server
- `npm run create-admin` - Create admin user
- `npm run seed` - Add sample products

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production

## API Endpoints

- `GET /api/products` - All products
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/admin/products` - Admin products (protected)
- `POST /api/admin/products` - Create product (admin)

## Features

- Product catalog with filtering
- Shopping cart with persistence
- JWT authentication (customer/admin roles)
- Admin dashboard for product management
- Checkout system with payment options
- Responsive design

## Database Setup

**Local MongoDB**: Install and start MongoDB service  
**MongoDB Atlas**: Create cluster, get connection string, whitelist IP

## Troubleshooting

**MongoDB connection error**: Check if MongoDB is running  
**CORS errors**: Ensure backend is on port 5000  
**Auth issues**: Clear localStorage, check JWT_SECRET

## Project Structure

```
aurolanka/
├── backend/          # Express API server
│   ├── models/       # MongoDB schemas
│   ├── middleware/   # Auth middleware
│   └── server.js
└── frontend/         # React application
    ├── src/components/
    ├── src/context/  # State management
    └── src/services/ # API calls
```

## Development

```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2  
cd frontend && npm run dev
```
