import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;