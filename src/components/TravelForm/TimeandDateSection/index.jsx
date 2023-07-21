import React, { useState } from 'react';

const TimeAndDateSection = ({ dateTime, setDateTime }) => {
  return (
    <div className="mb-4">
      <label htmlFor="dateTime" className="block mb-2 text-sm font-medium">
        Time and Date:
      </label>
      <input
        type="datetime-local"
        id="dateTime"
        className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />
    </div>
  );
};

export default TimeAndDateSection;
