import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #d1e3ff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#0a4d8c' }}>Product Details</h2>
      <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f0f7ff', borderRadius: '4px' }}>
        <h3>Details for Product ID: <span style={{ color: '#e53935' }}>{productId}</span></h3>
        <p>This is the detailed view for the selected product.</p>
      </div>
      <Link to="/" style={{ color: '#3a7bc0', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Catalog</Link>
    </div>
  );
};

export default ProductDetail;
