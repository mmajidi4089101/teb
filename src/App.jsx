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

        {/* فوتر */}
        <footer className="bg-slate-800 text-white py-8 mt-auto">
          <div className="container mx-auto text-center space-y-6">
            {/* ردیف 1: کپی رایت */}
            <div className="text-center mb-4">
              <p>© 2025 تمامی حقوق محفوظ است</p>
            </div>

            {/* ردیف 2: لینک‌های مهم */}
            <div className="flex justify-center gap-6 mb-6 flex-wrap">
              <NavLink to="/about" className="text-white hover:text-orange-500 transition duration-300">
                درباره ما
              </NavLink>
              <NavLink to="/products" className="text-white hover:text-orange-500 transition duration-300">
                محصولات
              </NavLink>
              <NavLink to="/nobat" className="text-white hover:text-orange-500 transition duration-300">
                نوبت‌دهی
              </NavLink>
              <NavLink to="/marakez" className="text-white hover:text-orange-500 transition duration-300">
                مراکز
              </NavLink>
            </div>

            {/* ردیف 3: شبکه‌های اجتماعی */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mb-6">
              <a href="#" className="text-white hover:text-blue-500 transition duration-300">
                <i className="fab fa-facebook-f text-xl"></i> {/* آیکن فیسبوک */}
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                <i className="fab fa-twitter text-xl"></i> {/* آیکن توییتر */}
              </a>
              <a href="#" className="text-white hover:text-pink-500 transition duration-300">
                <i className="fab fa-instagram text-xl"></i> {/* آیکن اینستاگرام */}
              </a>
              <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                <i className="fab fa-linkedin text-xl"></i> {/* آیکن لینکدین */}
              </a>
              <a href="#" className="text-white hover:text-green-500 transition duration-300">
                <i className="fab fa-whatsapp text-xl"></i> {/* آیکن واتساپ */}
              </a>
              <a href="#" className="text-white hover:text-red-500 transition duration-300">
                <i className="fab fa-youtube text-xl"></i> {/* آیکن یوتیوب */}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
