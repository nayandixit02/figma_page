import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 px-6 md:px-12 mt-8 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {" "}
        <div className="md:col-span-2 lg:col-span-2">
          {" "}
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Logo</h3>
          <p className="text-sm text-gray-500 mb-4">
            Subscribe to our newsletter for the latest features and updates
            directly to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email here"
              className="p-2 rounded-l-lg bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 flex-grow"
            />
            <button className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition-colors">
              Submit
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            By subscribing, you consent to our Privacy Policy and receiving
            updates.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-teal-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-teal-600 flex items-center">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 flex items-center">
                <i className="fab fa-instagram mr-2"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 flex items-center">
                <i className="fab fa-twitter mr-2"></i> X
              </a>{" "}
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 flex items-center">
                <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 flex items-center">
                <i className="fab fa-youtube mr-2"></i> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex justify-center md:justify-center md:pl-40 mt-8">
        {" "}
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
          Become an Expert
        </button>
      </div>

      <div className="flex justify-around border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Xpertime. All rights reserved.{" "}
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-teal-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-teal-600">
            Terms of Service
          </a>
          <a href="#" className="hover:text-teal-600">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
