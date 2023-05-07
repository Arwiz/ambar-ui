/** @format */

import React, { useState, useEffect } from "react";
const contactDetails = [
  { id: 1, firstname: "", middlename: "", lastname: "", phonenumber: "" },
  { id: 2, firstname: "", middlename: "", lastname: "", phonenumber: "" },
  { id: 3, firstname: "", middlename: "", lastname: "", phonenumber: "" },
  { id: 4, firstname: "", middlename: "", lastname: "", phonenumber: "" },
  { id: 5, firstname: "", middlename: "", lastname: "", phonenumber: "" },
];

export default function AddContant() {
  const [formValue, setformValue] = useState(contactDetails);
  const [render, setRender] = useState();

  useEffect(() => {
    const _render = formValue.map((item, i) => {
      return (
        <div className="container flex" key={i}>
          <div className="columns-2 pl-2 grid">
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`firstname${i + 1}`}
                name="firstname"
                type="text"
                required
                value={item.firstname}
                placeholder="Firstname"
                onChange={(e) => {
                  handleFormdata(e, item.id);
                }}
              />
            </div>
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phonenumber"
                name="phonenumber"
                type="number"
                required
                value={item.phonenumber}
                placeholder="Phonenumber"
                onChange={(e) => {
                  handleFormdata(e, item.id);
                }}
              />
            </div>
          </div>
          <div className="columns-2 grid pl-2">
            <div className="mb-4 inline-block">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Middle Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="middleName"
                type="text"
                name="middlename"
                value={item.middlename}
                required
                placeholder="MiddleName"
                onChange={(e) => {
                  handleFormdata(e, item.id);
                }}
              />
            </div>
          </div>
          <div className="columns-2 pl-2 grid pr-2">
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
                value={item.lastname}
                placeholder="LastName"
                onChange={(e) => {
                  handleFormdata(e, item.id);
                }}
              />
            </div>
          </div>
        </div>
      );
    });
    setRender(_render);
  }, [formValue]);

  function handleFormdata(e, inputID) {
    e.preventDefault();
    const name = e.target.name;
    const previousValue = [...formValue];
    const changeItem = previousValue.find((person) => person.id === inputID);
    changeItem[name] = e.target.value;
    setformValue(previousValue);
  }
  function handleFormData(e) {
    e.preventDefault();
    console.log(formValue);
  }
  return (
    <form
      className="w-full max-w-lg mx-auto border-2 mt-5"
      onSubmit={handleFormData}
    >
      <label className="block text-white text-sm font-bold mb-2 bg-slate-400 text-base p-2">
        Add Contact
      </label>
      <div className="container h-64 overflow-y-scroll">{render}</div>

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
            setformValue(contactDetails);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
