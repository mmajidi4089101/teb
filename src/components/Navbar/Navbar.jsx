import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import CartIcon from '../../features/products/components/CartIcon';

function Navbar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onChangeLocale = (e) => {
    const selectedLang = e.target.value;
    console.log(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0  ${
        scrolled ? 'bg-slate-600 shadow-lg' : 'bg-slate-500'
      }`}
    >
      <div className=" flex w-full flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Logo
          </span>
        </div>
        <CartIcon />

        <div className="flex md:order-2">
          <div className="mr-4">
            <select
              onChange={onChangeLocale}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block "
            >
              <option value="en">English</option>
              <option value="fa">فارسی</option>
            </select>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-black/90 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <HiX className="w-6 h-6 text-white" />
            ) : (
              <HiMenuAlt1 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen
              ? 'max-h-screen w-screen opacity-100 visible'
              : 'max-h-0 opacity-0 w-screen invisible md:visible md:opacity-100 md:max-h-screen'
          } w-full md:block md:w-auto transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <ul className="flex flex-col p-4 md:p-0 md:px-2 md:py-1 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white/90 font-bold rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-500 md:bg-transparent md:text-blue-500'
                      : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500'
                  } md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white/90 font-bold rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-500 md:bg-transparent md:text-blue-500'
                      : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500'
                  } md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marakez"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white/90 font-bold rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-500 md:bg-transparent md:text-blue-500'
                      : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500'
                  } md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('marakez')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/majalesalamt"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white/90 font-bold rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-500 md:bg-transparent md:text-blue-500'
                      : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500'
                  } md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('majales')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nobat"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white/90 font-bold rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-500 md:bg-transparent md:text-blue-500'
                      : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500'
                  } md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('nobat')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white/90 font-bold rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-500 md:bg-transparent md:text-blue-500'
                      : 'hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500'
                  } md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                {t('products')}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
