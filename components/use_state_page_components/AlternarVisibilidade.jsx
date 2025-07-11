import React, { useState } from 'react';

export const AlternarVisibilidade = () => {
	const [estaVisivel, setEstaVisivel] = useState(true);

	const handleVisibilidade = () => {
        setEstaVisivel(!estaVisivel)
    }

	return (
		<div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
			<div className="flex w-full flex-row justify-center gap-12 min-h-20">	
				{estaVisivel && 
					<div className="flex bg-gray-200 h-20 w-20 text-center text-sm items-center">
						sou um bloco visivel
					</div>
				}
				{!estaVisivel && 
					<p className="h-20 items-center flex">ficou invisível</p>
				}
			</div>
			<button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" onClick={() => handleVisibilidade()}>
				{estaVisivel ? 'Ocultar' : 'Mostrar'}
			</button>
		</div>
	);
}