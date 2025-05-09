import React, { useState } from 'react';
import { LocalTuristicoModel } from '../model/ModelLocalTuristico';
import '../styles/StyleLocalFormulario.css';

export default function FormularioLocal() {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    imagens: [], 
    mapa_url: '',
    tipo: [],
  });

  const tiposDisponiveis = [
    'Cultural', 'Aventura', 'Histórico', 'Gastronômico', 'Religioso', 'Ecoturismo',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      tipo: checked
        ? [...prev.tipo, value]
        : prev.tipo.filter((t) => t !== value),
    }));
  };

  const handleAddImage = () => {
    if (form.imagens.length < 5) {
      setForm((prev) => ({ ...prev, imagens: [...prev.imagens, ''] }));
    }
  };

  const handleImageChange = (index, event) => {
    const newImagens = [...form.imagens];
    newImagens[index] = event.target.value;
    setForm({ ...form, imagens: newImagens });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await LocalTuristicoModel.create(form);
      alert('Local turístico adicionado com sucesso!');
      setForm({
        titulo: '', descricao: '', imagens: [], mapa_url: '', tipo: [],
      });
    } catch {
      alert('Erro ao adicionar local.');
    }
  };


    return (
      
      <div className="page-container">
        <form className="local-form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="titulo"
            className="input-title"
            placeholder="Título"
            value={form.titulo}
            onChange={handleChange}
            required
          />
          <textarea
            name="descricao"
            className="input-description"
            placeholder="Descrição"
            value={form.descricao}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mapa_url"
            className="input-mapa"
            placeholder="URL do Google Maps (iframe embed)"
            value={form.mapa_url}
            onChange={handleChange}
            required
          />
    
          <div className="tourism-type-container">
            <p>Tipo de Turismo:</p>
            {tiposDisponiveis.map((tipo) => (
              <label key={tipo}>
                <input
                  type="checkbox"
                  value={tipo}
                  checked={form.tipo.includes(tipo)}
                  onChange={handleCheckboxChange}
                />
                {tipo}
              </label>
            ))}
          </div>
    
          <div className="image-input-container">
            <p>URLs das Imagens (máximo de 5):</p>
            {form.imagens.map((imagem, index) => (
              <div key={index} className="image-input">
                <input
                  type="text"
                  placeholder={`Imagem ${index + 1}`}
                  value={imagem}
                  onChange={(event) => handleImageChange(index, event)}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddImage}>
              Adicionar Imagem
            </button>
          </div>
    
          <button type="submit" className="submit-button">Salvar Local</button>
        </form>
      </div>
    );

}
