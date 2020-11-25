import React from "react";
import styles from "./Search.module.scss";
import Modal from "./../Modal";
import { Link } from '@reach/router';

const Search = (props) => {

  const { modal, setModal, setModalInfo, updateSearchText } = props;

  const fetchRandomBeer = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => response.json())
    .then((data) => {
      setModalInfo(data[0]);
    });
  }

  // TOGGLE SHOWING MODAL //
  const modalToggle = () => {
    setModal(!modal);
    fetchRandomBeer();
  }

  return (
      <section className={styles.search}>
          <input data-cy="searchBox" type="text" placeholder="Search our beverages..." onInput={e => updateSearchText(e.target.value)} />
          <div 
            className={styles.btn} 
            onClick={() => modalToggle()}
            to="/suprise">
            <h3>Random</h3>
          </div>
          <Link className={styles.btn} to="/favourites">
            <h3>Favourites</h3>
          </Link>
      </section>
  );
}

export default Search;
