import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';
import styles from './profile-bar.css';
import Profile from '../Profile';

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired
};

function ProfileBar({ picture, username, onOpenText, onLogout }) {
  return (
    <div className={styles.root}>
      <div className={styles.profileContainer}>
        <Link to="/profile">
          <figure>
            <img className={styles.avatar} src={picture} />
          </figure>
        </Link>
        <span className={styles.username}>Hola @{username}!</span>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={onOpenText} className={styles.buttonTweet}>
          <span className="fa fa-lg fa-edit" /> Tweet!
        </button>
        <button onClick={onLogout} className={styles.buttonLogout}>
          <span className="fa fa-sign-out" /> Salir
        </button>
      </div>
    </div>
  );
}

ProfileBar.propTypes = propTypes;

export default ProfileBar;
