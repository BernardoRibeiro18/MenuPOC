import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        <nav>
          <ul className="footer-menu">
            <li><a href="/Parceiros">Parceiros</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/patrocinadores">Patrocinadores</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
