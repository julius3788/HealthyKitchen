import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-12 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">FOODIE</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-6">
              Your trusted partner for healthy and delicious meals. We believe that eating well should be enjoyable and accessible to everyone, with fresh ingredients and nutritious recipes.
              <br />
              Transforming your eating habits one meal at a time.
            </p>
            <div className="text-gray-600 dark:text-gray-300">
              <p className="mb-1 font-medium">Jakarta, Indonesia</p>
              <p className="font-medium">+91 123456789</p>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Important Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Login'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Login'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Login'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            ©copyright 2025 All rights reserved | Made with by React & Tailwindcss 3
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;