import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from "./components/Header/Header";
import Routes from "./components/Routes";
import { UserProvider } from "./context/userContext";
import { CrudProvider } from "./context/crudContext";
import "./fontawesome";

function App() {

  // state 
  const [beers, setBeers] = useState([]);

  // hooks
  useEffect(() => {
    fetchBeers();
  }, []);

  // helper functions
  
  const cleanBeerData = (beer) => {
    const cleanedBeer = {
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      image: beer.image_url,
      abv: beer.abv,
      foodPairing: beer.food_pairing,
      isFav: false
    };
    return cleanedBeer;
  }

  // SEARCH BEERS //
  const fetchBeers = (searchTerm) => {
    const url = searchTerm ? `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}` : "https://api.punkapi.com/v2/beers"
    fetch(url)
      .then((response) => response.json())
      .then((searchData) => {
        const cleanBeers = searchData.map(cleanBeerData);
        setBeers(cleanBeers);
        // setBeers(searchData);
        console.log(beers);
    });
  }

  console.log(beers);
  // name, 
  // tagline,
  // description,
  // image_url,
  // abv,
  // food_pairing

//   const cleanRecipeData = (recipe) => {
//     const cleanedRecipe = {
//     id: recipe.idMeal,
//     name: recipe.strMeal,
//     category: recipe.strCategory,
//     area: recipe.strArea,
//     instructions: recipe.strInstructions,
//     thumbnail: recipe.strMealThumb,
//     tags: recipe.strTags,
//     ingredients: getIngredients(recipe),
//     source: recipe.strSource,
//     dateCreated: new Date().toUTCString(),
//     dateModified: null,
//     youtube: recipe.strYoutube,
//     isFav: false,
//     };
//     return cleanedRecipe;
// };

  return (
    <UserProvider>
      <CrudProvider>
        <main>
            <Header />
            <Routes 
              beers={beers}
              updateSearchText={fetchBeers}
            />
        </main>
      </CrudProvider>
    </UserProvider>
  );
}

export default App;
