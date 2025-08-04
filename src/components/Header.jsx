import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-26 flex items-center justify-between">
      <div className="flex items-center space-x-40">
        <div
          className="text-2xl font-semibold text-gray-800"
          style={{ fontFamily: "cursive", fontStyle: "italic" }}
        >
          Logo
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-teal-600">
            Home
          </a>
          <a href="#" className="hover:text-teal-600">
            Experts
          </a>
          <a href="#" className="hover:text-teal-600">
            Categories
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
          Login
        </button>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
          Become an Expert
        </button>
      </div>
    </header>
  );
};

export default Header;
