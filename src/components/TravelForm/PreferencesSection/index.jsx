import React from 'react';

const PreferencesSection = ({ preferences, handlePreferenceChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Preferences:</label>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(preferences).map((preference) => (
          <label key={preference} className="flex items-center">
            <input
              type="checkbox"
              name={preference}
              className="mr-2 focus:ring-offset-0 focus:ring-2 focus:ring-blue-500"
              checked={preferences[preference]}
              onChange={handlePreferenceChange}
            />
            {preference.charAt(0).toUpperCase() + preference.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PreferencesSection;
