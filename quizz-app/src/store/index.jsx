import React, { createContext, useContext, useState } from "react";
import axios from 'axios'

export const GlobalContext = createContext();

export const useStore = () => {
    return useContext(GlobalContext);
}

export const GlobalStore = ({ children }) => {
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0);

    console.log(questions)
    
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