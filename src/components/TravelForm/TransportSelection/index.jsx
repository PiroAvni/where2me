import React, { useState } from 'react';
import { FaCar, FaTrain, FaPlane, FaBicycle } from 'react-icons/fa';

const TransportSelector = ({ transport, setTransport }) => {
  const [showTransportOptions, setShowTransportOptions] = useState(false);

  const transportOptions = [
    { icon: FaCar, label: 'Car', value: 'car' },
    { icon: FaTrain, label: 'Train', value: 'train' },
    { icon: FaPlane, label: 'Plane', value: 'plane' },
    { icon: FaBicycle, label: 'Bicycle', value: 'bicycle' },
  ];

  const handleTransportClick = (transportValue) => {
    setTransport(transportValue);
    setShowTransportOptions(false);
  };

  return (
    <div className="mb-4">
      <label htmlFor="transport" className="block mb-2 text-sm font-medium">
        Transport Selection:
      </label>
      <div className="relative w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500">
        <div
          className="flex items-center cursor-pointer p-2"
          onClick={() => setShowTransportOptions(!showTransportOptions)}
        >
          {transport ? (
            <div className="flex items-center">
              {React.createElement(transport.icon, { className: 'mr-2' })}
              {transport.label}
            </div>
          ) : (
            'Select a transport'
          )}
        </div>
        {showTransportOptions && (
          <div className="absolute z-10 w-full bg-white border border-gray-400 mt-2 rounded">
            {transportOptions.map((option) => (
              <div
                key={option.value}
                className={`flex items-center cursor-pointer p-2 ${
                  transport === option.value ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleTransportClick(option.value)}
              >
                {React.createElement(option.icon, { className: 'mr-2' })}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransportSelector;
