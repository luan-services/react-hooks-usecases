import React, { useState, useEffect } from 'react';
import { GetPokemon } from './getPokemon';

export const PerfilPokemon = () => {
	const [pokemonId, setPokemonId] = useState(1);
	const [id, setId] = useState(1);

	const updatePokemonIdInput = (event) => {
        setId(event.target.value)
    }

	const updatePokemonId = (evento) => {
        // Previne o comportamento padrão do formulário de recarregar a página
        evento.preventDefault();

        if (id < 0) return;

        // Atualiza o estado do id
        setPokemonId(id)

        // Limpa o campo de input após adicionar a tarefa
        setId('')
    }

	// aqui o form é responsável apenas por setar o ID, quem faz uso do ID e usa a função fetch é um componente dedicado apenas para isso: GetPokemon
	return (
		<div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
			<form onSubmit={updatePokemonId} className="gap-4 flex flex-wrap flex-row justify-start">
                <input className="border-gray-500 border-1 rounded-sm p-1 outline-0 focus:border-blue-500"
                type="text" value={id} onChange={(e) => updatePokemonIdInput(e)} placeholder="id do pokémon"/>
                <button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" type="submit">
                    selecionar
                </button>
            </form>
			<GetPokemon pokemonId={pokemonId}></GetPokemon>
		</div>
	)
}