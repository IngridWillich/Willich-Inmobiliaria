import styles from './Navbar.module.css';
import Logo from '../../assets/Logo.png'
const Navbar=()=>{
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <div className={styles.navbarItems}>
                <span className={styles.navbar_item}>Inicio</span>
                <span className={styles.navbar_item}>Alquileres</span>
                <span className={styles.navbar_item}>Venta</span>
                <span className={styles.navbar_item}>Tasaciones</span>
                <span className={styles.navbar_item}>Sobre nosotros</span>
                <span className={styles.navbar_item}>Agenda tu cita</span>
                <span className={styles.navbar_item}>Contacto</span>
            </div>
            </div>
        </div>
    
    )
    
}
export default Navbar;