import { useEffect, useState } from "react";
import misTurnos from "../../helpers/misTurnos";
import Turno from "../../components/Turno/Turno";
import axios from "axios";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos);

    
    useEffect(() => {
        axios.get("http://localhost:3000/appointments")
            .then((res) => setTurnos(res.data))
            .catch((error) => console.error("Error al obtener los turnos:", error));
    }, []);


    return (
        <div>
            <h4>Estas son tus citas pendientes con Willich Inmobiliaria</h4>
            <div>
                {turnos.map((turno) => (
                   <Turno 
                  key={turno.id}
                  id={turno.id}
                  date={turno.fecha}
                  time={turno.hora}
                  type={turno.tipo}
                  status={turno.estado}
                   />
            ))}
            </div>
        </div>
    );
}
export default MisTurnos