import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Routes from "./components/Routes";
import firebase, { provider } from './firebase';

function App() {

  const [beers, setBeers] = useState([]);

  let url = `https://api.punkapi.com/v2/beers${request}`

  const fetchBeers = () => {
    fetch(url)
    .then((response) => response.json)
    .then(data => setBeers(data))
  }




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

  // SIGN IN/OUT //
  const [user, setUser] = useState(null)

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
        <Header
        user={user}
        signIn={signIn}
        signOut={signOut}
        />
        <Search 
        // updateSearchText={???} 
        />
        <Routes 
        user={user} 
        // setRandomBeer={getRandomBeer} 
        // randomBeer={randomBeer}
        />
    </main>
  );
}

export default App;

