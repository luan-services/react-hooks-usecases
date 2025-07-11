import React from 'react'
import { Contador } from '../components/use_state_page_components/Contador'
import { CampoDeNome } from '../components/use_state_page_components/CampoDeNome'
import { AlternarVisibilidade } from '../components/use_state_page_components/AlternarVisibilidade'
import { ListaDeTarefas } from '../components/use_state_page_components/ListaDeTarefas'

export const UseStatePage = () => {
  return (
	<div className="w-full flex flex-col gap-6">
		<div className="text-xs md:text-sm flex flex-col gap-4">
			<p>
				O useState é um dos "Hooks" (ganchos) mais fundamentais e utilizados no React. Ele permite que você adicione e gerencie o estado de um componente de função. Em termos simples, o useState dá ao seu componente a capacidade de "lembrar" de informações que podem mudar ao longo do tempo e de reagir a essas mudanças, atualizando a interface do usuário.
			</p>	
			<p>
				Antes dos Hooks, a capacidade de ter um estado era exclusiva dos componentes de classe. O useState revolucionou o desenvolvimento em React ao trazer essa e outras funcionalidades para a sintaxe mais simples e concisa dos componentes de função.
			</p>	
		</div>
		<p className="font-bold md:text-lg">
			Exemplos Práticos
		</p>
		<p className="font-bold md:text-lg">
			1. Contador
		</p>
		<div className="flex w-full justify-center">
			<Contador/>
		</div>
		<p className="text-xs md:text-sm">
			useState(0) define que o estado contagem começa com o valor 0.
			<br></br>
			Sempre que o botão é clicado, setContagem(contagem + 1) é executado.
			<br></br>
			O React, ao perceber que o estado foi alterado, re-renderiza o componente Contador, exibindo o novo valor de contagem.
		</p>
		<p className="font-bold md:text-lg">
			2. Manipulando Texto
		</p>
		<div className="w-full flex justify-center">
			<CampoDeNome/>
		</div>
		<p className="text-xs md:text-sm">
			Aqui, o estado nome armazena o texto do campo de input. O evento onChange atualiza o estado a cada tecla digitada, e a saudação é exibida em tempo real.
		</p>
		<p className="font-bold md:text-lg">
			3. Controlando um Elemento
		</p>
		<div className="w-full flex justify-center">
			<AlternarVisibilidade/>
		</div>
		<p className="text-xs md:text-sm">
			Neste caso, estaVisivel (um booleano true ou false) controla se o bloco será ou não renderizado na tela.
		</p>
		<p className="font-bold md:text-lg">
			4. Incluindo items em Arrays
		</p>
		<div className="w-full flex justify-center">
			<ListaDeTarefas/>
		</div>
		<p className="text-xs md:text-sm">
			Gerenciar uma lista de itens é um caso de uso clássico. Neste exemplo, vamos criar uma lista de tarefas onde podemos adicionar novos itens. A chave aqui é entender como atualizar um array no estado de forma imutável.
			<br></br><br></br>
			Por que imutabilidade? Você nunca deve modificar o estado diretamente (ex: meuArray.push(novoItem)). O React depende da criação de um novo array para detectar a mudança e disparar a re-renderização. A forma mais fácil de fazer isso é com o operador "spread" (...).
		</p>
	</div>
  )
}


