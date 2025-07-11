import React, { useState } from 'react';

export const CampoDeNome = () => {
	const [nome, setNome] = useState('');

	const handleNome = (event) => {
        setNome(event.target.value)
    }

	return (
		<div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
			<input className="border-gray-500 border-1 rounded-sm p-1 outline-0 focus:border-blue-500"
				type="text" value={nome} onChange={handleNome} placeholder="digite seu nome"/> {/* não pode user () => handleNome() aqui por por causa do event */}
			<p>
				{nome != "" ? `Olá, ${nome}!`: "Aguardando nome..."}
			</p>
		</div>
  );
}