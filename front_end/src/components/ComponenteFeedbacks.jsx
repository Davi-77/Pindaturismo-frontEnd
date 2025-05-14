import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; 
import '../styles/ComponenteFeedBack.css'; 

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/feedbacks')
      .then(res => res.json())
      .then(data => {
        console.log('Feedbacks recebidos:', data);
        setFeedbacks(data);
      })
      .catch(err => console.error('Erro ao carregar feedbacks:', err));
  }, []);

  const deletarFeedback = async (id) => {
    try {
      await fetch(`http://localhost:5000/feedbacks/${id}`, {
        method: 'DELETE',
      });
      setFeedbacks(prev => prev.filter(fb => fb.id !== id));
    } catch (err) {
      console.error('Erro ao deletar feedback:', err);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedbacks dos Usuários</h2>
      {feedbacks.length === 0 ? (
        <p>Nenhum feedback disponível.</p>
      ) : (
        feedbacks.map(fb => (
          <div key={fb.id} className="feedback-card">
            <p>{fb.comentario}</p>
            <small className="data-feedback">
              {new Date(fb.criado_em).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short'
              })}
            </small>
            <button
              className="delete-btn"
              onClick={() => deletarFeedback(fb.id)}
              title="Excluir feedback"
            >
              <FaTrash />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
