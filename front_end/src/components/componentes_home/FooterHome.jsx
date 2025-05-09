import React from 'react';
import '../../styles/Footerstyles.css';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer() {
  const data = new Date()
  const ano = data.getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contato</p>
        <p>&copy; {ano} Pinda Turismo. Todos os direitos reservados.</p>
        <p>turismopinda@gmail.com</p>
      </div>
      <div className="social-links">
        <a href="#"><i className="fab fa-twitter"></i></a>
        {<FaInstagramSquare /> }
        {<FaFacebookSquare />}
      </div>
    </footer>
  );
}