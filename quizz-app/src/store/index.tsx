import React, { createContext, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import axios from 'axios'

type QuestionType = {
  incorrect_answers: string[],
  correct_answer: string,
  question: string
}

interface IGlobalContext {
  questions: QuestionType[],
  score: number,
  setScore: React.Dispatch<SetStateAction<number>>,
  handleReset: () => void,
  fetchQuestions: (category: string, difficulty: string) => void
}


export const GlobalContext = createContext<IGlobalContext>({
  questions: [],
  score: 0,
  setScore: () => {},
  handleReset: () => {},
  fetchQuestions: () => {},
});

export const useStore = () => {
    return useContext(GlobalContext);
}

export const GlobalStore: FC<PropsWithChildren> = ({ children }) => {
    const [questions, setQuestions] = useState<[]>([])
    const [score, setScore] = useState<number>(0);

    
    const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
          }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );
    
        setQuestions(data.results);
      };

      const handleReset = () => {
        setQuestions([])
        setScore(0)

      }
    return(
        <GlobalContext.Provider value={{
            questions,
            score,
            setScore,
            handleReset,
            fetchQuestions
        }}>
            { children }
        </GlobalContext.Provider>
    );
}
export default GlobalStore