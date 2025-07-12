import React from 'react'
// Imports atualizados para os componentes de exemplo do useEffect
import { PerfilPokemon } from '../components/use_effect_page_components/PerfilPokemon'
import { ContadorComTitulo } from '../components/use_effect_page_components/ContadorComTitulo'
import { LarguraDaJanela } from '../components/use_effect_page_components/LarguraDaJanela'
import { SalvarFormLocalStorage } from '../components/use_effect_page_components/SalvarFormLocalStorage'

export const UseEffectPage = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-xs md:text-sm flex flex-col gap-4">
        <p>
          O useEffect é o Hook que permite que seu componente execute "efeitos colaterais" (side effects). Um efeito colateral é qualquer interação com o mundo fora do seu componente, algo que afeta "o lado de fora" ou que é afetado "pelo lado de fora".
        </p>
        <p>
          Ele sincroniza seu componente com sistemas externos, como buscar dados de uma API, manipular o DOM diretamente (ex: mudar o título da página), configurar timers como `setInterval` ou salvar dados no `localStorage`. Em resumo, enquanto o `useState` dá "memória" ao componente, o `useEffect` permite que ele "aja".
        </p>
        <p>
          A chave para controlar o `useEffect` é seu segundo argumento: o **array de dependências**. Ele determina **quando** o efeito deve ser executado novamente, otimizando a performance e evitando execuções desnecessárias.
        </p>
      </div>

      <p className="font-bold md:text-lg">
        Exemplos Práticos
      </p>

      <p className="font-bold md:text-lg">
        1. Buscar Dados de uma API (Data Fetching)
      </p>
      <div className="flex w-full justify-center">
        <PerfilPokemon />
      </div>
      <p className="text-xs md:text-sm">
        Este é o uso mais comum. O efeito é acionado assim que o componente é montado para buscar dados. Quando se usa busca com fetch, é uma boa
        prática criar um componente apenas para receber um valor e usar fetch com esse valor, para trazer de volta um componente usando os dados do fetch.
        <br></br>
        O array de dependências `[pokemonId]` garante que uma nova busca só será feita se o ID do Pokémon mudar, e não a cada nova renderização do componente. Existem
        outras formas de dar fetch em dados, como libraries como axios e tanstacky (que não precisam de useEffect). Mas o useEffect só é necessário se usar fetch()
      </p>

      <p className="font-bold md:text-lg">
        2. Manipular o Título da Página (Interação com o DOM)
      </p>
      <div className="w-full flex justify-center">
        <ContadorComTitulo />
      </div>
      <p className="text-xs md:text-sm">
        O efeito altera o `document.title` da página. Como sua dependência é `[contagem]`, ele só é executado quando o estado `contagem` muda, ignorando outras atualizações de estado e otimizando a performance.
        <br></br>
        Qualquer manipulação do dom deve ser feita dentro do useEffect pelo fato de que se for feito direto no código, o react não reconhece aquela mudança, e quando renderizar o app, ele vai sobreescreve-la, pois ele não sabe que aquilo foi feito.
        <br></br>
         Tentar fazer isso durante a renderização é criar uma disputa pelo controle do DOM, uma batalha que o React sempre vencerá para garantir a consistência da UI, resultando em um código instável e imprevisível.
      </p>

      <p className="font-bold md:text-lg">
        3. Ouvir Eventos do Navegador (com Limpeza / Cleanup)
      </p>
      <div className="w-full flex justify-center">
        <LarguraDaJanela />
      </div>
      <p className="text-xs md:text-sm">
        O efeito adiciona um `event listener` para o `resize` da janela. O mais importante aqui é a **função de limpeza** retornada pelo efeito.
        <br></br><br></br>
        Ela é executada quando o componente é desmontado, removendo o `listener` e prevenindo vazamentos de memória (memory leaks). O array vazio `[]` faz com que o efeito seja configurado apenas uma vez.
      </p>

      <p className="font-bold md:text-lg">
        4. Salvar Estado no `localStorage`
      </p>
      <div className="w-full flex justify-center">
        <SalvarFormLocalStorage />
      </div>
      <p className="text-xs md:text-sm">
        Este exemplo mostra como sincronizar o estado de um componente com o `localStorage` do navegador.
        <br></br><br></br>
        O `useEffect` é acionado toda vez que o estado `nome` muda, salvando o valor mais recente. Na primeira renderização, o `useState` recupera este valor salvo, criando uma experiência persistente para o usuário.
      </p>
    </div>
  )
}