// Toolbar.js
import React, { useContext } from 'react';
import { ThemedButton } from './ThemedButton';

// importa o componente do contexto
import { ThemeContext } from './ThemeContext';

// div apenas para mostrar que o context pode ser alcançado em qualquer nivel pai/filho
export const Toolbar = () => {

	// recebe os valores de theme e da função toggleTheme via useContext do pai diretamente (ThemeContext.jsx)
  	const { theme, toggleTheme } = useContext(ThemeContext)
  	
	return (
        <div className={`${theme} flex flex-col p-4 text-center gap-2`}>
            <p>
				div com tema, classe {theme} adicionada ao container e ao botão
			</p> 
             <ThemedButton />
            <button className="max-w-32 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" onClick={toggleTheme}>
            	Mudar Tema
            </button>
        </div>
  );
}