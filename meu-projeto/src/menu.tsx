import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [subMenuAberto, setSubMenuAberto] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const toggleSubMenu = (menu: string) => {
    setSubMenuAberto((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="menu">
      <div className="menu-title">Meu Site</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu-items ${menuAberto ? "menu-aberto" : ""}`}>
        
        {/* Ajustando a estrutura para alinhamento correto */}
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/observatorio">O Observatório</Link>
        </li>

        <li className="menu-item">
          <button className="menu-item-button" onClick={() => toggleSubMenu("mata")}>
            A Mata e seus municípios
          </button>
          <ul className={`sub-menu ${subMenuAberto["mata"] ? "sub-menu-aberto" : ""}`}>
            <li><Link to="/regiao">A região</Link></li>
            <li><Link to="/municipios">Os municípios</Link></li>
          </ul>
        </li>

        <li className="menu-item">
          <button className="menu-item-button" onClick={() => toggleSubMenu("compreender")}>
            Compreender
          </button>
          <ul className={`sub-menu ${subMenuAberto["compreender"] ? "sub-menu-aberto" : ""}`}>
            <li><Link to="/conceitos">Conceitos</Link></li>
            <li><Link to="/marco-legal">Marco legal</Link></li>
          </ul>
        </li>

        <li className="menu-item">
          <button className="menu-item-button" onClick={() => toggleSubMenu("observar")}>
            Observar
          </button>
          <ul className={`sub-menu ${subMenuAberto["observar"] ? "sub-menu-aberto" : ""}`}>
            <li><Link to="/cultura-sociedade">Cultura e sociedade</Link></li>
            <li><Link to="/patrimonio-diversidade">Patrimônio e diversidade</Link></li>
          </ul>
        </li>

        <li className="menu-item">
          <button className="menu-item-button" onClick={() => toggleSubMenu("proteger")}>
            Proteger
          </button>
          <ul className={`sub-menu ${subMenuAberto["proteger"] ? "sub-menu-aberto" : ""}`}>
            <li><Link to="/estrategias">Estratégias</Link></li>
            <li><Link to="/noticias-relatos">Notícias e relatos</Link></li>
          </ul>
        </li>

        <li className="menu-item">
          <button className="menu-item-button" onClick={() => toggleSubMenu("publicacoes")}>
            Publicações
          </button>
          <ul className={`sub-menu ${subMenuAberto["publicacoes"] ? "sub-menu-aberto" : ""}`}>
            <li><Link to="/resenhas">Resenhas</Link></li>
            <li><Link to="/entrevistas">Entrevistas</Link></li>
            <li><Link to="/enquetes">Enquetes</Link></li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default Menu;
