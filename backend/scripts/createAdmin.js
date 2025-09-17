const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const createAdminUser = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@aurolanka.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@aurolanka.com',
      password: 'admin123', // Change this to a secure password
      role: 'admin'
    });

    console.log('Admin user created successfully:');
    console.log('Email: admin@aurolanka.com');
    console.log('Password: admin123');
    console.log('Role: admin');

    // Also create a demo user for testing
    const demoUser = await User.findOne({ email: 'demo@aurolanka.com' });
    if (!demoUser) {
      await User.create({
        name: 'Demo User',
        email: 'demo@aurolanka.com',
        password: 'demo123',
        role: 'customer'
      });
      console.log('\nDemo user created:');
      console.log('Email: demo@aurolanka.com');
      console.log('Password: demo123');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdminUser();