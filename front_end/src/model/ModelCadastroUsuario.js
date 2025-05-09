import axios from "axios";

const API_URL = 'http://localhost:5000/cadastro'

export const CadastraUser = {
    create: async (dados) =>{
        try{
            const response = await axios.post(API_URL, dados)
            return response.data
        }catch(err){
            console.error(`erro: ${err}`)
            throw err
        }
    }
}