import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando os componentes de roteamento
import Menu from './menu'; // Importando o Menu

// Páginas do site (substitua com seus componentes reais)
import Inicio from './pages/Inicio';
import Observatorio from './pages/Observatorio';
import Regiao from './pages/Regiao';
import Municipios from './pages/Municipios';
import Resenhas from './pages/Resenhas';
import Entrevistas from './pages/Entrevistas';
import Enquetes from './pages/Enquetes';
import Parceiros from './pages/Parceiros';
import Contato from './pages/Contato';
import Patrocinadores from './pages/Patrocinadores';
import Conceitos from './pages/Conceitos';
import MarcoLegal from './pages/Marco-legal';
import CulturaSociedade from './pages/Cultura-sociedade';
import PatrimonioDiversidade from './pages/Patrimonio-diversidade';
import Estrategias from './pages/Estrategias';
import NoticiasRelatos from './pages/Noticias-relatos';
import Footer from "./footer";

function App() {
  

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/observatorio" element={<Observatorio />} />
        <Route path="/regiao" element={<Regiao />} />
        <Route path="/municipios" element={<Municipios />} />
        <Route path="/resenhas" element={<Resenhas />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/enquetes" element={<Enquetes />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/patrocinadores" element={<Patrocinadores />} />
        <Route path="/conceitos" element={<Conceitos />} />
        <Route path="/marco-legal" element={<MarcoLegal />} />
        <Route path="/cultura-sociedade" element={<CulturaSociedade />} />
        <Route path="/patrimonio-diversidade" element={<PatrimonioDiversidade />} />
        <Route path="/estrategias" element={<Estrategias />} />
        <Route path="/noticias-relatos" element={<NoticiasRelatos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
