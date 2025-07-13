import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  	return (
		<nav className="w-full fixed bg-white flex p-4 shadow-[0px_4px_8px_#00000020] justify-center gap-4 md:gap-8">
			<NavLink className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'} to="/useState">
				<p className="font-bold transition active:scale-95">
					UseState
				</p>
			</NavLink>
			<NavLink className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'} to="/useEffect">
				<p className="font-bold transition active:scale-95">
					UseEffect
				</p>
			</NavLink>
			<NavLink className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'} to="/useContext">
				<p className="font-bold transition active:scale-95">
					UseContext
				</p>
			</NavLink>
			<NavLink className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'} to="/useReducer">
				<p className="font-bold transition active:scale-95">
					UseReducer
				</p>
			</NavLink>
		</nav>
	);
}