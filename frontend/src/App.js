import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import New from './components/New';
import Footer from './components/Footer';
import {  Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/New' element={<New/>} />
        </Routes>
        <Footer/>
    </>
  );
};

export default App;
