import React, { useState } from 'react';
import { ChevronDown, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <span>功能导航</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <Link
              to="/digital-twin"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <Monitor className="h-4 w-4 mr-2" />
              数字孪生
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};