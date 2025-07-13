import React from 'react';
// importa o provider do Context para envolver todas as divs que vão poder ler os valores
import { AuthProvider } from './AuthContext';
// importa o componente UserPage
import { UserPage } from './UserPage';
import LoginButton from './LoginButton';

export const AuthContainer = () => {
    // o componente atual em si não pode acessar os dados do context, apenas os filhos que estão dentro de ThemeProvider

    return (
        // essa div principal é o provider, o context criado anteriormente que inclui a string 'light'
        <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
            <AuthProvider>
                <UserPage/>
                <LoginButton/>
            </AuthProvider>
        </div>
    );
}