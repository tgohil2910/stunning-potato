import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price }) => {
  return (
    <div style={{
      border: '1px solid #d1e3ff',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '200px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    }}>
      <h3 style={{ color: '#0a4d8c', marginBottom: '10px' }}>{name}</h3>
      <p style={{ marginBottom: '15px' }}>Price: ${price}</p>
      <Link 
        to={`/product/${id}`}
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: '#3a7bc0',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '0.9rem'
        }}
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
