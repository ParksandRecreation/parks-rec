import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  LoginPage from './components/LoginPage';
import  HomePage from './components/HomePage';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
         <Route path='/home' element={<HomePage />}></Route>
         <Route path="/" element={<LoginPage />}/>
        
      </Routes>
    </BrowserRouter>
  
  );
};

export default App;
