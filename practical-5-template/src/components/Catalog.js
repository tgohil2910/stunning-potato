import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 },
  { id: 4, name: 'Smartwatch', price: 299 },
  { id: 5, name: 'Camera', price: 599 },
  { id: 6, name: 'Tablet', price: 399 }
];

const Catalog = () => {
  return (
    <div>
      <h2 style={{ color: '#0a4d8c', borderBottom: '2px solid #d1e3ff', paddingBottom: '10px' }}>Product Catalog</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            id={product.id} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
