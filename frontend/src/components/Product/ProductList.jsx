/*import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';
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
    <div className="container">
    
      <div className="text-center mb-4">
        <div className="flex flex-center flex-wrap" style={{ gap: '8px' }}>
          <button 
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setFilter('all')}
          >
            All Products ({products.length})
          </button>
          <button 
            className={`btn ${filter === 'phones' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setFilter('phones')}
          >
            Phones
          </button>
          <button 
            className={`btn ${filter === 'accessories' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setFilter('accessories')}
          >
            Accessories
          </button>
          <button 
            className={`btn ${filter === 'apple' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setFilter('apple')}
          >
            Apple
          </button>
          <button 
            className={`btn ${filter === 'samsung' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setFilter('samsung')}
          >
            Samsung
          </button>
          <button 
            className={`btn ${filter === 'google' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            onClick={() => setFilter('google')}
          >
            Google
          </button>
        </div>
      </div>

      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center">
          <p>No products found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;*/
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';
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
    <div className="container">
      {/* Filter Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '8px' 
        }}>
          <button 
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            onClick={() => setFilter('all')}
          >
            All Products ({products.length})
          </button>
          <button 
            className={`btn ${filter === 'phones' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            onClick={() => setFilter('phones')}
          >
            Phones
          </button>
          <button 
            className={`btn ${filter === 'accessories' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            onClick={() => setFilter('accessories')}
          >
            Accessories
          </button>
          <button 
            className={`btn ${filter === 'apple' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            onClick={() => setFilter('apple')}
          >
            Apple
          </button>
          <button 
            className={`btn ${filter === 'samsung' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            onClick={() => setFilter('samsung')}
          >
            Samsung
          </button>
          <button 
            className={`btn ${filter === 'google' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            onClick={() => setFilter('google')}
          >
            Google
          </button>
        </div>
      </div>

      {/* Products Grid - THIS IS THE KEY FIX */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
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
        <div style={{ textAlign: 'center' }}>
          <p>No products found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;