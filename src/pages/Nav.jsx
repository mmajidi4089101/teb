// src/pages/Nav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // وارد کردن فایل CSS

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
        activeClassName="active"
      >
        About
      </NavLink>
      <NavLink
        to="/marakez"
        className="nav-link"
        activeClassName="active"
      >
        MarakezTahghighati
      </NavLink>
      <NavLink
        to="/majalesalamt"
        className="nav-link "
        activeClassName="active"
      >
        MajaleSalamat
      </NavLink>
      <NavLink
        to="/nobat"
        className="nav-link"
        activeClassName="active"
      >
        NobatDehi
      </NavLink>
      <NavLink
        to="/products"
        className="nav-link"
        activeClassName="active"
      >
        Products
      </NavLink>
    </nav>
  );
};
