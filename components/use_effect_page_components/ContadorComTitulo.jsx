import React, { useState, useEffect } from 'react';

export const ContadorComTitulo = () => {
  const [contagem, setContagem] = useState(0);
  const [nome, setNome] = useState('');

  // Este efeito atualiza o título da página
  useEffect(() => {
    // O título será atualizado após cada renderização em que 'contagem' mudar
    document.title = `Você clicou ${contagem} vezes`;
    console.log('Efeito do título executado!');
    
    // Não há necessidade de cleanup aqui
  }, [contagem]); // Depende apenas de 'contagem'

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Clique aqui
      </button>
      <br/><br/>
      {/* Mudar este input não vai disparar o efeito do título */}
      <input 
        type="text" 
        placeholder="Digite algo..."
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
    </div>
  );
}