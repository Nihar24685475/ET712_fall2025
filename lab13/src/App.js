import './App.css';
import React from 'react'; 
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './componets/home';
import About from './componets/about';
import Contect from './componets/contect';
import Navbar from './componets/novbar';

function App() {
  return (
    <>
    <h1 className='title'> react routing by nihar patel</h1>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/'        element ={<Home />}    /> 
      <Route path = '/about'   element ={<About />}   /> 
      <Route path = '/contect' element ={<Contect />} /> 

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
