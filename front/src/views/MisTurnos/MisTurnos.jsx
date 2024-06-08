
import React, { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import axios from "axios";
import misTurnos from "../../helpers/misTurnos";


const GETAPPOINTMENTSURL="http://localhost:3000/appointments"
const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
        axios.get(GETAPPOINTMENTSURL)
            .then((res) => {
                setTurnos(res.data);
                console.log(res.data)
            })
            .catch((error) => console.error("Error al obtener los turnos:", error));
    }, []);

    return (
        <div>
            <h4>Estas son tus citas pendientes con Willich Inmobiliaria</h4>
            <div>
                {Array.isArray(turnos) && turnos.map((turno,index) => (
                    <Turno 
                        key={index}
                        id={turno.id}
                        date={turno.date}
                        time={turno.time}
                        type={turno.type}
                        status={turno.status}
                    />
                ))}
            </div>
        </div>
    );
}

export default MisTurnos;