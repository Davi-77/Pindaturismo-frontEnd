import React from 'react';
import '../../styles/selecaoEstados.css';
import festivalImage from '../../assets/images/Festival.jpg'; 
import Festajunina from '../../assets/images/festaJunina.jpg'
import nossaSenhora from '../../assets/images/senhora.jpeg'
import ConcursoCultural from '../../assets/images/cultura.jpeg'

export default function SelecaoEstados() {
  return (
    <section className="stages">
      <div className="stages-content">
        <h2 className="section-title">Eventos</h2>
        <div className="stages-cards">
          <div className="stage-card">
            <img src={festivalImage} alt="Festival de Inverno" />
            <p>Festival de Julho</p>
          </div>
          <div className="stage-card">
            <img src={Festajunina} alt="Festa junina" />
            <p>Festa junina</p>
          </div>
          <div className="stage-card">
            <img src={nossaSenhora} alt="Festival nossa senhpra de asunção" />
            <p>Festival nossa senhora de asunção</p>
          </div>
          <div className="stage-card">
            <img src={ConcursoCultural} alt="Rota das Cachoeiras" />
            <p>Concurso cultural</p>
          </div>
        </div>
      <p>Mas informações no site da prefeiruta: <a href="https://turismo.pindamonhangaba.sp.gov.br/calendario-anual">Calendario Prefeitura </a> </p>
      </div>
      <div className="map">
       <iframe
          title="Mapa Interativo"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3393630737364!2d-45.46551512536724!3d-22.93772573897615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccefe35e9af04d%3A0xd525acf14d63348d!2sParque%20da%20Cidade%20de%20Pindamonhangaba!5e0!3m2!1spt-BR!2sbr!4v1746911121200!5m2!1spt-BR!2sbr" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
