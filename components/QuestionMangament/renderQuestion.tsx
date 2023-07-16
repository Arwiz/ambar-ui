/** @format */

import React, { useState } from "react";
import { question } from "./question";

export default function RenderQuestion() {
  const [formValue, setFormValue] = useState(question);
  const handleSubmit = () => {};
  const inputValueType = ["BOOLEAN", "CHECK_BOX"];
  return (
    <>
      <div
        className="grid grid-rows mt-5 drop-shadow bg-cover bg-center"
        style={{
          marginLeft: "1%",
          marginRight: "1%",

          // backgroundImage: url("question.jpg"),
          // backgroundColor: "#fafafa",
        }}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <div
            className="mt-2"
            style={{
              minHeight: "40vh",
              maxHeight: "69vh",
              overflowY: "scroll",
            }}
          >
            {formValue.map((item, index) => {
              return (
                <div className="row grid grid-cols-2 gap-3" key={index}>
                  <div className="col">
                    <div
                      className="mb-4 inline-block"
                      style={{ width: "100%" }}
                    >
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="questionTitle"
                        name="questionTitle"
                        type="text"
                        readOnly
                        required
                        value={formValue[index]?.questionTitle}
                        // placeholder="Enter Question"
                        // onChange={(e) => {
                        //   handleChange(e, formValue[index].id);
                        // }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="mb-4 inline-block"
                      style={{ width: "100%" }}
                    >
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Answer
                      </label>
                      {inputValueType.includes(
                        formValue[index].questionType
                      ) ? (
                        RenderHtmlElement(
                          formValue[index].questionType,
                          formValue[index]?.questionOptions
                        )
                      ) : (
                        <>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="questionTitle"
                            name="questionTitle"
                            type={HandleInput(formValue[index].questionType)}
                            required
                            // value={formValue[index].questionTitle}
                            // placeholder="Enter Question"
                            // onChange={(e) => {
                            //   handleChange(e, formValue[index].id);
                            // }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto table pb-3">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              type="button"
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleGet(e);
              //   // setFormValue(intial);
              // }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function HandleInput(inputValue: string) {
  switch (inputValue) {
    case "TEXT":
      return "text";

    case "INTEGER":
      return "number";
    case "DATE":
      return "date";
    case "CHECK_BOX":
      return "checkbox";
  }
}

function RenderHtmlElement(inputValue: string, option: []) {
  switch (inputValue) {
    case "CHECK_BOX":
      const element = (
        <div className="row grid grid-cols-5 gap-3">
          {option.map((item, i) => {
            return (
              <>
                <div key={i}>
                  <input name={item} id={item} value={item} type="checkbox" />
                  <label>{item}</label>
                </div>
              </>
            );
          })}
        </div>
      );
      return element;
    case "BOOLEAN":
      const element1 = (
        <div className="row">
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value=" true">YES</option>
            <option value="false">False</option>
          </select>
        </div>
      );
      return element1;
  }
}
