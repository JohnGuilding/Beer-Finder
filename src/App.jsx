import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
import firebase, { provider } from './firebase';

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


  // const grabBeers = (searchTerm) => {
  //   fetch (`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //           const response = res.map(item => item.name)
  //           // can pass this as prop
  //           setSearchBeers(response);
  //       });
  //   }


  // RANDOM BEER BTN //
  // const [randomBeer, setRandomBeer] = useState([])

  // const getRandomBeer = () => {
  //     fetch (`https://api.punkapi.com/v2/beers/random`)
  //         .then((res) => res.json())
  //         .then((res) => {
  //             const response = res.map((item) => {
  //               return (item.name);
  //             });
  //             console.log(response);
  //             // can pass this as prop
  //             setRandomBeer(response);
  //             console.log(res);
  //         });
  //     }