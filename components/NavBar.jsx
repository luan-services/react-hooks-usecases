import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  	return (
		<nav className="w-full flex p-4 shadow-[0px_4px_8px_#00000020] justify-center">
			<NavLink className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'} to="/useState">
				<p className="font-bold transition active:scale-95">
					UseState
				</p>
			</NavLink>
		</nav>
	);
}