import React from 'react';

const TransportOption = ({ icon, label, selected, onClick }) => {
  return (
    <div
      className={`flex items-center cursor-pointer p-2 ${
        selected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {React.createElement(icon, { className: 'mr-2' })}
      {label}
    </div>
  );
};

export default TransportOption;
