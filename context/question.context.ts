import { createContext, ReactNode, useContext } from 'react';
import { Question } from '@/interface';
import { QuestionTypeEnum } from '@/enums';

export interface QuestionContextValue {
  questions: Question[];
  addQuestion: (text: string, type: QuestionTypeEnum, options?: string[]) => void;
  getAllQuestions: ()=> void;
}

export const QuestionContext = createContext<QuestionContextValue>({
  questions: [],
  addQuestion: (text, type, options) => {
    // Implement your addQuestion logic here
  },
  getAllQuestions: () => {
    // Implement your addQuestion logic here
  },
});
