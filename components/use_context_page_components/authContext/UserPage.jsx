import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Por favor, faça o login.</div>;
  }

  return <div>Bem-vindo, {user.name}! id: {user.id}</div>;
}