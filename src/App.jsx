import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Routes from "./components/Routes";
import firebase, { provider } from './firebase';

function App() {

  // PAGE LOAD BEERS //
  const [beers, setBeers] = useState([]);

  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((data) => {
      setBeers(data)
    });
  }

  useEffect(() => {
    fetchBeers()
  }, []);


  // SEARCH BEERS //
  
  const [searchBeers, setSearchBeers] = useState([]);

  const fetchSearchBeers = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
    .then((response) => response.json())
    .then((searchData) => {
      setSearchBeers(searchData)
    });
  }

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

  // var docWidth = document.documentElement.offsetWidth;

  // [].forEach.call(document.querySelectorAll('*'), function (el) {
  //   if (el.offsetWidth > docWidth) {
  //     console.log(el);
  //   }
  // });

  const [searchBoolean, setSearchBoolean] = useState('');

  return (
    <main>
        <Header
        user={user}
        signIn={signIn}
        signOut={signOut}
        />
        <Search 
        updateSearchText={fetchSearchBeers}
        setSearchBoolean={setSearchBoolean}
        />
        <Routes 
        user={user} 
        beers={beers}
        searchBeers={searchBeers}
        searchBoolean={searchBoolean}
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