import React from 'react';
import '../../styles/mapCarousel.css'; // Você vai criar este arquivo

export default function MapCarousel() {
  const mapLinks = [
    {
      title: 'São Paulo',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3203807779433!2d-46.65657468502191!3d-23.588141584669486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc646d4e8b%3A0xf7ab8aa20dbb99ab!2sAvenida%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    },
    {
      title: 'Rio de Janeiro',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.244162922652!2d-43.20868318463304!3d-22.902449985016303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5d1a085247%3A0x64d51187ec327f79!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    },
    {
      title: 'Salvador',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.811737081327!2d-38.50125458514851!3d-12.9713740908598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71603840f96fbd3%3A0x97f3f593cf69d0e5!2sPelourinho!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    },
  ];

  return (
    <div className="map-carousel">
      {mapLinks.map((map, index) => (
        <div className="map-frame" key={index}>
          <h3>{map.title}</h3>
          <iframe
            title={`Mapa de ${map.title}`}
            src={map.src}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
