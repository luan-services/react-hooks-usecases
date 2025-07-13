import React, { useReducer, useEffect } from 'react';
import axios from 'axios'; // Exemplo usando axios para a requisição

// 1. Estado Inicial
const initialState = {
  loading: true,
  error: '',
  post: {},
};

// 2. O Reducer para a busca de dados
function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Algo deu errado!',
      };
    default:
      return state;
  }
}

// 3. O componente que busca os dados
export const DataFetching = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []); // O array vazio faz com que o useEffect execute apenas uma vez

  return (
    <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
      {state.loading ? 'Carregando...' : <h2>{state.post.title}</h2>}
      {state.error ? state.error : null}
    </div>
  );
}