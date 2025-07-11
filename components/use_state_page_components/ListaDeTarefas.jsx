import React, { useState } from 'react';

export const ListaDeTarefas = () => {
    // O estado 'tarefas' começa como um array vazio
    const [tarefas, setTarefas] = useState([]);
    // O estado 'novaTarefa' armazena o valor do campo de texto
    const [novaTarefa, setNovaTarefa] = useState('');

    function handleAdicionarTarefa(evento) {
        // Previne o comportamento padrão do formulário de recarregar a página
        evento.preventDefault();

        // Impede a adição de tarefas vazias
        if (!novaTarefa.trim()) return;

        // Atualiza o estado das tarefas
        // 1. '...tarefas' cria uma cópia de todos os itens do array atual
        // 2. ', novaTarefa' adiciona o novo item ao final dessa cópia
        // 3. O resultado é um novo array, que é passado para setTarefas
        setTarefas([...tarefas, novaTarefa]);

        // Limpa o campo de input após adicionar a tarefa
        setNovaTarefa('');
    }

    const handleTarefaInput = (event) => {
        setNovaTarefa(event.target.value)
    }

    return (
        <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 ">
            <form onSubmit={handleAdicionarTarefa} className="gap-4 flex flex-row">
                <input className="border-gray-500 border-1 rounded-sm p-1 outline-0 focus:border-blue-500"
                type="text" value={novaTarefa} onChange={(e) => handleTarefaInput(e)} placeholder="Digite uma nova tarefa"/>
                <button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" type="submit">
                    Adicionar
                </button>
            </form>

            <ul className="">
                {/* Usamos .map() para renderizar cada item do array 'tarefas' */}
                {tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
}