// import styles from './Navbar.module.css';
// import Logo from '../../assets/Logo.png'
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// const Navbar=({isAuthenticated})=>{
// const {pathname}=useLocation();
// const loggin=useSelector(state=>state.actualUser.userData.loggin)
//     //* loggin=true||false
// return(
//         <div className={styles.navbarContainer}>
            
//             <div className={styles.navbar}>
//             <img src={Logo} alt="Logo" className={styles.logo} />
//             <div className={styles.navbarItems}>
//                 <Link to="/Inicio"><span className={styles.navbar_item}>Inicio</span></Link>
//                 {/* <Link to="/Alquileres"><span className={styles.navbar_item}>Alquileres</span></Link> */}
//                 {/* <Link to="/Venta"><span className={styles.navbar_item}>Venta</span></Link> */}
//                 {/* <Link to="/Tasaciones"><span className={styles.navbar_item}>Tasaciones</span></Link> */}
//                 <Link to="/SobreNosotros"><span className={styles.navbar_item}>Sobre nosotros</span></Link>
//                 {loggin && (
//                         <>
//                             <Link to="/Citas"><span className={styles.navbar_item}>Mis Turnos</span></Link>
//                             <Link to="/Agenda-tu-cita"><span className={styles.navbar_item}>Agenda tu cita</span></Link>
//                         </>
//                     )}
//                <Link to="/Contacto"><span className={styles.navbar_item}>Contacto</span></Link>
//                {isAuthenticated ? 
//     <Link to="/login"><span className={styles.navbar_item}>Iniciar sesión</span></Link> : 
//     <Link to="/register"><span className={styles.navbar_item}>Registrate</span></Link>
// }
//             </div>
//             </div>
//         </div>
    
//     )
    
// }
// export default Navbar;
import styles from './Navbar.module.css';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ isAuthenticated }) => {
  const { pathname } = useLocation();
  const user = useSelector(state => state.actualUser.userData);
  const loggin = user?.loggin;
  const userName = user?.name;

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles.navbarItems}>
          <Link to="/Inicio"><span className={styles.navbar_item}>Inicio</span></Link>
          <Link to="/SobreNosotros"><span className={styles.navbar_item}>Sobre nosotros</span></Link>
        <Link to="/Citas"><span className={styles.navbar_item}>Mis Turnos</span></Link>
         <Link to="/Agenda-tu-cita"><span className={styles.navbar_item}>Agenda tu cita</span></Link>
        
        
          <Link to="/Contacto"><span className={styles.navbar_item}>Contacto</span></Link>
          {isAuthenticated ? 
            <Link to="/login"><span className={styles.navbar_item}>Iniciar sesión</span></Link> : 
            <Link to="/register"><span className={styles.navbar_item}>Registrate</span></Link>
          }
          {userName && <span className={styles.navbar_item}>Bienvenido, {userName}</span>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;