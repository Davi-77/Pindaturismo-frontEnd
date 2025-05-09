import React from 'react';
import '../../styles/StyleHeroSelect.css';
import Header from './HeaderHome';
import palacete from '../../assets/images/Matriz_dentro.jpg'; // ou o nome da sua imagem

export default function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${palacete})` }}
    >
        <Header/>
      <div className="hero-overlay">
        <h2 className="hero-title">Explore os encantos de Pindamonhangaba!</h2>
        
      </div>
    </section>
  );
}
