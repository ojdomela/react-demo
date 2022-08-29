import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Homepage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductOverview from './pages/ProductOverview/ProductOverview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductOverview />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
