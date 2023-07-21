// FriendsSection.js
import React, { useState } from 'react';
import  Button from '../../Button'

const FriendsSection = ({ friends, handleAddFriend, handleRemoveFriend, friendName, setFriendName, friendLocation, setFriendLocation }) => {
  return (
    <div className="mb-4">
      <label htmlFor="friends" className="block mb-2 text-sm font-medium">
        Add Friends:
      </label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            value={friendLocation}
            onChange={(e) => setFriendLocation(e.target.value)}
            required
          />
        </div>
        <Button
          type="button"
          onClick={handleAddFriend}
          className="col-span-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded focus:outline-none"
        >
          Add Friend
        </Button>
      </div>

      {/* Display added friends */}
      {friends.length > 0 && (
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Added Friends:</label>
          {friends.map((friend, index) => (
            <div key={index} className="flex items-center mb-2">
              <div className="mr-2">{friend.name}:</div>
              <div className="text-gray-700">{friend.location}</div>
              <Button
                type="button"
                onClick={() => handleRemoveFriend(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsSection;
