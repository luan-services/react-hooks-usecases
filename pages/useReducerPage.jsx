import React from 'react'
// Importando os componentes de exemplo que você criaria com o código fornecido anteriormente.
import { FormExample } from '../components/use_reducer_page_components/FormExample';
import { TodoList } from '../components/use_reducer_page_components/TodoList';
import { DataFetching } from '../components/use_reducer_page_components/DataFetching';


export const UseReducerPage = () => {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="text-xs md:text-sm flex flex-col gap-4">
                <p>
                    O <span className='font-bold'>useReducer</span> é um hook do React que serve como uma alternativa poderosa ao `useState`, especialmente quando você lida com uma lógica de estado complexa ou quando o próximo estado depende do anterior. Inspirado nos reducers do Redux, ele ajuda a centralizar a lógica de atualização e a tornar as transições de estado mais previsíveis e explícitas.
                </p>
                <p>
                    Enquanto o `useState` é perfeito para estados simples (como um booleano ou uma string), o `useReducer` brilha em cenários mais robustos. Ele funciona com base em despachar "ações" (actions) para uma função "redutora" (reducer), que é a única responsável por calcular e retornar o novo estado.
                </p>
                <p>
                    O fluxo é sempre o mesmo: um evento no componente chama a função `dispatch` com uma ação. O React então passa o estado atual e essa ação para sua função `reducer`. O `reducer` retorna o novo estado, e o React atualiza a interface. Esse padrão evita a modificação direta do estado e torna o código mais fácil de depurar.
                </p>
                <p className='text-red-900'>
                    Uma das maiores vantagens do `useReducer` está na otimização de performance em aplicações complexas, especialmente quando combinado com o `useContext`. A função `dispatch` retornada pelo `useReducer` tem uma identidade estável, ou seja, ela não muda entre as renderizações. Isso significa que você pode passá-la para componentes filhos sem causar re-renderizações desnecessárias, um problema comum que pode ocorrer com o `useContext` quando o valor do contexto muda frequentemente.
                </p>
            </div>

            <p className="font-bold md:text-lg">
                Exemplos Práticos
            </p>

            <p className="font-bold md:text-lg">
                1. Gerenciamento de um Formulário Complexo
            </p>
            <p className="text-xs md:text-sm">
                Gerenciar múltiplos campos de um formulário, junto com seus estados de validação e envio (carregando, sucesso, erro), pode se tornar confuso com vários `useState`. O `useReducer` centraliza toda essa lógica em um único lugar, prevenindo estados inconsistentes.
            </p>
            <div className="flex w-full justify-center">
                <FormExample />
            </div>
            
            <p className="font-bold md:text-lg">
                2. Gerenciamento de uma Lista de Tarefas (To-Do List)
            </p>
            <p className="text-xs md:text-sm">
                Para uma lista onde você precisa adicionar, remover e alterar itens, a lógica de manipulação do array pode ser encapsulada de forma limpa no reducer. Cada ação (adicionar, remover, marcar como concluído) é tratada de forma explícita, tornando o código mais legível e fácil de manter.
            </p>
            <div className="flex w-full justify-center">
                <TodoList />
            </div>

            <p className="font-bold md:text-lg">
                3. Busca de Dados (Data Fetching)
            </p>
            <p className="text-xs md:text-sm">
                Lidar com os diferentes estágios de uma requisição a uma API (carregando, sucesso, erro) é um caso de uso clássico. O `useReducer` garante que o estado da sua UI seja sempre consistente, evitando situações em que, por exemplo, um indicador de "carregando" continue ativo mesmo após um erro.
            </p>
            <div className="flex w-full justify-center">
                <DataFetching />
            </div>

            <p className="text-xs md:text-sm">
                Em resumo, a escolha entre `useState` e `useReducer` depende da complexidade. Para estados simples, `useState` é mais direto. Para lógica de estado mais elaborada, interdependente ou que exige otimizações de performance, o `useReducer` oferece uma estrutura mais robusta, escalável e organizada.
            </p>
        </div>
    )
}