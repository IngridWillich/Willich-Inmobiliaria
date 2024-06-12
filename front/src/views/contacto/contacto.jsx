import React from 'react';
import Mapa from '../../components/mapa/Mapa';
import styles from '../contacto/contacto.module.css';
const Contacto = () => {
  return (
    <div>
      <div className={styles.container}>

      <h2 className={styles.texto}>Contacto</h2>
      <p className={styles.p}>¡Estamos aquí para ayudarte!</p>
    
      {/* Mapa de ubicación */}
      <div className={styles.mapa}>
        <Mapa />
      </div>
      
      {/* Información de contacto */}
      <div>
        <p className={styles.p2}>Dirección: Blas Parera 516</p>
        <p className={styles.p2}>Correo electrónico: willichinmobiliaria@gmail.com</p>
        <p  className={styles.p2}>Por consultas y asesoramientos, escribinos a WhatsApp. Atendemos las 24 horas!</p><a className={styles.link} href="https://wa.me/343154662544">Enviar mensaje por WhatsApp</a>
        <div className={styles.socialMedia}>
        <p  className={styles.p2}>Nuestras redes sociales</p><a className={styles.link} href="https://www.instagram.com/willichinmobiliaria/?hl=es">Instagram</a>
        <a className={styles.link} href="https://www.facebook.com/willichrocioinmobiliaria">Facebook</a>
        </div>

      </div>
  </div>
    </div>
    
  );
}

export default Contacto;
