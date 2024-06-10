import React from 'react';
import Mapa from '../../components/mapa/Mapa';
const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>¡Estamos aquí para ayudarte!</p>
    
      {/* Mapa de ubicación */}
      <div>
        <Mapa />
      </div>
      
      {/* Información de contacto */}
      <div>
        <p>Dirección: Blas Parera 516</p>
        <p>Teléfono:+54 9 3434 66-2544</p>
        <p>Correo electrónico: willichinmobiliaria@gmail.com</p>
      </div>
    
      <div>
    <a href="https://www.facebook.com/willichrocioinmobiliaria/" target="_blank" rel="noopener noreferrer">
      <img src="ruta/al/logo/facebook.png" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/willichinmobiliaria/?hl=es" target="_blank" rel="noopener noreferrer">
      <img src="h-de-instagram_87390" alt="Instagram" />
    </a>
  </div>
    </div>
  );
}

export default Contacto;
