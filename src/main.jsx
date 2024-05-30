import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/index.jsx';
import RegisterPage from './pages/RegisterPage/index.jsx';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import Production from './pages/Production';
import AboutPage from './pages/AboutPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/production' element={<Production />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
