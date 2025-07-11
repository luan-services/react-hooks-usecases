import React, { useState, useEffect } from 'react';

export const SalvarFormLocalStorage = () => {
  // Tenta carregar o nome do localStorage. Se não houver, usa uma string vazia.
  const valorInicial = localStorage.getItem('nomeUsuario') || '';
  const [nome, setNome] = useState(valorInicial);

  // Este efeito sincroniza o estado 'nome' com o localStorage
  useEffect(() => {
    localStorage.setItem('nomeUsuario', nome);
    console.log(`Valor '${nome}' salvo no localStorage.`);
    
  }, [nome]); // O efeito roda toda vez que o 'nome' muda

  return (
    <div>
      <label>
        Digite seu nome:
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </label>
      <p>Olá, {nome || 'estranho'}!</p>
    </div>
  );
}