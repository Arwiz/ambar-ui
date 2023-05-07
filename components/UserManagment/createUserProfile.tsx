/** @format */

import React, { useState, useEffect } from "react";
const intial = {
  firstname: "",
  lastname: "",
  city: "",
  mailaddress: "",
  phoneNumber: "",
  alternatenumber: "",
  email: "",
  officalAddress: "",
  avatar: "",
  password: "",
};
export default function createUserProfile() {
  const [formValue, setFormValue] = useState(intial);

  function handleFormdata(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleFormData(e) {
    e.preventDefault();
    console.log(formValue);
    fetch("https://ambaram-production.up.railway.app/users", {
      method: "POST",
      body: JSON.stringify({
        first_name: formValue.firstname,
        password: formValue.password,
        last_name: formValue.lastname,
        mobile: formValue.phoneNumber,
        secondary_phone: formValue.alternatenumber,
        email: formValue.email,
        city: formValue.city,
        mailing_addresss: formValue.mailaddress,
        official_address: formValue.officalAddress,
        avatar: "khjkjkjkhjkhjhj",
      }),
    });
  }
  return (
    <>
      <form
        className="w-full max-w-lg mx-auto border-2 mt-5"
        onSubmit={handleFormData}
      >
        <label className="block text-white text-sm font-bold mb-2 bg-slate-400 text-base p-2">
          Create Profile
        </label>
        <div className="container flex">
          <div className="columns-2 pl-2 grid">
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="firstname"
                type="text"
                required
                value={formValue.firstname}
                placeholder="Firstname"
                onChange={(e) => {
                  handleFormdata(e);
                }}
              />
            </div>
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Alternate Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="alternatenumber"
                type="number"
                required
                name="alternatenumber"
                value={formValue.alternatenumber}
                placeholder="Alternate Number"
                onChange={handleFormdata}
              />
            </div>
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                name="city"
                required
                value={formValue.city}
                placeholder="City"
                onChange={handleFormdata}
              />
            </div>
          </div>
          <div className="columns-2 grid pl-2">
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastname"
                type="text"
                required
                value={formValue.lastname}
                placeholder="LastName"
                onChange={handleFormdata}
              />
            </div>

            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                required
                value={formValue.email}
                placeholder="Email"
                onChange={handleFormdata}
              />
            </div>
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mailing Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mailaddress"
                type="text"
                name="mailaddress"
                required
                value={formValue.mailaddress}
                placeholder="Address"
                onChange={handleFormdata}
              />
            </div>
          </div>
          <div className="columns-2 pl-2 grid pr-2">
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="number"
                required
                name="phoneNumber"
                value={formValue.phoneNumber}
                placeholder="Phone Number"
                onChange={handleFormdata}
              />
            </div>
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                required
                value={formValue.password}
                placeholder="Password"
                onChange={handleFormdata}
              />
            </div>
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Offical Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="officalAddress"
                type="text"
                name="officalAddress"
                required
                value={formValue.officalAddress}
                placeholder="Offical Address"
                onChange={handleFormdata}
              />
            </div>
            {/* <div className="mb-4 inline-block">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name='lastname'
                  type="text"
                  required
                  value={formValue.lastname}
                  placeholder="LastName"
                  onChange={handleFormdata}
                />
              </div> */}
          </div>
        </div>
        <div className="mx-auto table">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setFormValue(intial);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
