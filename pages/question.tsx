/** @format */

import React, { useState, useRef } from "react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import Spinner from "@/components/spinner";
import Popover from "@/components/popover";
import RenderQuestion from "@/components/QuestionMangament/renderQuestion";

const answerKey = [
  "TEXT",
  "INTEGER",
  "DATE",
  "DICTIONARY",
  "KEY_VALUE",
  "OPTION",
  "MULTI_SELECT",
  "CHECK_BOX",
  "BOOLEAN",
  "COST",
  "FILE",
  "LOG",
];
export default function Question() {
  const [formValue, setFormValue] = useState([
    {
      id: 0,
      questionTitle: "",
      questionType: "",
      questionOptions: [],
      required: true,
    },
  ]);
  const [isOptionRequired, setIsOptionRequired] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  const questionTracker = useRef(0);
  const [isSpinner, serIsSpinner] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [renderQuestion, setRenderQuestion] = useState(false);

  function handleChange(e: React.ChangeEvent<any>, index: number) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const previous = [...formValue];
    const changequestion = previous.find((item) => item.id === index);
    if (name === "questionType") {
      changequestion[e.target.name] = value;
      changequestion["questionOptions"] = [];
    } else {
      if (name === "required") {
        changequestion[e.target.name] = value === "on" ? false : true;
      } else {
        changequestion[e.target.name] = value;
      }
    }
    setFormValue(previous);
    if (
      name === "questionType" &&
      (value === "OPTION" ||
        value === "MULTI_SELECT" ||
        value === "CHECK_BOX") &&
      !isOptionRequired
    ) {
      setIsOptionRequired(true);
    }
  }

  function handleAddQuestion(e: React.ChangeEvent<any>) {
    e.preventDefault();
    let previous = [];
    previous = [...formValue];
    questionTracker.current = questionTracker.current + 1;
    previous.push({
      id: questionTracker.current,
      questionTitle: "",
      questionType: "",
      questionOptions: [],
      required: true,
    });
    setFormValue(previous);
  }

  function handleQuestionRemove(e: React.ChangeEvent<any>, index: number) {
    e.preventDefault();
    let previous = [];
    previous = [...formValue];
    previous = previous.filter((item) => item.id !== index);
    setFormValue(previous);
  }

  function addValueToOption(e: React.ChangeEvent<any>, index: number) {
    e.preventDefault();
    let previous: string[];
    const previousForm = [...formValue];
    previous = formValue[index].questionOptions;
    let filteredItem = previousForm.find((item) => item.id === index);
    previous.push(optionValue);
    filteredItem["questionOptions"] = previous;
    setFormValue(previousForm);
    setOptionValue("");
  }

  function deleteOption(
    e: React.ChangeEvent<any>,
    index: number,
    selectedOption: string
  ) {
    e.preventDefault();
    let previous = [];
    let filteredItem: {} | undefined;
    const previousForm = [...formValue];
    previous = formValue[index].questionOptions;
    previous = previous.filter((item) => item !== selectedOption);
    filteredItem = previousForm.find((item) => item.id === index);
    filteredItem["questionOptions"] = previous;
    setFormValue(previousForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    serIsSpinner(true);
    axios
      .post("https://ambaram-production.up.railway.app/questions", {
        question: formValue,
      })
      .catch((error) => {
        if (error) {
          setShowMsg(true);
          setMsg("error");
          setIsError(true);
          serIsSpinner(false);
        }
      });
    // fetch("https://ambaram-production.up.railway.app/question-bank", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     questionBank: formValue,
    //   }),
    // });
  }
  function handleGet(e) {
    e.preventDefault();
    fetch("https://ambaram-production.up.railway.app/question-bank", {
      method: "GET",
    });
  }

  return (
    <>
      <Spinner showSpinner={isSpinner} />
      <div className="container">
        <div className="row flex justify-center">
          <Popover isError={isError} msg={msg} IsPopOver={showMsg} />
        </div>
        <h1> Question Mangment</h1>
        <div
          className="row grid grid-cols-2 gap-3"
          style={{ border: " 1px solid red" }}
        >
          <div
            className="col"
            onClick={() => {
              setRenderQuestion(false);
            }}
          >
            Add Question
          </div>
          <div
            className="col"
            onClick={() => {
              setRenderQuestion(true);
            }}
          >
            view Question
          </div>
        </div>

        {!renderQuestion && (
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
            <div className="imageBack" />
            <div className="flex justify-center">Add Question</div>
            <div className="flex justify-end mr-2">
              <GrAdd
                onClick={handleAddQuestion}
                style={{ cursor: "pointer" }}
              />
            </div>
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
                    <div className="mb-4 flex" key={index}>
                      <div className="columns  ml-1" style={{ width: "50%" }}>
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
                            required
                            value={formValue[index].questionTitle}
                            placeholder="Enter Question"
                            onChange={(e) => {
                              handleChange(e, formValue[index].id);
                            }}
                          />
                        </div>

                        {isOptionRequired &&
                          (item.questionType === "OPTION" ||
                            item.questionType === "MULTI_SELECT" ||
                            item.questionType === "CHECK_BOX") && (
                            <>
                              <div
                                className="mb-4 flex "
                                style={{ width: "80%" }}
                              >
                                {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                            option
                          </label> */}
                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="questionOptions"
                                  name="questionOptions"
                                  type="text"
                                  required={item.questionOptions.length < 1}
                                  value={optionValue}
                                  placeholder="Enter option"
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setOptionValue(e.target.value);
                                  }}
                                />

                                <GrAdd
                                  onClick={(e) => {
                                    addValueToOption(e, index);
                                  }}
                                  className="mt-2 ml-1"
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </>
                          )}
                      </div>
                      <div
                        className="columns  ml-2  mr-1"
                        style={{ width: "30%" }}
                      >
                        <div
                          className="mb-4 inline-block"
                          style={{ width: "100%" }}
                        >
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Answer Type
                          </label>
                          <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="questionType"
                            name="questionType"
                            required
                            value={formValue[index].questionType}
                            onChange={(e) => {
                              handleChange(e, formValue[index].id);
                            }}
                          >
                            <option value="" disabled>
                              Select Answer Type
                            </option>
                            {answerKey.map((item, i) => {
                              return (
                                <option value={item} key={i}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        {item.questionOptions.length > 0 && (
                          <div
                            className="mb-4 inline-block"
                            style={{
                              width: "100%",
                              backgroundColor: "#f5f5f5",
                              maxHeight: "10vh",
                              overflowY: "scroll",
                            }}
                          >
                            {item.questionOptions.map((item, i) => {
                              return (
                                <div className="grid grid-cols-2" key={i}>
                                  <label> {item}</label>
                                  <TiDelete
                                    className="mt-1"
                                    onClick={(e) => {
                                      deleteOption(e, index, item);
                                    }}
                                    style={{ cursor: "pointer", width: "100%" }}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <div className="columns  ml-1" style={{ width: "10%" }}>
                        <div className="mb-4 " style={{ width: "100%" }}>
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            &nbsp;
                          </label>
                          <label className=" text-gray-700 text-sm font-bold mb-2">
                            Mandtory
                          </label>
                          <input
                            type="checkbox"
                            className="form-checkbox text-indigo-600 h-3 w-3 ml-2"
                            id="required"
                            name="required"
                            defaultChecked={formValue[index].required}
                            onChange={(e) => {
                              handleChange(e, formValue[index].id);
                            }}
                          />
                          {/* <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="questionTitle"
                          name="questionTitle"
                          type="text"
                          required
                          value={formValue[index].questionTitle}
                          placeholder="Enter Question"
                          onChange={(e) => {
                            handleChange(e, formValue[index].id);
                          }}
                        /> */}
                        </div>
                      </div>
                      <div
                        className="columns  ml-2 mr-1"
                        style={{ width: "10%" }}
                      >
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          &nbsp;
                        </label>
                        <AiOutlineDelete
                          className="mt-3"
                          onClick={(e) => {
                            handleQuestionRemove(e, item.id);
                          }}
                          style={{ cursor: "pointer" }}
                        />
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleGet(e);
                    // setFormValue(intial);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Reset
                </button>
              </div>
              {formValue.length == 0 && (
                <div className="mb-4 flex">
                  Add Question BY Clicking Add Button
                </div>
              )}
            </form>
          </div>
        )}
        {renderQuestion && <RenderQuestion />}
      </div>
    </>
  );
}
