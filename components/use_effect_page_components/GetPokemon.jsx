import React, { useState, useEffect } from 'react';

export const GetPokemon = ({ pokemonId }) => {
    // estado para armazenar os dados do Pokémon
    const [pokemon, setPokemon] = useState(null);
    // estado para controlar o carregamento
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // para evitar que o efeito tente rodar com um ID inválido
        if (!pokemonId) return;

        // reseta o estado de loading e pokemon antes de uma nova busca
        setLoading(true);
        setPokemon(null);

        // a função de efeito que busca os dados
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => response.json())
        .then(data => {
            setPokemon(data); // Armazena os dados no estado
        })
        .catch(error => console.error("Erro ao buscar Pokémon:", error))
        .finally(() => {
            setLoading(false); // Finaliza o estado de carregamento
        });

    // O array de dependências contém 'pokemonId'.
    // O efeito será re-executado toda vez que a prop 'pokemonId' mudar.
    }, [pokemonId]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!pokemon) {
        return <p>Nenhum Pokémon encontrado.</p>;
    }

    return (
        <div className="flex flex-col h-full">
        <h2>{pokemon.name}</h2>
        <p>Altura: {pokemon.height * 10} cm</p>
        <p>Peso: {pokemon.weight / 10} kg</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}