import misTurnos from "../../helpers/misTurnos";

const Turno=({id,date,time,type,status})=>{
    return(
        <div className={styles.turno} >
            <h4>ID:{id} </h4>
           <h4>Fecha:{date}</h4>
           <h4>Hora:{time}</h4>
           <h4>Motivo: {type} </h4>
           <h4>Estado:{status}</h4>


        </div>
    ) 
}
export default Turno;