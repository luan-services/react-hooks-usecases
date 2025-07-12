import React, { useState, useEffect } from 'react';

export const SalvarFormLocalStorage = () => {
    // Tenta carregar o nome do localStorage. Se não houver, usa uma string vazia.
    const valorInicial = localStorage.getItem('nomeUsuario') || '';
    const [nome, setNome] = useState(valorInicial);

    const handleValueChange = (event) => {
        setNome(event.target.value)
    }

    // Este efeito sincroniza o estado 'nome' com o localStorage
    useEffect(() => {
        localStorage.setItem('nomeUsuario', nome);
        console.log(`Valor '${nome}' salvo no localStorage.`);
        
    }, [nome]); // O efeito roda toda vez que o 'nome' muda

    return (
        <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-row gap-2 items-center">
                <label className="flex">
                    digite seu nome:
                </label>
                <input className="border-gray-500 border-1 rounded-sm p-1 outline-0 focus:border-blue-500" type="text" value={nome} onChange={(e) => handleValueChange(e)}/>
            </div>
            {nome &&
                <p>valor {nome} salvo no localStorage</p>
            }
        </div>
    );
}