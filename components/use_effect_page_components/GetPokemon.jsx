import React, { useState, useEffect } from 'react';

export const GetPokemon = ({ pokemonId }) => {
    // estado para armazenar os dados do Pokémon
    const [pokemon, setPokemon] = useState(null);
    // estado para controlar o carregamento
    const [loading, setLoading] = useState(true);
    // adicionamos um estado para o erro
    const [error, setError] = useState(null);

    useEffect(() => {
        // controller de abort para acada execução do useEffect
        const controller = new AbortController();

        // 2. Criamos uma função async dentro do useEffect
        const fetchData = async () => {
            // para evitar que o efeito tente rodar com um ID inválido
            if (!pokemonId) {
                setLoading(false);
                return;
            }

            // reseta os estados antes de uma nova busca
            setLoading(true);
            setPokemon(null);
            setError(null);
            
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
                    signal: controller.signal, // lança o sinal de abort como um erro caso fetch seja interrompido
                });

                // 3. Verificamos se a resposta da API foi bem-sucedida
                if (!response.ok) {
                    throw new Error(`Pokémon não encontrado (status: ${response.status})`);
                }

                const data = await response.json();
                setPokemon(data);

            } catch (err) {
                // 4. Tratamos todos os erros em um único lugar
                if (err.name === 'AbortError') {
                    console.log('Busca cancelada!');
                } else {
                    setError(err); // Armazena o erro no estado
                }
            } finally {
                // O finally garante que o loading sempre terminará
                setLoading(false);
            }
        };

        fetchData();

        // 3. A função de limpeza chama o abort(), cancelando a requisição
        // fetch se o componente for desmontado ou se o 'id' mudar.
        return () => {
            controller.abort();
        };
        
    // O array de dependências contém 'pokemonId'.
    // O efeito será re-executado toda vez que a prop 'pokemonId' mudar.
    }, [pokemonId]);

    // A ordem dos 'if's é importante para a UI
    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error.message}</p>;
    }

    if (!pokemon) {
        // Esta mensagem agora aparece se o ID for inválido ou se a busca falhar
        return <p>Por favor, selecione um Pokémon.</p>;
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