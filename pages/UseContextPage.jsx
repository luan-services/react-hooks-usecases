import React from 'react'
import { ThemeContainer } from '../components/use_context_page_components/themeContext/ThemeContainer'
import { AuthContainer } from '../components/use_context_page_components/authContext/AuthContainer'

export const UseContextPage = () => {
    return (
        <div className="w-full flex flex-col gap-6">
			<div className="text-xs md:text-sm flex flex-col gap-4">
				<p>
					O useContext é um dos hooks fundamentais do React que oferece uma maneira elegante e eficiente de compartilhar dados entre componentes, sem a necessidade de passá-los manualmente através de múltiplos níveis da árvore de componentes. Ele funciona como um atalho para consumir informações de um "contexto" global disponível para uma parte específica da sua aplicação.
				</p>
				<p>
					Imagine uma estrutura de componentes aninhados, onde um componente no topo da hierarquia possui um dado (como informações de um usuário autenticado ou o tema da aplicação) que um componente em um nível muito mais baixo precisa acessar. Sem o useContext, a única maneira de fazer essa informação chegar ao destino seria passá-la como propriedade (prop) de pai para filho, em cada um dos componentes intermediários, mesmo que eles não precisem diretamente daquele dado.
				</p>
				<p>
					Esse processo, conhecido como "prop drilling", pode tornar o código verboso, difícil de manter e propenso a erros, especialmente em aplicações complexas e com muitas camadas de componentes.
				</p>
				<p className='text-red-900'>
					Existem momentos em que o useContext não é viável, pois ele renderizar todos os filhos que estão usando o context a cada atualização, em apps grande isso pode ser um problema. o useReducer com a função dispatch pode ajudar a minimizar esse problema. Isso é uma forma de emular o <p className='font-bold inline'>redux</p>, uma biblioteca do react de gerenciamento de estado.
				</p>
				<p>
					O useReducer entra nisso da seguinte forma: quando existem componentes que não precisam do valor do context, apenas da função de modificá-lo, vale a pena usar o useReducer. Isso porque, a função dispatch do reducer impede o comportamento natural de re-renderizar o componente que só precisar do dispatch.
				</p>
			</div>

			<p className="font-bold md:text-lg">
				Exemplos Práticos
			</p>

			<p className="font-bold md:text-lg">
				1. Setar o tema da página (inútil pois dá p usar dark: do tailwindcss)
			</p>
			<div className="flex w-full justify-center">
				<ThemeContainer/>
			</div>
			<p className="text-xs md:text-sm">
				Apesar de sua utilidade, é importante usar o useContext com moderação. Para situações mais simples, onde a passagem de props por um ou dois níveis é suficiente, essa pode ser uma abordagem mais direta.
				<br></br>
				Além disso, uma atualização no valor do Provider fará com que todos os componentes que consomem aquele contexto sejam re-renderizados. Em aplicações muito grandes e com dados que mudam com frequência, isso pode levar a problemas de performance. Nesses casos, a combinação do useContext com o useReducer ou o uso de bibliotecas de gerenciamento de estado mais robustas, como Redux ou Zustand, pode ser mais apropriada.
			</p>

			<p className="font-bold md:text-lg">
				2. Autenticar usuário e usar os dados dele.
			</p>
			<div className="flex w-full justify-center">
				<AuthContainer/>
			</div>
			<p className="text-xs md:text-sm">
				Se o seu AuthProvider envolvesse toda a sua aplicação, uma mudança no estado de autenticação (login ou logout) poderia, em teoria, disparar uma re-renderização de grande parte da sua árvore de componentes. ...Mas para Autenticação, Isso Geralmente é Aceitável e até Desejável.<br></br>
				<br></br>
				Além disso, um login ou logout é um evento significativo que deve alterar a interface do usuário em muitos lugares. 
			</p>
			<p className="text-xs md:text-sm">
				<p className="font-bold">Separe os Contextos (A Estratégia Mais Importante)</p>
				<br></br>
				Não coloque tudo relacionado ao usuário em um único contexto.
				<br></br>				<br></br>
				Ruim: Ter um AuthContext com  user, login, logout, userPreferences, lastNotificationTimestamp . Se lastNotificationTimestamp mudar a cada minuto, ele forçará uma re-renderização em componentes que só se importam com o user.
				<br></br>
				Bom: Dividir em contextos mais específicos.
				<br></br>				<br></br>
				AuthContext: Contém apenas o estado de autenticação e as funções login/logout. Muda muito raramente.
				<br></br>
				UserProfileContext: Contém as informações do perfil do usuário que podem ser editadas (nome, avatar, etc.). Muda quando o usuário edita o perfil.
				<br></br>
				NotificationContext: Contém informações sobre notificações. Pode mudar com mais frequência.
				<br></br>				<br></br>
				Dessa forma, um componente que exibe o botão de "Sair" só precisa consumir o AuthContext. Ele não será re-renderizado se as notificações do usuário mudarem.
			</p>
        </div>
    )
}