import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import cl from './Form.module.css'
import Categories from '../../../data/Categories';
import { useStore } from '../../../store';


const Form = () => {
      const [category, setCategory] = useState<string | undefined | number>(27);
      const [difficulty, setDifficulty] = useState<string>('easy')
      const navigate = useNavigate();
      const { fetchQuestions } = useStore();



      const handleSubmit = () => {
        fetchQuestions(category, difficulty);
        navigate('/quizz');
      }

    return(
        <form action="">
            <label htmlFor="" className={cl.form}>Choose Difficult
                <select name="" id="" className={cl.selects} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                    <option value="easy" key="Easy">Easy</option>
                    <option value="medium" key="Medium">Medium</option>
                    <option value="hard" key="Hard">Hard</option>
                </select>
            </label>
            <label htmlFor="">Choose Theme
                <select name="" id="" className={cl.selects} onChange={(e) => setCategory(e.target.value)} value={category}>
                {Categories.map(el =><option value={el.value} key={el.category}>{el.category}</option> )}
                </select>
            </label>
            <button className={cl.submit} onClick={handleSubmit}>Submit</button>
        </form>
    );
}
export default Form