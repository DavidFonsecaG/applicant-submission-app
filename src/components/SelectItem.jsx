import React from 'react';

const SelectItem = ({ type }) => {

  return (
    <div className="flex-grow grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Select {type}</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Select {type} to get started.</p>
        </div>
    </div>
  )
};

export default SelectItem;