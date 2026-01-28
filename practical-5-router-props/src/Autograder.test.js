import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import ProductCard from './components/ProductCard';

// Mock ProductCard to verify props passing isolated from implementation details
// However, the rubric asks for "Data correctly passed", and "ProductCard receives data via Props".
// We can check if the rendered output contains the data.

describe('Autograder Tests', () => {

  test('Environment: react-router-dom is installed and usable', () => {
    // This test implicitly passes if the imports work and MemoryRouter renders
    render(
      <MemoryRouter>
        <div data-testid="router-works">Router Works</div>
      </MemoryRouter>
    );
    expect(screen.getByTestId('router-works')).toBeInTheDocument();
  });

  test('Routing Logic: App routes are defined correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Should see Catalog
    // Use getAllByText because "Product Catalog" may appear in both App header and Catalog component
    const titleElements = screen.getAllByText(/Product Catalog/i);
    expect(titleElements.length).toBeGreaterThan(0);
    // Verify Catalog content is present
    expect(screen.getByText('Laptop')).toBeInTheDocument();
  });

  test('Props Usage: Catalog renders ProductCards with correct data', () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );
    
    // Check for some products known to be in the list
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText(/Price: \$999/)).toBeInTheDocument();
    expect(screen.getByText('Smartphone')).toBeInTheDocument();
  });

  test('Navigation: Clicking a product link navigates to detail page', async () => {
     render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Find the link for "Laptop" (id: 1)
    // Since ProductCard uses Link, we look for the text "View Details" or click the link container
    // Let's assume the link text is "View Details" as typically implemented or instructed
    const links = screen.getAllByText(/View Details/i);
    expect(links.length).toBeGreaterThan(0);
    
    // Click the first one (Laptop, ID 1)
    fireEvent.click(links[0]);

    // Should navigate to detail page
    // We expect "Product ID: 1" or similar text based on the requirement to show ID
    await waitFor(() => {
        expect(screen.getByText(/Product ID:/i)).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  test('Dynamic Params: ProductDetail uses useParams to show ID', () => {
    // Render ProductDetail directly with a specific route parameter
    render(
      <MemoryRouter initialEntries={['/product/999']}>
        <Routes>
            <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('999')).toBeInTheDocument();
  });
  
});
