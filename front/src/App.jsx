import 'bootstrap';
import './App.css';
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Register from './views/Register/Register';
import Login from './views/Login/Login';

const App = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
       < Route path="/Inicio" element={<Home />}/>
       
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;

