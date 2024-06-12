import 'bootstrap';
import './App.css';
import React, { useState } from 'react';
import {Navigate  ,Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Contacto from './views/contacto/contacto';
import Landing from './views/landing/landing';

const App = () => {
 const { pathname } =useLocation;
const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      
      {pathname !== "/" && pathname !== "/404" ? <Navbar /> : null}
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Landing />} />
       < Route path="/Inicio" element={<Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Citas" element={<MisTurnos />} />
          <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
     
    </div>
  );
}

export default App;

