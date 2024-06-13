
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Turno from "../../components/Turno/Turno";
import axios from "axios";

import misTurnos from "../../helpers/misTurnos";
import { setUserAppointments } from "../../redux/reducers";

const GETAPPOINTMENTSURL="http://localhost:3000/appointments"
const GETUSERBYID="http://localhost:3000/users/"
const POSTCANCELURL="http://localhost:3000/appointments/cancel/"
const MisTurnos = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const actualUserId = useSelector((state) => state.actualUser.userData?.id);
    const [turnos, setTurnos] = useState([]);
    const appointments = useSelector((state) => state.appointments);



// useEffect(()=>{
//     axios.get(GETUSERBYID + actualUserId)
//     .then(response=> response.data)
//     .then(actualUser=>{
//         dispatch(setUserAppointments(actualUser.appointments))({
//     })
//     .catch()
// })

// }, [actualUserId,dispatch]);
useEffect(() => {
    axios.get(GETUSERBYID + actualUserId)
        .then(response => { 
            dispatch(setUserAppointments(response.data.appointments));
        })
        .catch(error => {
            console.error('Error al obtener citas del usuario:', error);
        });
}, [actualUserId, dispatch]);

const appointment=useSelector(state=>state.actualUser.UserAppointments)


// const loggin=useSelector(state=>state.actualUser.userData.loggin)
// useEffect(() => {
//     !loggin && navigate('/Inicio');
// }, [loggin, navigate]);
//esto hicimos con el profe

const handleAppointmentCancel = () => {
    axios
        .put(POSTCANCELURL + appointment.id)
        .then(response => response.data)
        .then((data) => {
            //* actualizar turnos desde el back
            axios.get(GETUSERBYID + actualUserId)
                .then(response => response.data.appointments)
                .then(appointments => {
                    dispatch(setUserAppointments(appointments));
                })
                .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
};





//     useEffect(() => {
    // axios.get(`${GETAPPOINTMENTSURL}?userId=${userId}`)
    //             .then((response) => {
        //                 dispatch(setAppointments(response.data));
        //                 setTurnos(misTurnos(response.data, userId));
        //             })
        //             .catch((error) => {
            //                 console.error('Error al obtener las citas:', error);
            //             });
            //         }
            
            
            return (
            <div>
            <h4>Estas son tus citas pendientes con Willich Inmobiliaria</h4>
            <div>
                {/* esto no se muestra en pantalla */}
                {turnos.map((turno, index) => (
                    <Turno 
                        key={index}
                        id={turno.id}
                        date={turno.date}
                        time={turno.time}
                        type={turno.type}
                        status={turno.status}
                         onCancel={() => handleAppointmentCancel(turno.id)}
                    />
                ))}
            </div>
        </div>
    );

}


export default MisTurnos;