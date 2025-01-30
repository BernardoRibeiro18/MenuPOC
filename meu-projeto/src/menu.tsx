import React from "react";
import { Link } from "react-router-dom"; // Importando o Link para navegação interna
import "./menu.css";

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <div className="menu-title">Meu Site</div>
      <ul className="menu-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/observatorio">O Observatório</Link></li>
        <li>
          A Mata e seus municípios
          <ul className="sub-menu">
            <li><Link to="/regiao">A região</Link></li>
            <li><Link to="/municipios">Os municípios</Link></li>
          </ul>
        </li>
        <li>
          Publicações
          <ul className="sub-menu">
            <li><Link to="/resenhas">Resenhas</Link></li>
            <li><Link to="/entrevistas">Entrevistas</Link></li>
            <li><Link to="/enquetes">Enquetes</Link></li>
          </ul>
        </li>
        <li><Link to="/parceiros">Parceiros</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/patrocinadores">Patrocinadores</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
