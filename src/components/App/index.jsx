import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import 'normalize-css';
import styles from './app.css';

import Header from '../Header';
import Main from '../Main';
import Profile from '../Profile';
import Login from '../Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //usuario es null por default hasta no loguearse
      user: null
    };

    this.handleOnAuth = this.handleOnAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        console.log(user);
      } else {
        this.setState({ user: null });
      }
    });
  }

  handleOnAuth() {
    const provider = new firebase.auth.GithubAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.error(`Error: ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => console.log(`Te has desconectado correctamente.`))
      .catch(() => console.error(`Un Error Ocurrió.`));
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route
            exact
            path="/"
            render={() => {
              if (this.state.user) {
                return (
                  <Main user={this.state.user} onLogout={this.handleLogout} />
                );
              } else {
                return <Login onAuth={this.handleOnAuth} />;
              }
            }}
          />

          <Route
            path="/profile"
            render={() => (
              // Metodo ES6 de retorno de funcion
              <Profile
                picture={this.state.user.photoURL}
                username={this.state.user.email.split('@')[0]}
                displayName={this.state.user.displayName}
                location={this.state.user.location}
                emailAddress={this.state.user.email}
              />
            )}
          />

          <Route
            path="/user/:username"
            render={({ match }) => {
              return <Profile username={match.params.username} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
