
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

    const appointments = useSelector((state) => state.actualUser.userAppointments);



useEffect(() => {
    //
    if (actualUserId !== undefined && actualUserId !== null) {
    axios.get(GETUSERBYID + actualUserId)
        .then(response => { 
            console.log(response.data.appointments)
            setTurnos(response.data.appointments);
            dispatch(setUserAppointments(response.data.appointments));
        })
        .catch(error => {
            console.error('Error al obtener citas del usuario:', error);
        });
    }
}, [actualUserId, dispatch]);

const appointment=useSelector(state=>state.actualUser.UserAppointments)




const handleAppointmentCancel = (turnId) => {
    console.log(turnId,"turnId")
    axios
        .put(`http://localhost:3000/appointments/cancel/${turnId}`)
        .then(response =>{response.data} )

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
                         handleAppointmentCancel={handleAppointmentCancel}
                    />
                ))}
            </div>
        </div>
    );

}


export default MisTurnos;