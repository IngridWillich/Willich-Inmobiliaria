 actions.js
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// reducers.js
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

const initialState = {
  isAuthenticated: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: 'Usuario o contraseña incorrectos',
      };
    default:
      return state;
  }
};

export default reducer;

// LoginForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from './actions';

const LoginForm = ({ loginSuccess, loginFailure }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la validación del usuario y contraseña
    if (username === 'usuarioValido' && password === 'contraseñaValida') {
      loginSuccess();
    } else {
      loginFailure();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

const mapDispatchToProps = {
  loginSuccess,
  loginFailure,
};

export default connect(null, mapDispatchToProps)(LoginForm);