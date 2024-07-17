import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">QURAN PROGRESS APP</div>
      <nav className="flex space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/sura" 
          className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}
        >
          Sura
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}
        >
          About us
        </NavLink>
      </nav>
      <div className="flex space-x-4">
        <NavLink 
          to="/get-started" 
          className={({ isActive }) => isActive ? "bg-yellow-600 text-blue-900 px-3 py-1 rounded" : "bg-yellow-500 text-blue-900 px-3 py-1 rounded hover:bg-yellow-600"}
        >
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
