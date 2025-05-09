import React from 'react';
import '../../styles/styleHeader.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate()

  const handleNavigate = () =>{
      navigate('/home')

  }

  const navSobre = () =>{
    navigate('/sobre')
  }

  return (
    
    <header className="header">
      <h1 className="logo">PINDA TURISMO</h1>
      <nav className="nav">
      <a onClick={handleNavigate} style={{ cursor: 'pointer' }}>Home</a>
      <a onClick={navSobre} style={{cursor: 'pointer'}}>Sobre</a>
  
      </nav>
    </header>
  );
}
