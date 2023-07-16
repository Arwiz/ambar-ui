/** @format */

export const question = () => {
  return [
    {
      id: 0,
      questionTitle: "Enter Name",
      questionType: "TEXT",
      questionOptions: [],
      required: true,
    },
    ,
    {
      id: 1,
      questionTitle: "Is Required",
      questionType: "BOOLEAN",
      questionOptions: [true, false],
      required: true,
    },

    {
      id: 2,
      questionTitle: "Enter Age",
      questionType: "INTEGER",
      questionOptions: [],
      required: true,
    },
    {
      id: 4,
      questionTitle: "Enter Joining Date",
      questionType: "DATE",
      questionOptions: [],
      required: true,
    },
    {
      id: 5,
      questionTitle: "Enter Hobbies",
      questionType: "CHECK_BOX",
      questionOptions: ["cricket", " football", " reading"],
      required: true,
    },
    {
      id: 6,
      questionTitle: "Enter Hobbies",
      questionType: "MULTI_SELECT",
      questionOptions: ["cricket", " football", " reading"],
      required: true,
    },
  ];
};

// "",
//   "",
//   "",
//   "DICTIONARY",
//   "KEY_VALUE",
//   "OPTION",
//   "MULTI_SELECT",
//   "",
//   "",
//   "COST",
//   "FILE",
//   "LOG",
