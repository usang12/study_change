import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading'
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import Question from './pages/Question/Question';
import Result from './pages/Result/Result';


function LoadingPage() {
  return (
    <div className='loading-wrapper'>
      <ReactLoading type="spin" />
    </div>
  );
}

function App() {
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question" element={<Question />} />
        <Route path="result" element={<Result />} />
      </Routes>
    )
  }
 

export default App;