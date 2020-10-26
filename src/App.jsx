import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Dashboard from "./components/Dashboard";

function App() {

  // SEARCH FOR BEERS //
  const [searchBeers, setSearchBeers] = useState([])

  const grabBeers = (searchTerm) => {
      fetch (`https://api.punkapi.com/v2/beers?beer_items=${searchTerm}`)
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

      useEffect(() => {
        grabBeers();
      }, []);

  return (
    <>
      <Header />
      <main>
        <Aside 
        updateSearchText={grabBeers} 
        setRandomBeer={getRandomBeer} 
        />
        <Dashboard 
        searchBeers={searchBeers} 
        randomBeer={randomBeer}
        />
      </main>
    </>
  );
}

export default App;

