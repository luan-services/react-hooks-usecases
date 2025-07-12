import React, { useState, useEffect } from 'react';

export const ContadorComTitulo = () => {
	const [contagem, setContagem] = useState(0);

	const handleContagem = () => {
		setContagem(contagem + 1)
	}

	// este efeito atualiza o título da página
	useEffect(() => {
		// O título será atualizado após cada renderização em que 'contagem' mudar
		document.title = `Você clicou ${contagem} vezes`;
		console.log('Efeito do título executado!');
		
		// não há necessidade de cleanup aqui, por isso não tem return
	}, [contagem]); // só disparada o useEffect quando contagem mudar.

	return (
		<div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
		<p>você clicou {contagem} vezes</p>
		<button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" onClick={() => handleContagem()}>
			Clique aqui
		</button>
		</div>
  );
}