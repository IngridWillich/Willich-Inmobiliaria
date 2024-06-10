import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import { useEffect, useState } from "react";

export default function ErrorPage(props) {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState(5);
    
useEffect(() => {
    const timeDown=setTimeout(() => {
        if (countDown === 1)navigate("/Inicio");
        setCountDown(countDown=> countDown-1)
    }, 1000);
    return ()=> clearTimeout(timeDown);
}, [countDown]);

useEffect(() => ()=> {
  setCountDown(5);
}, []);



return(
    <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>Página no encontrada</p>
        <p className={styles.description}>Redirigiendo en {countDown} segundos...</p>
        </div>
)
}