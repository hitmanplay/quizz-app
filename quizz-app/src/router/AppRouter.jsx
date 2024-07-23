import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from '../Pages/Main/Main';
import QuizzPage from '../Pages/Quizz/Quizz';
import ResultPage from '../Pages/Result/Result';

const AppRouter = () => {
    return(
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/quizz' element={<QuizzPage />} />
        <Route path='/result' element={<ResultPage />} />
    </Routes>
    );
}
export default AppRouter