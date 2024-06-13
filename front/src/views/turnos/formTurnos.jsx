// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { addAppointment } from '../../slices/appointmentSlice';

// const CrearTurno = () => {
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [type, setType] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const userId = useSelector((state) => state.user.userId);

//     if (!userId) {
//         navigate('/login');
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newAppointment = {
//             date,
//             time,
//             type,
//             userId
//         };
//         axios.post('http://localhost:3001/appointments', newAppointment)
//             .then((response) => {
//                 dispatch(addAppointment(response.data));
//                 alert('Turno creado correctamente');
//                 navigate('/MisTurnos');
//             })
//             .catch((error) => {
//                 console.error('Error al crear el turno:', error);
//                 alert('Error al crear el turno');
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Fecha:</label>
//                 <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//             </div>
//             <div>
//                 <label>Hora:</label>
//                 <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
//             </div>
//             <div>
//                 <label>Tipo:</label>
//                 <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
//             </div>
//             <button type="submit">Crear Turno</button>
//         </form>
//     );
// };

// export default CrearTurno;
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const POSTAPPOINTMENTURL="http://localhost:3000/appointments/schedule";
export default function AppointmentForm(props){

    const navigate = useNavigate();
    const userId = useSelector((state) => state.actualUser?.userData.userId);

useEffect(()=>{
    if(!userId){
        navigate('/');
    }
},[userId,navigate]);

const initialState={
    date:"",
    hours:"08",
    minutes:"00",
    type:""
};
const [appointment,setAppointment]=useState(initialState);
const [errors,setErrors]=useState({
    date:"debe ingresar una fecha",
});

const validateAppointment=({date,hours,minutes,type})=>{
 const error={};
 if(!date) errors.date="debe ingresar una fecha";
 else if(isWeekend(date)) errors.date="debe ser un dia laboral";
 if(!type) errors.type="debe seleccionar un tipo de turno";
};

const isWeekend=(date)=>{
    const day = new Date(date).getDay();
    return day === 5 || day === 6;
};

const handleChange=(event)=>{
    const {name,value}=event.target;
    const updateAppointment={
        ...appointment,
        [name]:value
    };
    setAppointment(updateAppointment);
    setErrors(validateAppointment(updateAppointment));
};
const handleSubmit=(event)=>{
    event.preventDefault();
    const newAppointment={
        date: appointment.date,
        time: `${appointment.hours}:${appointment.minutes}`,
        type: appointment.type,
        userId
    };
axios.post(POSTAPPOINTMENTURL,newAppointment)
.then(({data})=>{
    alert(`Ha sido agendada la cita el ${data.date} a las ${data.time}`);
    setAppointment(initialState);
    navigate("/Citas")
})
.catch((error)=>console.log(error));
};
const validateHours=["08","09","10","11","12","13","14","15","16","17","18","19"];
const validMinutes=["00","30"];

function getTomorrow(){
    const today=new Date();
    const tomorrow=new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1);
    return tomorrow.toISOString().split("T")[0];
}
function getFourteenDays(){
    const today=new Date();
    const fourteenDays=new Date(today);
    fourteenDays.setDate(fourteenDays.getDate()+14);
    return fourteenDays.toISOString().split("T")[0];
}



return(
    <div className={styles.conteiner}>
        <h2>Nueva Cita</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Fecha:</label>
               <input
               type="date"
               name="date"
               value={appointment.date}
               onChange={handleChange}
               min={getTomorrow()}
               max={getFourteenDays()}
        
               />
                {errors.date && <p>{errors.date}</p>}

               </div>
               <div>
                <label htmlFor="time">Hora:</label>
               <select
               id="hours"
               name="hours"
               value={appointment.hours}
               onChange={handleChange}
               >
               {validateHours.map((hour)=>(
                <option key={hour} value={hour}>{hour}</option>
               ))};
               </select>
               <select
               id="minutes"
               name="minutes"
               value={appointment.minutes}
               onChange={handleChange}
               >
               {validMinutes.map((minute)=>(
                <option key={minute} value={minute}>{minute}</option>
               ))};
               </select>

               <select
               id="type"
               name="type"
               value={appointment.type}
               onChange={handleChange}
               >
               <option value="Visita de propiedad">Visita de propiedad</option>
               <option value="Visita de loteo">Visita de loteo</option>
               <option value="Tasación">Tasación</option>
               <option value="Entrega de llaves">Entrega de llaves</option>
               <option value="Reunión con el agente inmobiliario">Reunión con el agente inmobiliario</option>
               <option value="Firma de contrato">Firma de contrato</option>
               <option value="Asesoramiento financiero">Asesoramiento financiero</option>

               </select>
               {errors.type && <p>{errors.type}</p>}
               </div>

               <button type="submit" disabled={Object.keys(errors).length >0}>Agendar</button>
               /</form>
    </div>
)




    }

















