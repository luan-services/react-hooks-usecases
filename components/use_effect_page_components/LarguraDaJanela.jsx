import React, { useState, useEffect } from 'react';

export const LarguraDaJanela = () => {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    // Função que atualiza o estado com a largura da janela
    function handleResize() {
      setLargura(window.innerWidth);
    }
    
    // EFEITO: Adiciona o event listener quando o componente monta
    window.addEventListener('resize', handleResize);
    console.log('Event listener ADICIONADO.');

    // FUNÇÃO DE LIMPEZA: Essencial!
    // Esta função será executada quando o componente for desmontado.
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener REMOVIDO.');
    };
  }, []); // <-- O array vazio garante que o efeito roda apenas uma vez (na montagem)

  return (
    <div>
      <p>A largura atual da janela é: <strong>{largura}px</strong></p>
    </div>
  );
}