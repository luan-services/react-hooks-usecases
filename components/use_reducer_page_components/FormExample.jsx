import React, { useReducer } from 'react';

// 1. Estado Inicial do formulário
const initialState = {
  name: '',
  email: '',
  message: '',
  status: 'idle', // idle, submitting, success, error
};

// 2. A função Reducer para lidar com as ações do formulário
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      // action.payload será { field: 'name', value: 'John Doe' }
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'SUBMIT':
      return {
        ...state,
        status: 'submitting',
      };
    case 'SUCCESS':
      return {
        ...initialState, // Limpa o formulário
        status: 'success',
      };
    case 'ERROR':
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}

// 3. O componente do formulário
export const FormExample = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });

    // Simulando uma chamada de API
    setTimeout(() => {
      // Suponha que a submissão foi bem-sucedida
      console.log('Formulário enviado:', state);
      dispatch({ type: 'SUCCESS' });
      // Se houvesse um erro: dispatch({ type: 'ERROR' });
    }, 1500);
  };

  return (
    <div className="shadow-md border-gray-200 border-1 w-120 min-h-60 p-8 flex flex-col gap-4 items-center justify-center">
    <form onSubmit={handleSubmit}>
      {state.status === 'success' && <p>Mensagem enviada com sucesso!</p>}
      {state.status === 'error' && <p>Ocorreu um erro. Tente novamente.</p>}

      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label>Mensagem:</label>
        <textarea
          name="message"
          value={state.message}
          onChange={handleFieldChange}
        />
      </div>
      <button  className="min-w-16 min-h-8 px-2 py-1 rounded-lg bg-blue-500 text-white font-bold text-sm active:scale-95 transition" type="submit" disabled={state.status === 'submitting'}>
        {state.status === 'submitting' ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
    </div>
  );
}