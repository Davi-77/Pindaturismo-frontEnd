import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DetalhesLocal.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HeroSection from '../components/componentes_home/HeroSelectHome';

export default function DetalhesLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/locais/${id}`)
      .then(response => response.json())
      .then(data => setLocal(data))
      .catch(error => console.error('Erro ao buscar local:', error));
  }, [id]);

  if (!local) return <p>Carregando...</p>;

  return (
    <div>
      <HeroSection />

      <div className="detalhes-local-page">
        <h2>{local.titulo}</h2>

        <div className="linha">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {local.imagens.map((imgUrl, i) => (
              <div key={i}>
                <img src={imgUrl} alt={`Imagem ${i + 1} de ${local.titulo}`} />
              </div>
            ))}
          </Carousel>

          <div className="coluna-direita">
            <p>{local.descricao}</p>
          </div>
        </div>

        <iframe src={local.mapa_url} title="Mapa" />
      </div>
    </div>
  );
}
