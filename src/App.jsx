import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const Retail = lazy(() => import('./pages/Retail'));
const Furniture = lazy(() => import('./pages/Furniture'));
const Fashion = lazy(() => import('./pages/Fashion'));
const Jewelry = lazy(() => import('./pages/Jewelry'));
const Healthcare = lazy(() => import('./pages/Healthcare'));

// Loading fallback component
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface text-primary">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar ctaText="Get Started" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/healthcare" element={<Healthcare />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
