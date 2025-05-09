import React, { useState } from 'react';
import { CadastraUser } from '../model/ModelCadastroUsuario';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../styles/StyleCadastroForm.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function CadastroForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const navigate = useNavigate(); // Inicializar useNavigate

  // Critérios de validação
  const temLetra = /[a-zA-Z]/.test(senha);
  const temNumeroOuEspecial = /[0-9#?!&]/.test(senha);
  const tamanhoValido = senha.length >= 10;

  const validarSenha = () => temLetra && temNumeroOuEspecial && tamanhoValido;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagemErro('');
    setMensagemSucesso('');
  
    if (!validarSenha()) {
      setMensagemErro('A senha não atende aos requisitos.');
      return;
    }
  
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não coincidem.');
      return;
    }
  
    try {
      const dados = { email, senha };
      const resposta = await CadastraUser.create(dados);
      setMensagemSucesso('Cadastro realizado com sucesso!');
      console.log('Resposta da API:', resposta);

      // Após o cadastro com sucesso, redirecionar para a página de login
      navigate('/');  // A URL da página de login pode variar dependendo da sua configuração de rotas
    } catch (error) {
      setMensagemErro('Erro ao cadastrar usuário. Tente novamente.');
      console.error('Erro na requisição:', error);
    }
  };
  

  return (
    <div className="form-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="senha-container">
        <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
        />
        <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            className="btn-toggle-senha"
        >
            {mostrarSenha ? <FaEye/> : <FaEyeSlash/> }
        </button>
        </div>

        {/* Requisitos visuais */}
        <div className="requisitos-senha">
          <p className={temLetra ? 'valid' : 'invalid'}>• Pelo menos 1 letra</p>
          <p className={temNumeroOuEspecial ? 'valid' : 'invalid'}>• Pelo menos 1 número ou caractere especial (#?!&)</p>
          <p className={tamanhoValido ? 'valid' : 'invalid'}>• Mínimo de 10 caracteres</p>
        </div>

        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        {mensagemErro && <p className="erro">{mensagemErro}</p>}
        {mensagemSucesso && <p className="sucesso">{mensagemSucesso}</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
