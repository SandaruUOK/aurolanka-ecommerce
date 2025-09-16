import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: 'Apple',
    category: 'phone',
    price: '',
    description: '',
    image: '',
    stock: '',
    specifications: {
      storage: '',
      color: '',
      screenSize: '',
      compatibility: ''
    }
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        brand: product.brand || 'Apple',
        category: product.category || 'phone',
        price: product.price || '',
        description: product.description || '',
        image: product.image || '',
        stock: product.stock || '',
        specifications: {
          storage: product.specifications?.storage || '',
          color: product.specifications?.color || '',
          screenSize: product.specifications?.screenSize || '',
          compatibility: product.specifications?.compatibility?.join(', ') || ''
        }
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('spec_')) {
      const specField = name.replace('spec_', '');
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [specField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submitData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        specifications: {
          ...formData.specifications,
          compatibility: formData.specifications.compatibility 
            ? formData.specifications.compatibility.split(',').map(item => item.trim())
            : []
        }
      };

      await onSubmit(submitData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Product Name:</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Brand:</label>
              <select
                name="brand"
                className="form-input"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Category:</label>
              <select
                name="category"
                className="form-input"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="phone">Phone</option>
                <option value="accessory">Accessory</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Price ($):</label>
              <input
                type="number"
                name="price"
                className="form-input"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Stock:</label>
              <input
                type="number"
                name="stock"
                className="form-input"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Image URL:</label>
              <input
                type="url"
                name="image"
                className="form-input"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description:</label>
            <textarea
              name="description"
              className="form-input"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Specifications</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Storage:</label>
              <input
                type="text"
                name="spec_storage"
                className="form-input"
                value={formData.specifications.storage}
                onChange={handleChange}
                placeholder="e.g., 128GB"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Color:</label>
              <input
                type="text"
                name="spec_color"
                className="form-input"
                value={formData.specifications.color}
                onChange={handleChange}
                placeholder="e.g., Space Gray"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Screen Size:</label>
              <input
                type="text"
                name="spec_screenSize"
                className="form-input"
                value={formData.specifications.screenSize}
                onChange={handleChange}
                placeholder="e.g., 6.1 inch"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Compatibility (comma-separated):</label>
              <input
                type="text"
                name="spec_compatibility"
                className="form-input"
                value={formData.specifications.compatibility}
                onChange={handleChange}
                placeholder="e.g., iPhone 15, iPhone 15 Pro"
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Saving...' : (product ? 'Update Product' : 'Create Product')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;