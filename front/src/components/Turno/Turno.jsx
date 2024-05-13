import misTurnos from "../../helpers/misTurnos";
import styles from "../Turno/Turno.module.css"
const Turno=({id,date,time,type,status})=>{
    return(
        <div className={styles.turnoContainer} >
            <h4 className={styles.turno_item}>ID:{id} </h4>
           <h4 className={styles.turno_item}>Fecha:{date}</h4>
           <h4 className={styles.turno_item}>Hora:{time}</h4>
           <h4 className={styles.turno_item}>Motivo: {type} </h4>
           <h4 className={styles.turno_item}>Estado:{status}</h4>
           <button className={styles.button} disabled={ status == "cancelled"}>Cancelar Cita</button>


        </div>
    ) 
}
export default Turno;