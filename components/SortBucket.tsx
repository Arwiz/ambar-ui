import update from 'immutability-helper'
import type { FC } from 'react'
import { forwardRef, useCallback, useState ,  Ref, ForwardRefRenderFunction, useEffect, memo } from 'react'

import { SortCard } from './SortCard'
import { Question } from '@/interface'

const style = {
	// width: 400,
}


export interface SortBucketProps {
  // Props for your component
    cards: Question[],
    removeCard: (question: Question)=>void
}


const SortBucketComponent: ForwardRefRenderFunction<HTMLDivElement, SortBucketProps> = (props: SortBucketProps, ref) => {
    const {  cards, removeCard } = props;

    const [questions , setQuestions] = useState<Question[]>([])

   useEffect(() => {
       setQuestions(()=> cards);
   }, [cards])
    

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setQuestions((prevCards: Question[]) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex] as Question],
                ],
            }),
        )
    }, [])

    const renderCard = useCallback(
        (card: Question, index: number) => {

            return (
                <SortCard
                    key={card._id}
                    index={index}
                    id={card._id}
                    text={card.text}
                    moveCard={moveCard}
                    removeCard={removeCard}
                />
            )
        },
        [],
    )

    return (
        <>
            <div style={style}>{questions.map((card, i) => renderCard(card, i))}</div>
        </>
    )
}

// export const SortBucket =  forwardRef<HTMLDivElement, SortBucketProps>(memo(SortBucketComponent));
export const SortBucket =  memo(SortBucketComponent);
