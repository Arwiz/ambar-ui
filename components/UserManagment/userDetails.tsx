/** @format */

import React from "react";
import { HiUserCircle } from "react-icons/hi";

export default function UserDetails({ userInfo }) {
  return (
    <div>
      <div className="flex justify-center">
        <HiUserCircle size={50} style={{ marginBottom: " 10px" }} />
      </div>
      <div className="container mt-5">
        <div className="columns-2 pl-2 grid">
          <div className="mb-4 inline-block">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name: Jhone
            </label>
          </div>
          <div className="mb-4 inline-block">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Father Name: Jhone
            </label>
          </div>
          <div className="mb-4 inline-block">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address: jkjgamgnasjkn
            </label>
          </div>
          <div className="mb-4 inline-block">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number: 234567896
            </label>
          </div>
        </div>
      </div>
    </div>
    //     <div className="flex items-center space-x-4">

    // <HiUserCircle/>
    //       {/* <img src={userInfo.imageUrl} alt={userInfo.name} className="w-20 h-20 rounded-full" /> */}
    //       <div>
    //         <h2 className="text-lg font-bold">{userInfo.name}</h2>
    //         <p className="text-gray-500">{userInfo.bio}</p>
    //       </div>
    //     </div>
  );
}
