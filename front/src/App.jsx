// import 'bootstrap';
// import './App.css';
// import React, { useState } from 'react';
// import {Navigate  ,Routes, Route, useLocation } from 'react-router-dom';
// import Home from './views/Home'
// import Navbar from './components/Navbar/Navbar';
// import MisTurnos from './views/MisTurnos/MisTurnos';
// import Register from './views/Register/Register';
// import Login from './views/Login/Login';
// import Contacto from './views/contacto/contacto';
// import Landing from './views/landing/landing';
// import AppointmentForm from './views/turnos/formTurnos';

// const App = () => {
//  const { pathname } =useLocation();
// const [isAuthenticated, setIsAuthenticated] = useState(false);
import 'bootstrap';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar/Navbar';
import MisTurnos from './views/MisTurnos/MisTurnos';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Contacto from './views/contacto/contacto';
import Landing from './views/landing/landing';
import AppointmentForm from './views/turnos/formTurnos';
import { useSelector } from 'react-redux';

const App = () => {
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const user = useSelector((state) => state.actualUser.userData);

  useEffect(() => {
    if (user) {
      console.log(user.id ? `ID:${user.id}` : 'User is null');
    } else {
      console.log('User is null');
    }
  }, [user]);
  useEffect(() => {
    if (user && user.id) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);


  return (
    <div>
      
      {pathname !== "/" && pathname !== "/404" ? <Navbar isAuthenticated={isAuthenticated} /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
       < Route path="/Inicio" element={<Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Citas" element={<MisTurnos />} />
          <Route path="/Agenda-tu-cita" element={<AppointmentForm />} />
          <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
     
    </div>
  );
}

export default App;

