// ThemedButton.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemedButton = () => {
	// recebe o valor de theme do context ThemeContext
	const { theme } = useContext(ThemeContext);

	return (
		<button className={`${theme}button`}>
			botão com tema
		</button>
	);
}