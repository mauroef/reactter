import React from 'react';
import PropTypes from 'react-proptypes';
import styles from './login.css';

const propTypes = {
  onAuth: PropTypes.func.isRequired
};

function Login({ onAuth }) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Necesitamos que inicies sesion con tu cuenta de GitHub para que puedas
        leer y escribir mensajes.
      </p>
      <div className={styles.container}>
        <button onClick={onAuth} className={styles.button}>
          <span className={'fa fa-github'} /> Login con GitHub
        </button>
      </div>
    </div>
  );
}

Login.propTypes = propTypes;

export default Login;
