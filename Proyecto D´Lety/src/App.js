import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { ScrollToTop } from './components/ScrollToTop';
import Loader from './view/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './view/Home';
import Products from './view/Products';
import We from './view/We';
import Contact from './view/Contact';

const ENABLE_LOADER = false; // Cambiar a false para desactivar el loader

function PageWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(ENABLE_LOADER);

  useEffect(() => {
    if (!ENABLE_LOADER) return;

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading && ENABLE_LOADER) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/we" element={<We />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageWrapper />
    </Router>
  );
}

export default App;