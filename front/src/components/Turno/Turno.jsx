import misTurnos from "../../helpers/misTurnos";
import styles from "../Turno/Turno.module.css"
const Turno=({id,date,time,type,status})=>{
    const dateObj = new Date(date);

  const formatDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
    
  const handleClick=()=>{
    if(
        window.confirm(
            `Desea cancelar esta cita ${formatDate} a las ${time}?`
        )
     ) {
        handleAppointmentCancel(id);
    }
  };
  
  
  
  return(
        <div className={styles.turnoContainer} >
            <h4 className={styles.turno_item}>ID:{id} </h4>
           <h4 className={styles.turno_item}>Fecha:{formatDate}</h4>
           <h4 className={styles.turno_item}>Hora:{time}</h4>
           <h4 className={styles.turno_item}>Motivo: {type} </h4>
           <h4 className={styles.turno_item}>Estado:{status}</h4>
           <button className={styles.button} disabled={ status == "cancelled"}>Cancelar Cita</button>


        </div>
    ) 
}
export default Turno;