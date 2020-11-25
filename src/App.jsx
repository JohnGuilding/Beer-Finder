import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
import firebase, { provider } from './firebase';
import "./fontawesome";

function App() {

  // state 
  const [beers, setBeers] = useState([]);
  const [user, setUser] = useState(null)

  // hooks
  useEffect(() => {
    fetchBeers();
    getUser();
  }, []);

  // helper functions

  // SEARCH BEERS //
  const fetchBeers = (searchTerm) => {
    const url = searchTerm ? `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}` : "https://api.punkapi.com/v2/beers"
    fetch(url)
      .then((response) => response.json())
      .then((searchData) => {
        setBeers(searchData)
    });
  }

  // SIGN IN/OUT //
  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  }
  const signOut = () => {
    firebase.auth().signOut();
  }

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }


  return (
    <main>
        <Header
          user={user}
          signIn={signIn}
          signOut={signOut}
        />
        <Routes 
          user={user} 
          beers={beers}
          updateSearchText={fetchBeers}
        />
    </main>
  );
}

export default App;
