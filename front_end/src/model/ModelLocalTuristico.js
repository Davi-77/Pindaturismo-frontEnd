import axios from 'axios';

const API_URL = 'http://localhost:5000/adiciona-local';

export const LocalTuristicoModel = {
  create: async (dados) => {
    try {
      const response = await axios.post(API_URL, dados);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar local turístico:', error);
      throw error;
    }
  },
};
