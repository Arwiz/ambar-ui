'use client'
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SubmitButton } from '../../components/SubmitButton';
import { Box } from '@/components/Box';
import { Bucket } from '@/components/Bucket';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SearchInput } from '@/components/SearchInput';
import { SortBucket } from '@/components/SortBucket';
import { SortableTable } from '@/components/SortableTable';
import { Question } from '@/interface';
import { QuestionContextProvider } from '@/context/question.context.provider';
import { QuestionContext, QuestionContextValue } from '@/context/question.context';


import { addQuestion, removeQuestion } from '@/redux/store/questionsSlice';
import { RootState } from '@/redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
    
interface BlogContent {
    title: string;
    content: string;
}

const QuestionListComponent = (props: any) => {
    const dispatch = useDispatch()
  
    const allQuestons = useSelector((state: RootState) => state.questions.questions);
   
    const questionContextValue: QuestionContextValue = useContext(QuestionContext);

    const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  
  
    useEffect(() => {      
    }, []);
  
   
  const navigateToCreateBlog = () => {
    console.log('CArds', selectedQuestions);  

    };
    
      
    const succesHAndler = (item: any) => {
      setSelectedQuestions((prevMovies) => [...prevMovies, item]);
      dispatch(removeQuestion(item));      
    };


    return (
        <QuestionContextProvider>
         <DndProvider backend={HTML5Backend}>
         <div className="flex-1 bg-slate-400">
          
            <div className="flex flex-row ">
              <div className="overflow-scroll w-2/5">
                        <div className="flex items-center"></div>
                        <SearchInput />
                        <ul>
                            {allQuestons.map((question: Question) => <Box item={question} key={question._id} name={question.text} movedItemSuccesHanlder={succesHAndler}>
                                <h1 className='text-small'>{question.type}</h1>
                            </Box>)}
                         </ul>
            </div>
            <div className="flex-1 bg-slate-500 overflow-scroll">        
              <SubmitButton onClick={navigateToCreateBlog} title="Creat Audit" buttonStyle={''}/>
                <Bucket iamDroped={() => {
                   console.log('I am dropping to TOOD');
                  }}>
                <SortBucket cards={selectedQuestions} removeCard={function (question: Question): void {
                    throw new Error('Function not implemented.');
                  } } ></SortBucket>
                <SubmitButton onClick={navigateToCreateBlog} title="Save Audit" buttonStyle={''}/>
              </Bucket> 
              </div>
              
              {/* <div className="flex-1 bg-slate-500 overflow-scroll">        
               <Bucket iamDroped={() => {
                  console.log('I am dropping to DONE');
                  }}>
                  <SortBucket cards={selectedQuestions}></SortBucket>
                  <SubmitButton onClick={navigateToCreateBlog} title="Save Audit" buttonStyle={''}/>
                </Bucket> 
              </div> */}
        </div>
      </div>
      </DndProvider>
    </QuestionContextProvider> 
  )
};

export default QuestionListComponent;

