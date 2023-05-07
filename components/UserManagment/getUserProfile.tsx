/** @format */

import React, { useState } from "react";
import UserDetails from "./userDetails";

const user = {
  name: "John Doe",
  imageUrl: "https://example.com/john-doe.jpg",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const GetUserProfile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    setShowUserDetails(true);
  };

  return (
    <>
      {!showUserDetails && (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md mt-5">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone number
            </label>
            <input
              type="password"
              name="password"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      )}
      {showUserDetails && <UserDetails userInfo={user} />}
    </>
  );
};

export default GetUserProfile;
