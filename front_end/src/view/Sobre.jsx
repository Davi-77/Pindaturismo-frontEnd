import React from 'react';
import '../styles/StylesSobre.css';
import HeroSection from '../components/componentes_home/HeroSelectHome';
import Footer from '../components/componentes_home/FooterHome';
import ReactPlayer from 'react-player';

export default function Sobre() {
  return (
    <section className="sobre-container">
      <HeroSection />

      <div className="hero-sobre">
        <h1>História de Pindamonhangaba</h1>
        <p>"Onde o rio faz a curva" — uma cidade rica em tradição, cultura e natureza.</p>
      </div>

      <div className="conteudo">
        <div className="video-container">
          <ReactPlayer
            url="https://youtu.be/_ymlOiYrZp4?si=yvylAgUXSBNMbcIJ"
            width="100%"
            height="400px"
            controls
          />
        </div>

        <div className="texto">
          <h2>Origem e Significado</h2>
          <p>
            O nome Pindamonhangaba vem do tupi-guarani e significa "lugar onde se fazem anzóis", 
            ou também "onde o rio faz a curva". A cidade está localizada no Vale do Paraíba, em São Paulo, 
            e foi uma das primeiras povoações da região, com origem no século XVII.
          </p>

          <h2>Desenvolvimento</h2>
          <p>
            Ao longo dos séculos, Pindamonhangaba foi importante na produção de café, no ciclo do ouro, 
            e também no desenvolvimento ferroviário. A chegada da Estrada de Ferro Central do Brasil foi 
            um marco no crescimento urbano e econômico da cidade.
          </p>

          <h2>Tradições e Cultura</h2>
          <p>
            A cidade mantém tradições religiosas e culturais fortes, com destaque para o carnaval de rua, 
            festas juninas, exposições artísticas e museus como o Museu Histórico Dom Pedro I e Dona Leopoldina.
          </p>

          <h2>Natureza e Turismo</h2>
          <p>
            Rodeada pela Serra da Mantiqueira, Pindamonhangaba também oferece turismo ecológico, trilhas, cachoeiras e 
            o majestoso Pico do Itapeva, com vista panorâmica do Vale do Paraíba.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
