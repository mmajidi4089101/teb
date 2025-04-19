"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Products() {
  const { t } = useTranslation("nav");
  const [isSubmenuProductsOpen, setIsSubmenuProductsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMenu2Open, setIsMenu2Open] = useState(false);

  return (
    <>
      {/* under menu the mobile */}

      <li className="relative w-full md:hidden transition-all duration-300 ease-in">
        <button
          onClick={() => setIsSubmenuProductsOpen(!isSubmenuProductsOpen)}
          className="w-full flex justify-between items-center py-2 px-3 transition-all duration-300 ease-in text-white/90 font-bold rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
        >
          {t("products")}
          <svg
            className={`w-4 h-4 ml-1 md:hidden transition-transform duration-300 ${
              isSubmenuProductsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <ul
          className={`
            bg-slate-600 rounded-lg shadow-md 
            md:hidden 
            transition-all duration-300 ease-in overflow-hidden origin-top transform
            ${
              isSubmenuProductsOpen
                ? "scale-y-100 opacity-100 max-h-96"
                : "scale-y-0 opacity-0 max-h-0"
            }
          `}
        >
          <li>
            <NavLink
              to="/about/history"
              className="block px-4 py-2 text-white hover:bg-slate-500"
              onClick={() => setIsOpen(false)}
            >
              <span>under the menu1</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/team"
              className="block px-4 py-2 text-white hover:bg-slate-500"
              onClick={() => setIsOpen(false)}
            >
              <span>under the menu2</span>
            </NavLink>
          </li>
        </ul>
      </li>
      {/* under menu the desktop */}
      <li
        onMouseEnter={() => setIsProductsOpen(true)}
        onMouseLeave={() => setIsProductsOpen(false)}
        className="relative w-full  hidden md:block transition-all duration-300 ease-in"
      >
        <button
          onClick={() => setIsSubmenuProductsOpen(!isSubmenuProductsOpen)}
          className="w-full flex justify-between items-center py-2 px-3 transition-all duration-300 ease-in text-white/90 font-bold rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
        >
          {t("products")}
        </button>
        <ul
          className={`fixed flex-col justify-center top-14  right-[35%]  w-28 rounded-lg min-h-44  bg-slate-600 shadow-inner py-2 z-50 transition-all duration-500 ease-in-out ${
            isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 text-white hover:bg-slate-500  hover:rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <span>menu1</span>
            </NavLink>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsMenu2Open(true)}
            onMouseLeave={() => setIsMenu2Open(false)}
          >
            <button
              className="block px-4 py-2 text-white hover:bg-slate-500  hover:rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex  items-center">
                <span>menu2</span>
                <svg
                  className={`w-4 h-4 ml-1  transition-transform duration-300 -rotate-90`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ul
                className={`fixed flex-col justify-center top-28 right-[35%]  w-28 rounded-lg min-h-48  bg-slate-600 shadow-lg py-2 z-50 transition-all duration-500 ease-in-out ${
                  isMenu2Open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-white hover:bg-slate-500  hover:rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>menu</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-white hover:bg-slate-500 hover:rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>menu</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-white hover:bg-slate-500  hover:rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>menu</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block px-4 py-2 text-white hover:bg-slate-500 hover:rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>menu</span>
                  </NavLink>
                </li>
              </ul>
            </button>
          </li>
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 text-white hover:bg-slate-500  hover:rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <span>menu3</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 text-white hover:bg-slate-500 hover:rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <span>menu4</span>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
}

export default Products;
