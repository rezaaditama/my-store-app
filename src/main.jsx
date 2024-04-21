import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/index.jsx';
import RegisterPage from './pages/RegisterPage/index.jsx';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
