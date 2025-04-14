// src/App.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'flowbite-react';
import Navbar from './components/Navbar/Navbar';
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import './App.css';

import { About } from './pages/About';
import { Home } from './pages/Home';
import MajaleSalamat from './pages/MajaleSalamat';
import { MarakezTahghighati } from './pages/MarakezTahghighati';
import { NobatDehi } from './pages/NobatDehi';
import Products from './pages/Products';
import ProductDitails from './pages/productDitails';

function App() {
  const { t } = useTranslation('nav');

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nobat" element={<NobatDehi />} />
            <Route path="/marakez" element={<MarakezTahghighati />} />
            <Route path="/majalesalamt" element={<MajaleSalamat />} />
            <Route path="/about" element={<About />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDitails />} />
            </Route>
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="*" element={<div>{t('error')}</div>} />
          </Routes>
        </main>
        <footer className="mt-auto p-4 bg-slate-500 text-white text-center">
          {t('footer')}
        </footer>
      </div>
    </Router>
  );
}

export default App;
