import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#0a4d8c', color: 'white' }}>
        <h1>Product Catalog</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
