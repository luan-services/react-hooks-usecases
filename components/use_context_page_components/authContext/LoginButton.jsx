import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function LoginButton() {
  const { user, login, logout } = useContext(AuthContext);

  if (user) {
    return <button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" onClick={logout}>Sair</button>;
  }

  return <button className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" onClick={() => login({ name: 'Usuário Exemplo', id: '1234' })}>Entrar</button>;
}

export default LoginButton;