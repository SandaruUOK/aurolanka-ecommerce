const products = [
  // iPhones
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "phone",
    price: 999,
    description: "The most advanced iPhone ever with titanium design and A17 Pro chip.",
    image: "/images/iPhone-15-Black.jpg",
    stock: 25,
    specifications: {
      storage: "128GB",
      color: "Natural Titanium",
      screenSize: "6.1 inch"
    }
  },
  {
    name: "iPhone 15",
    brand: "Apple",
    category: "phone",
    price: 799,
    description: "iPhone 15 with Dynamic Island and advanced camera system.",
    image: "/images/I15.jpg",
    stock: 30,
    specifications: {
      storage: "128GB",
      color: "Blue",
      screenSize: "6.1 inch"
    }
  },
  // Samsung Galaxy S Series
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "phone",
    price: 1199,
    description: "Ultimate Galaxy experience with S Pen and AI features.",
    image: "/images/samsung.jpeg",
    stock: 20,
    specifications: {
      storage: "256GB",
      color: "Titanium Gray",
      screenSize: "6.8 inch"
    }
  },
  {
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    category: "phone",
    price: 799,
    description: "Flagship Galaxy S24 with advanced AI capabilities.",
    image: "/images/galaxy.jpg",
    stock: 35,
    specifications: {
      storage: "128GB",
      color: "Onyx Black",
      screenSize: "6.2 inch"
    }
  },
  // Google Pixel
  {
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "phone",
    price: 999,
    description: "Google's flagship with best-in-class AI and camera.",
    image: "/images/8pro.jpg",
    stock: 15,
    specifications: {
      storage: "128GB",
      color: "Obsidian",
      screenSize: "6.7 inch"
    }
  },
  {
    name: "Google Pixel 8",
    brand: "Google",
    category: "phone",
    price: 699,
    description: "Pure Google experience with advanced computational photography.",
    image: "/images/8rose.jpg",
    stock: 25,
    specifications: {
      storage: "128GB",
      color: "Rose",
      screenSize: "6.2 inch"
    }
  },
  // Accessories
  {
    name: "AirPods Pro (2nd generation)",
    brand: "Apple",
    category: "accessory",
    price: 249,
    description: "Active Noise Cancellation and Spatial Audio.",
    image: "/images/2gen.jpg",
    stock: 50,
    specifications: {
      compatibility: ["iPhone 15 Pro", "iPhone 15"],
      color: "White"
    }
  },
  {
    name: "Samsung Galaxy Buds2 Pro",
    brand: "Samsung",
    category: "accessory",
    price: 229,
    description: "Premium wireless earbuds with ANC.",
    image: "images/graphite.jpg",
    stock: 40,
    specifications: {
      compatibility: ["Samsung Galaxy S24 Ultra", "Samsung Galaxy S24"],
      color: "Graphite"
    }
  },
  {
    name: "Pixel Buds Pro",
    brand: "Google",
    category: "accessory",
    price: 199,
    description: "Smart earbuds with Active Noise Cancellation.",
    image: "images/pixbuds.jpg",
    stock: 30,
    specifications: {
      compatibility: ["Google Pixel 8 Pro", "Google Pixel 8"],
      color: "Charcoal"
    }
  }
];

module.exports = products;