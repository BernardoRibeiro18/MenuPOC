import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando os componentes de roteamento
import Menu from './menu.tsx'; // Importando o Menu

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
      </Routes>
    </Router>
  );
}

export default App;
