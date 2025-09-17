import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: '#9ca3af',
      padding: '3rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Main Footer Content */}
        <div style={{ marginBottom: '3rem' }}>
          
          {/* First Row - Company Info */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              color: '#3b82f6', 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              AuroLanka
            </h3>
            <p style={{ 
              lineHeight: '1.6', 
              marginBottom: '1.5rem',
              color: '#9ca3af',
              maxWidth: '500px'
            }}>
              Your premium destination for mobile phones and accessories. 
              Serving quality products and creating memorable tech experiences since 2015.
            </p>
            
            {/* Newsletter */}
            <div>
              <h4 style={{ 
                color: '#f3f4f6', 
                marginBottom: '0.75rem',
                fontSize: '1rem'
              }}>
                Subscribe to our newsletter
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #374151',
                    backgroundColor: '#374151',
                    color: '#f3f4f6',
                    fontSize: '0.9rem'
                  }}
                />
                <button style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Second Row - Store Locations & Opening Hours */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            
            {/* Store Locations */}
            <div>
              <h4 style={{ 
                color: '#f3f4f6', 
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Store Locations
              </h4>
              
              {/* Colombo 02 Store */}
              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ color: '#f3f4f6', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                  Colombo Main Store
                </h5>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 0.5rem 0' }}>
                  No. 125, Galle Road,<br />
                  Colombo 02, Sri Lanka
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>
                  +94 77 234 5678
                </p>
              </div>

              {/* Nugegoda Store */}
              <div>
                <h5 style={{ color: '#f3f4f6', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                  Nugegoda Branch
                </h5>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 0.5rem 0' }}>
                  No. 45, High Level Road,<br />
                  Nugegoda, Sri Lanka
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>
                  +94 77 876 5432
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 style={{ 
                color: '#f3f4f6', 
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Opening Hours
              </h4>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                <p style={{ color: '#9ca3af', margin: '0 0 0.75rem 0' }}>
                  <strong style={{ color: '#f3f4f6' }}>Monday - Friday:</strong><br />
                  9:00 AM - 8:00 PM
                </p>
                <p style={{ color: '#9ca3af', margin: '0 0 0.75rem 0' }}>
                  <strong style={{ color: '#f3f4f6' }}>Saturday - Sunday:</strong><br />
                  10:00 AM - 9:00 PM
                </p>
                <p style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '1.5rem' }}>
                  Both locations follow the same operating hours
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - Support, Legal, Company */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            
            {/* Support */}
            <div>
              <h4 style={{ 
                color: '#f3f4f6', 
                marginBottom: '1rem',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                Support
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Contact Us', 'FAQs', 'Delivery Info', 'Returns', 'Warranty'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{ 
                color: '#f3f4f6', 
                marginBottom: '1rem',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                Legal
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy', 'Shipping Policy'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{ 
                color: '#f3f4f6', 
                marginBottom: '1rem',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['About Us', 'Careers', 'Press', 'Blog', 'Partnerships'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          
          {/* Copyright */}
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            © 2025 AuroLanka. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;