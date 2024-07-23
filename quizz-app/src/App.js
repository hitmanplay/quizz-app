import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css'
import AppRouter from './router/AppRouter';
import GlobalStore from './store';

function App() {
  return (
  <GlobalStore>
    <BrowserRouter>
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  </GlobalStore>
  );
}

export default App;
