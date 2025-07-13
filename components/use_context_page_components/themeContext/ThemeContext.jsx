import { createContext } from 'react';
import { useState } from 'react';

//importando o css do theme
import "./theme.css"

export const ThemeContext = createContext({
	theme: "light", // 'light' é o valor padrão
	toggleTheme: () => {}
}); 

export const ThemeProvider = ({ children }) => {
	// setando um estado pra classe
  	const [theme, setTheme] = useState('light');

	// função que muda o estado para light/dark
	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		// cria um provider que envolve todos os filhos e passa o estado e a função de modificar o estado p eles
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
)};