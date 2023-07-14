import { ReactNode } from 'react';
import { QuestionContext, QuestionContextValue } from './question.context';
import { QuestionTypeEnum } from '@/enums';
import { useDispatch } from 'react-redux';

interface QuestionContextProviderProps {
  children: ReactNode;
}

export const QuestionContextProvider = ({ children }: QuestionContextProviderProps) => {

    const dispatch = useDispatch();
  const addQuestion = (text: string, type: QuestionTypeEnum, options?: string[]) => {
    // Implement your addQuestion logic here
  };
    
    const getAllQuestions = () => {
        // dispatch
    }
    

  const questionContextValue: QuestionContextValue = {
    questions: [],
      addQuestion,
    getAllQuestions
  };

  return (
    <QuestionContext.Provider value={questionContextValue}>
      {children}
    </QuestionContext.Provider>
  );
};
