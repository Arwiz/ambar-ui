import { Question } from '@/interface'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QuestionState {
  questions: Question[],
  selectedQuestions: Question[],
}

const initialState: QuestionState = {
  questions: [
    {
      "_id": "64ac0615fc617fcec6a85eb7",
      "text": "What is your favorite color?",
      "type": "multiple_choice",
      "options": [
        "Red",
        "Blue",
        "Green"
      ]
    },
    {
      "_id": "64ac06ea24e33ec627d38c3a",
      "text": "What is your favorite Actor?",
      "type": "multiple_choice",
      "options": [
        "Mela",
        "Starawt",
        "Bond"
      ]
    },
    {
      "_id": "64add0bb764bc1b0a96517ae",
      "text": "What is the your test score  name?",
      "type": "multiple_choice",
      "options": [
        "One",
        "Two",
        "Three"
      ]
    },
    {
      "_id": "64aee350c449bad5c6584523",
      "text": "What is the your Favorite Number?",
      "type": "short_answer",
      "options": [],
      "tags": [
        "Simple Questions"
      ]
    },
    {
      "_id": "64aee3a1c449bad5c6584524",
      "text": "Is ChatGPT cvhavge the cwotkd ?",
      "type": "short_answer",
      "tags": [
        "IT questions"
      ]
    },
    {
      "_id": "64aee4bb8a1988c1de20c48e",
      "text": "Is ChatGPT cvhavge the wirl ?",
      "type": "short_answer123",
      "tags": [
        "IT questions"
      ]
    },
    {
      "_id": "64aee7cb02349cad5e478afc",
      "text": "Is ChatGPT cvhavge the wirl ?",
      "type": "short_answer123",
      "tags": [
        "IT questions"
      ]
    },
    {
      "_id": "64aee7d302349cad5e478afd",
      "text": "Is ChatGPT cvhavge the wirl ?",
      "type": "short_answer1234",
      "tags": [
        "IT questions"
      ]
    },
    {
      "_id": "64aee8d607831457f61d311f",
      "text": "Is ChatGPT cvhavge the wirl ?",
      "type": "short_answer1234e",
      "tags": [
        "IT questions"
      ]
    },
    {
      "_id": "64aee8f407831457f61d3120",
      "text": "Is ChatGPT cvhavge the wirl ?",
      "type": "short_a1234e",
      "tags": [
        "IT questions"
      ]
    },
    {
      "_id": "64af06e6785bb4fb822adb77",
      "text": "What is your name? ",
      "type": "short_answer",
      "options": [
        "arvind, mandip , kartik"
      ],
      "tags": [
        "Geneal Questions,Noraml Quesitons"
      ]
    },
    {
      "_id": "64af06e6785bb4fb822adb78",
      "text": "What is your class teacher name? ",
      "type": "short_answer",
      "options": [
        "arvind rawat, kartik rawatl , mandipo kaur"
      ],
      "tags": [
        "Favourite Questions, Noraml Quesitons"
      ]
    },
    {
      "_id": "64af07b3785bb4fb822adb79",
      "text": "What is your name? ",
      "type": "short_answer",
      "options": [
        "\"arvind\", \"mandip\" , \"kartik\""
      ],
      "tags": [
        "Geneal Questions,Noraml Quesitons"
      ]
    },
    {
      "_id": "64af07b3785bb4fb822adb7a",
      "text": "What is your class teacher name? ",
      "type": "short_answer",
      "options": [
        "arvind rawat, kartik rawatl , mandipo kaur"
      ],
      "tags": [
        "Favourite Questions, Noraml Quesitons"
      ]
    },
    {
      "_id": "64af0b2089632a849f6ef2f5",
      "text": "What is your name? ",
      "type": "short_answer",
      "options": [
        "\"arvind\"",
        " \"mandip\" ",
        " \"kartik\""
      ],
      "tags": [
        "Geneal Questions",
        "Noraml Quesitons"
      ]
    },
    {
      "_id": "64af0b2089632a849f6ef2f6",
      "text": "What is your class teacher name? ",
      "type": "short_answer",
      "options": [
        "arvind rawat",
        " kartik rawatl ",
        " mandipo kaur"
      ],
      "tags": [
        "Favourite Questions",
        " Noraml Quesitons"
      ]
    },
    {
      "_id": "64af0ccc8ef15c52a02c26cc",
      "text": "What is your name? ",
      "type": "short_answer",
      "options": [
        "\"arvind\", \"mandip\" , \"kartik\""
      ],
      "tags": [
        "Geneal Questions,Noraml Quesitons"
      ]
    },
    {
      "_id": "64af0ccd8ef15c52a02c26cd",
      "text": "What is your class teacher name? ",
      "type": "short_answer",
      "options": [
        "arvind rawat\nkartik rawatl \nmandipo kaur"
      ],
      "tags": [
      ],
    }],
  selectedQuestions: []
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      console.log(action);
      const arr = [...state.questions];
     
      state.questions = arr;
    },
    removeQuestion: (state, action: PayloadAction<Question>) => {
      console.log('action', action);
      
      const arr = [...state.questions].filter((question) => question._id !== action.payload._id);
      console.log('arr', arr);
      state.questions = arr;
    },
    reset: (state, action: PayloadAction<number>) => {
      state
    },
  },
})

// Action creators are generated for each case reducer function
export const { addQuestion, removeQuestion, reset } = questionsSlice.actions

export default questionsSlice.reducer