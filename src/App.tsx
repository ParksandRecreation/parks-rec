import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
   <Router>
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
   </Router>
  );
};

export default App;
