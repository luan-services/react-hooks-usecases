import React, { useState, useEffect } from 'react';

export const BuscaDebounced = () => {
	const [termoBusca, setTermoBusca] = useState('');
	const [resultado, setResultado] = useState('');
	const [carregando, setCarregando] = useState(false);

	const handleChange = (evento) => {
    	setTermoBusca(evento.target.value);
  	}

	useEffect(() => {
		// se o campo de busca estiver vazio, não faz nada.
		if (!termoBusca.trim()) {
			setResultado('');
			return;
		}

		// faz a div 'carregando...' aparecer
		setCarregando(true);

		// 1. cria um timer para executar a busca após 500ms.
		const timerId = setTimeout(() => {
			// simulação de uma chamada de API
			setResultado(`Resultado para: ${termoBusca}`);
			setCarregando(false);
		}, 500);

		// 2. A FUNÇÃO DE LIMPEZA é a chave!
		// Ela é executada TODA VEZ que 'termoBusca' muda, ANTES do useEffect atualizar
		// Isso cancela o timer anterior, garantindo que a "API" só seja chamada
		// quando o usuário parar de digitar por 500ms.
		return () => {
			clearTimeout(timerId);
		};
	}, [termoBusca]); // O efeito depende do termo de busca

	return (
		<div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4">
			<input className="border-gray-500 border-1 rounded-sm p-1 outline-0 focus:border-blue-500"
				type="text" placeholder="Digite para buscar..." value={termoBusca} onChange={(e) => handleChange(e)}/>
			{carregando && <p>Buscando...</p>}
			{!carregando && resultado && <p>{resultado}</p>}
		</div>
	);
}