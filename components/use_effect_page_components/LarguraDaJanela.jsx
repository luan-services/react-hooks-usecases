import React, { useState, useEffect } from 'react';

export const LarguraDaJanela = () => {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    
    // função que atualiza o estado com a largura da janela, precisa estar aqui dentro pois se estiver fora do useEffect, ela vai ser 
    // recriada toda vez que o componente re-renderizar, isso vai causar o useEffect ser recriado junto toda vez, removendo o eventLisneter
    // e criando de novo, o tempo todo sem necessidade.
    const handleResize = () => {
      setLargura(window.innerWidth);
    }
    
    // EFEITO: toda vez que a janela mudar de tamanho, a função handleResize vai disparar e atualizar o state 'largura.
    window.addEventListener('resize', handleResize);
    console.log('event listener de resize da janela ADICIONADO.');

    // FUNÇÃO DE LIMPEZA: Essencial!
    // Esta função será executada quando o componente for desmontado.
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener de resize da janela REMOVIDO.');
    };
  }, []); // <-- O array vazio garante que o efeito roda apenas uma vez (na montagem)

  return (
    <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
      <p>A largura atual da janela é: <strong>{largura}px</strong></p>
    </div>
  );
}