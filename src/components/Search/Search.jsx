import React from "react";
import styles from "./Search.module.scss";
import Modal from "./../Modal";
import { Link } from '@reach/router';

const Search = (props) => {

  const { modal, setModal, setModalInfo } = props;
     // TOGGLE SHOWING MODAL //
      const modalToggle = () => {
      setModal(!modal);
      }
  
      // setModalInfo(props.beer)
  

  const { updateSearchText } = props;

  return (
      <section className={styles.search}>
          <input data-cy="searchBox" type="text" placeholder="Search our beverages..." onInput={e => updateSearchText(e.target.value)} />
          <div 
            className={styles.supriseBtn} 
            onClick={() => modalToggle()}
            to="/suprise">
            <h3>Random</h3>
          </div>
          <Link className={styles.supriseBtn} to="/favourites">
            <h3>Favourites</h3>
          </Link>
      </section>
  );
}

export default Search;
