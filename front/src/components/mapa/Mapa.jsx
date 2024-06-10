import React, { useEffect } from 'react';

const Mapa = () => {
  useEffect(() => {
    // Cargar el script de la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_DE_API&callback=initMap`;
    script.defer = true;
    script.async = true;

    // Llamar a la función initMap después de que se cargue el script
    window.initMap = initMap;

    // Agregar el script al final del documento
    document.body.appendChild(script);

    // Función para inicializar el mapa
    function initMap() {
      // Coordenadas de la ubicación de la inmobiliaria
      const ubicacion = { lat: -31.75030949189596, lng: -60.49572201590723 };
      
      // Crear el mapa
      const mapa = new window.google.maps.Map(document.getElementById('mapa'), {
        center: ubicacion,
        zoom: 15 // Nivel de zoom
      });

      // Marcar la ubicación de la inmobiliaria en el mapa
      new window.google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: 'WILLICH Inmobiliaria'
      });
    }
  }, []);

  return <div id="mapa" style={{ width: '100%', height: '400px' }}></div>;
}

export default Mapa;
