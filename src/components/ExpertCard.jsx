import React from "react";

const ExpertCard = ({ expert }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col border border-gray-200 overflow-hidden">
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center justify-between w-full px-2 mt-2 mb-1">
        <h3 className="text-xl font-semibold text-gray-800">{expert.name}</h3>
        <div className="flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-red-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-teal-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.314l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.001 3.001 0 000-4.314l4.94-2.47A3 3 0 0015 8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start w-full px-2">
        <p className="text-sm text-gray-500 mb-2">{expert.specialization}</p>
        <div className="flex items-center space-x-2 mb-3">
          {expert.badges &&
            expert.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {badge}
              </span>
            ))}
        </div>
        <p className="text-sm text-gray-600 mb-1">Starting from</p>
        <p className="text-2xl font-bold text-teal-600 mb-2">{expert.price}</p>
        <p className="text-sm text-gray-600 mb-4">
          {expert.role || "Professor"} | {expert.experience}
        </p>
        <div className="relative w-full mb-4">
          <select className="block w-full p-2 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 pr-8">
            <option value="30">30 Minutes</option>
            <option value="60">60 Minutes</option>
            <option value="90">90 Minutes</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.725c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          <span className="text-gray-700 font-medium">{expert.rating}</span>
          <span className="text-gray-500 text-sm ml-1">({expert.reviews})</span>
        </div>
        <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-md">
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default ExpertCard;
