import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
// import firebase, { provider } from './firebase';
import { UserProvider } from "./context/userContext";
import "./fontawesome";

function App() {

  // state 
  const [beers, setBeers] = useState([]);

  // hooks
  useEffect(() => {
    fetchBeers();
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

  return (
    <UserProvider>
      <main>
          <Header />
          <Routes 
            beers={beers}
            updateSearchText={fetchBeers}
            // addToFavourites={addToFavourites}
          />
      </main>
    </UserProvider>
  );
}

export default App;
