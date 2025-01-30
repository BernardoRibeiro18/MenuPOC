import React, { useState } from 'react';

const Inicio: React.FC = () => {
  // Estado para controlar a seção visível
  const [activeSection, setActiveSection] = useState<number | null>(null);

  // Função para alternar a seção
  const toggleSection = (sectionId: number) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <p>
        Esta é a página inicial do seu site. 
      </p>

      {/* Botões para alternar entre as seções */}
      <div>
        <button onClick={() => toggleSection(1)}>Compreender</button>
        <button onClick={() => toggleSection(2)}>Observar</button>
        <button onClick={() => toggleSection(3)}>Proteger</button>
      </div>

      {/* Primeira seção */}
      {activeSection === 1 && (
        <section>
          <h2>Compreender</h2>
          <p>Conceitos e marco legal, como no caso da Constituição Federal, Leis e Código Florestal</p>
        </section>
      )}

      {/* Segunda seção */}
      {activeSection === 2 && (
        <section>
          <h2>Observar</h2>
          <p>Informações e dados sobre a realidade</p>
        </section>
      )}

      {/* Terceira seção */}
      {activeSection === 3 && (
        <section>
          <h2>Proteger</h2>
          <p>Dividido entre o que fazer [estratégias, com destaque para a restauração florestal] e o que fazemos  [notícias e relatos sobre conservação e restauração florestal na região]</p>
        </section>
      )}
    </div>
  );
};

export default Inicio;
