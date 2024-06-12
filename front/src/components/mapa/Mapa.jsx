import React, { useEffect } from 'react';

const Mapa = () => {
  useEffect(() => {
    // Función para cargar el script de Google Maps API
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = url;
        script.defer = true;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Función para inicializar el mapa
    function initMap() {
      if (typeof window.google === 'undefined' || typeof window.google.maps === 'undefined') {
        console.error('Google Maps JavaScript API no está cargada correctamente.');
        return;
      }

      // Coordenadas de la ubicación de la inmobiliaria
      const ubicacion = { lat: -31.75030949189596, lng: -60.49572201590723 };

      // Crear el mapa
      const mapa = new window.google.maps.Map(document.getElementById('mapa'), {
        center: ubicacion,
        zoom: 15 // Nivel de zoom
      });

      // Marcar la ubicación de la inmobiliaria en el mapa usando AdvancedMarkerElement
      if (typeof window.google.maps.marker !== 'undefined' && typeof window.google.maps.marker.AdvancedMarkerElement !== 'undefined') {
        new window.google.maps.marker.AdvancedMarkerElement({
          position: ubicacion,
          map: mapa,
          title: 'WILLICH Inmobiliaria'
        });
      } else {
        console.log('AdvancedMarkerElement no está disponible.');
      }
    }

    // Cargar el script y luego inicializar el mapa
    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDJv05frqInlMG-XJ-zJf6IStj0saDDR5A&callback=initMap`)
      .then(() => {
        window.initMap = initMap;
      })
      .catch((error) => {
        console.log('Error al cargar la Google Maps JavaScript API:', error);
      });

  }, []);

  return <div id="mapa" style={{ width: '100%', height: '400px' }}></div>;
}

export default Mapa;
