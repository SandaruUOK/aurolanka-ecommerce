import React, { useState } from 'react';
import { useAuth } from '../../context/useAuth';
import { authAPI } from '../../services/api';

const SignUp = ({ onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.signup({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      const { user, token } = response.data;
      login(user, token);
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center mb-3">Sign Up for AuroLanka</h2>
      
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="form-error text-center mb-3">
            {error}
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Full Name:</label>
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

        <div className="form-group">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
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
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <div className="text-center mt-3">
        <p>Already have an account?</p>
        <button 
          type="button"
          className="btn btn-secondary"
          onClick={onSwitchToLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;