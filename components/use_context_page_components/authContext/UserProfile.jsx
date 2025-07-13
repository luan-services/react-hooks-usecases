import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function UserProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Por favor, faça o login.</div>;
  }

  return <div>Bem-vindo, {user.name}!</div>;
}

export default UserProfile;