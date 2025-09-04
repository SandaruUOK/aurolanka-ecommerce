import React, { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import { authAPI } from '../../services/api';

const Login = ({ onSuccess, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(formData);
      const { user, token } = response.data;
      login(user, token);
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  // Demo login for testing
  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@aurolanka.com',
      password: 'demo123'
    });
  };

  return (
    <div>
      <h2 className="text-center mb-3">Login to AuroLanka</h2>
      
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="form-error text-center mb-3">
            {error}
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ width: '100%' }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="text-center mt-3">
        <button 
          className="btn btn-secondary btn-sm"
          type="button"
          onClick={handleDemoLogin}
          style={{ marginBottom: '1rem' }}
        >
          Use Demo Login
        </button>
        <br />
        <p>Don't have an account?</p>
        <button 
          type="button"
          className="btn btn-secondary"
          onClick={onSwitchToSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;