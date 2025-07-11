import React, { useState } from 'react';

export const Contador = () => {
    // declara uma variável de estado chamada 'contagem', inicializada com 0
    const [contagem, setContagem] = useState(0);

    const handleContagem = () => {
        setContagem(contagem + 1)
    }

    return (
        <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
            <p>
                Você clicou {contagem} vezes
            </p>
            {/* Ao clicar, chama a função 'setContagem' para atualizar o estado */}
            <button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" onClick={() => handleContagem()}>
                clique aqui
            </button>
        </div>
    );
}