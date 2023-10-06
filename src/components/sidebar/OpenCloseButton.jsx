import React from 'react';

const OpenCloseButton = ({ isSidebarOpen, handleSidebarOpen }) => {

  return (
    <div className={`${
        isSidebarOpen ? "rotate-180" : ""
    } absolute -right-6 flex h-4 w-4 rounded-full bg-white text-gray-500 hover:text-gray-700 items-center justify-center shadow-md cursor-pointer transition-transform duration-1000`} 
        onClick={handleSidebarOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
  );
};

export default OpenCloseButton;
