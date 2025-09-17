import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';
import HeroSection from '../Layout/HeroSection';
import { productAPI } from '../../services/api';

const ProductList = ({ onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productAPI.getAllProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'phones') return product.category === 'phone';
    if (filter === 'accessories') return product.category === 'accessory';
    return product.brand.toLowerCase() === filter.toLowerCase();
  });

  const handleShopNow = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="container text-center">
        <div className="card">
          <h2>Error Loading Products</h2>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={fetchProducts}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        onShopNowClick={handleShopNow}
        onExploreClick={handleExploreProducts}
      />

      {/* Products Section */}
      <div id="products-section" className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Our Products
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Browse our curated selection of premium mobile phones and accessories from top brands
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '0.75rem' 
          }}>
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              onClick={() => setFilter('all')}
            >
              All Products ({products.length})
            </button>
            <button 
              className={`btn ${filter === 'phones' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              onClick={() => setFilter('phones')}
            >
              Phones
            </button>
            <button 
              className={`btn ${filter === 'accessories' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              onClick={() => setFilter('accessories')}
            >
              Accessories
            </button>
            <button 
              className={`btn ${filter === 'apple' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              onClick={() => setFilter('apple')}
            >
              Apple
            </button>
            <button 
              className={`btn ${filter === 'samsung' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              onClick={() => setFilter('samsung')}
            >
              Samsung
            </button>
            <button 
              className={`btn ${filter === 'google' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              onClick={() => setFilter('google')}
            >
              Google
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p style={{ fontSize: '1.1rem', color: '#6b7280' }}>
              No products found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;