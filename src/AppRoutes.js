import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from './pages/ProductDetail'
import LandingPage from './pages/LandingPage'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pdp" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);


export default AppRoutes;
