import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Dashboard from "./components/Dashboard";
import firebase, { provider } from './firebase';

function App() {

  // SEARCH FOR BEERS //
  const [searchBeers, setSearchBeers] = useState([])
  const [user, setUser] = useState(null)


  // const grabBeers = () => {
  //   fetch (`https://api.punkapi.com/v2/beers`)
  //       .then((res) => res.json())
  //       .then((res) => setSearchBeers(res))
  //   }

  const grabBeers = (searchTerm) => {
      fetch (`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
          .then((res) => res.json())
          .then((res) => {
              const response = res.map(item => item.name)
              // can pass this as prop
              setSearchBeers(response);
          });
      }

  // RANDOM BEER BTN //
  const [randomBeer, setRandomBeer] = useState([])

  const getRandomBeer = () => {
      fetch (`https://api.punkapi.com/v2/beers/random`)
          .then((res) => res.json())
          .then((res) => {
              const response = res.map((item) => {
                return (item.name);
              });
              console.log(response);
              // can pass this as prop
              setRandomBeer(response);
              console.log(res);
          });
      }

      // use it to pass beers on load????
      // useEffect(() => {
      //   grabBeers();
      // }, []);

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

      // console.log(user);

  return (
    <main>
      <Header 
      user={user}
      signIn={signIn}
      signOut={signOut}
      />
      <section>
        <Aside 
        updateSearchText={grabBeers} 
        setRandomBeer={getRandomBeer} 
        />
        <Dashboard 
        searchBeers={searchBeers} 
        randomBeer={randomBeer}
        />
      </section>
    </main>
  );
}

export default App;
