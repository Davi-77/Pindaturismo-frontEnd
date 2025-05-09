import React, { useState } from "react";
import '../styles/FormularioLoginView.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importar o axios

function AuthForm() {
  
  const navigate = useNavigate()

  const [showPassWordIcon, setshowpassword] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleNavigate = async (evento) => {
    evento.preventDefault();
    
    try {
      // Enviar a requisição de login
      const response = await axios.post('http://localhost:5000/login', { email, senha });
      
      // Se o login for bem-sucedido, redireciona para /home
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      // Se houver erro, exibe a mensagem de erro
      if (error.response && error.response.data.erro) {
        setMensagemErro(error.response.data.erro);
      } else {
        setMensagemErro('Erro ao tentar fazer login. Tente novamente mais tarde.');
      }
    }
  }

  const navega = (evento) => {
    evento.preventDefault();
    navigate('/cadastro');
  }

  return (
    <div className="auth-container">
      <div className="form-box">
        <h1 className="form-title">Entrar</h1>
        <form onSubmit={handleNavigate}>
          <input 
            type="email" 
            placeholder="Digite seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="form-input" 
          />
          
          <div className="password-field">
            <input
              type={showPassWordIcon ? "text" : "password"}  
              placeholder="Senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required 
              className="form-input" 
            />
            <span
              className="toggle-password"
              onClick={() => setshowpassword(!showPassWordIcon)}
            >
              {showPassWordIcon ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {mensagemErro && <p className="erro">{mensagemErro}</p>}
          
          <button type="submit" className="form-button">Entrar</button>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Lembre-se de mim
            </label>
          </div>
        </form>
        
        <div className="register-link">
          <p>Novo por aqui? <a onClick={navega}>Cadastre-se agora.</a></p>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
