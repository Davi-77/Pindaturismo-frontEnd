import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ IMPORTANTE
import '../../styles/stylePontosTuristicos.css';

export default function PontosTuristicos() {
  const [locais, setLocais] = useState([]);
  const navigate = useNavigate(); // ⬅️ HOOK

  useEffect(() => {
    fetch('http://localhost:5000/locais') 
      .then(response => response.json())
      .then(data => setLocais(data))
      .catch(error => console.error('Erro ao buscar locais:', error));
  }, []);

  return (
    <section className="tourist-points">
      <h2 className="section-title">explore os PONTOS TURÍSTICOS</h2>

      <div className="tabs">
        <button className="tab">Natureza</button>
        <button className="tab">Cultura</button>
        <button className="tab">História</button>
        <button className="tab">Religião</button>
      </div>

      <div className="cards">
        {locais.map((local, index) => (
          <div
            className="card"
            key={index}
            onClick={() => navigate(`/local/${local.id}`)} // ⬅️ REDIRECIONA
          >
            <img src={local.imagens[0]} alt={local.titulo} />
            <p>{local.titulo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
