import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animals from './componets/animals';
import Car from './componets/car';
import Space from './componets/space';
import Navbar from './componets/novbar';
import Home from './componets/home';
import NotFound from './componets/404page';

function App() {
  return (
    <>
    <h1 className='title'>Homework 7, React Router Application by nihar patel</h1>

    <div className='container'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/home'    element ={<Home />}    />
        <Route path = '/animals'        element ={<Animals />}    /> 
        <Route path = '/cars'   element ={<Car />}   /> 
        <Route path = '/space' element ={<Space />} />
        <Route path = '/*' element ={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
