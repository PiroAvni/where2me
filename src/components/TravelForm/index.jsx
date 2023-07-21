import React, { useState } from 'react';
import FriendsSection from './FriendsSection';
import TransportOption from './TransportOption';
import TimeAndDateSection from './TimeandDateSection';
import PreferencesSection from './PreferencesSection';
import Button from '../Button'
import { FaCar, FaTrain, FaPlane, FaBicycle } from 'react-icons/fa';


const TravelForm = () => {
  // State variables and event handlers...
 //State variables to store user inputs
  const [currentLocation, setCurrentLocation] = useState('');
  const [transport, setTransport] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [preferences, setPreferences] = useState({
    restaurant: false,
    park: false,
    attractions: false,
    museums: false,
    coffee: false,
    shopping: false,
  });
  const [friends, setFriends] = useState([]);
  const [friendName, setFriendName] = useState('');
  const [friendLocation, setFriendLocation] = useState('');

  const [showTransportOptions, setShowTransportOptions] = useState(false);

    const handleTransportClick = (transport) => {
    setTransport(transport);
    setShowTransportOptions(false);
  };

  // Handler for preference selection checkboxes
  const handlePreferenceChange = (event) => {
    const { name, checked } = event.target;
    setPreferences((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

 // Handler for adding a friend
const handleAddFriend = () => {
  if (friendName.trim() !== '' && friendLocation.trim() !== '') {
    const newFriend = {
      name: friendName,
      location: friendLocation,
    };
    setFriends([...friends, newFriend]);
    setFriendName('');
    setFriendLocation('');
  }
};

// Handler for removing a friend
const handleRemoveFriend = (index) => {
  const updatedFriends = [...friends];
  updatedFriends.splice(index, 1);
  setFriends(updatedFriends);
};


  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform actions with the form data, like sending it to the server or storing it in a state management solution.
    console.log({
      currentLocation,
      transport,
      dateTime,
      preferences,
    });
  };


  return (
    <form className="p-4 bg-gray-100 border border-gray-300 rounded shadow-md lg:w-[25%] ml-3  top-[150px] fixed">
      <h2 className="text-xl font-semibold mb-4">Travel Form</h2>
      {/* Current Location section */}
      <div className="mb-4">
        <label htmlFor="currentLocation" className="block mb-2 text-sm font-medium">
          Current Location:
        </label>
        <input
          type="text"
          id="currentLocation"
          className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
          required
        />
      </div>

      
      {/* Friends section */}
      <FriendsSection
        friends={friends}
        handleAddFriend={handleAddFriend}
        handleRemoveFriend={handleRemoveFriend}
        friendName={friendName}
        setFriendName={setFriendName}
        friendLocation={friendLocation}
        setFriendLocation={setFriendLocation}
      />

      {/* Transport Selection section */}
      <div className="mb-4">
         <label htmlFor="transport" className="block mb-2 text-sm font-medium">
           Transport Selection:
         </label>
         <div className="relative w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500">
           <div
            className="flex items-center cursor-pointer p-2"
            onClick={() => setShowTransportOptions(!showTransportOptions)}
          >
            {transport === 'car' && <FaCar className="mr-2" />}
            {transport === 'train' && <FaTrain className="mr-2" />}
            {transport === 'plane' && <FaPlane className="mr-2" />}
            {transport === 'bicycle' && <FaBicycle className="mr-2" />}
            {transport ? transport.charAt(0).toUpperCase() + transport.slice(1) : 'Select a transport'}
          </div>
          {showTransportOptions && (
            <div className="absolute z-10 w-full bg-white border border-gray-400 mt-2 rounded">
              <TransportOption
                icon={FaCar}
                label="Car"
                selected={transport === 'car'}
                onClick={() => handleTransportClick('car')}
              />
              <TransportOption
                icon={FaTrain}
                label="Train"
                selected={transport === 'train'}
                onClick={() => handleTransportClick('train')}
              />
              <TransportOption
                icon={FaPlane}
                label="Plane"
                selected={transport === 'plane'}
                onClick={() => handleTransportClick('plane')}
              />
              <TransportOption
                icon={FaBicycle}
                label="Bicycle"
                selected={transport === 'bicycle'}
                onClick={() => handleTransportClick('bicycle')}
              />
            </div>
          )}
        </div>
      </div>


      {/* Time and Date section */}
      <TimeAndDateSection dateTime={dateTime} setDateTime={setDateTime} />

      {/* Preferences section */}
      <PreferencesSection preferences={preferences} handlePreferenceChange={handlePreferenceChange} />

      {/* Submit button */}
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded focus:outline-none"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default TravelForm;
