import React from "react";

const FiltersSidebar = ({ filters, handleFilterChange }) => {
  return (
    <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
        Filters
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </h2>

      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3 flex justify-between items-center">
          Language
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </h3>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {[
          "English",
          "Hindi",
          "Marathi",
          "Tamil",
          "Gujarati",
          "French",
          "German",
          "Mandarin",
        ].map((lang) => (
          <label key={lang} className="flex items-center mb-2 text-gray-600">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-teal-600 rounded"
              checked={filters.language.includes(lang)}
              onChange={() => handleFilterChange("language", lang)}
            />
            <span className="ml-2">{lang}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3 flex justify-between items-center">
          Experience
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </h3>
        {[
          "2 Years",
          "3 Years",
          "4 Years",
          "7 Years",
          "10 Years",
          "12 Years",
          "15 Years",
        ].map((exp) => (
          <label key={exp} className="flex items-center mb-2 text-gray-600">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-teal-600 rounded"
              checked={filters.experience.includes(exp)}
              onChange={() => handleFilterChange("experience", exp)}
            />
            <span className="ml-2">{exp}</span>
          </label>
        ))}
      </div>

      <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
        Apply Filter
      </button>
    </aside>
  );
};

export default FiltersSidebar;
