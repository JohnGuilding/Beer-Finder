import React, { useState, useContext } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CrudContext } from "./../../../context/crudContext";

const CardBack = (props) => {

  const { beer, handleClick } = props;

  const { 
    name, 
    description,
    abv,
    foodPairing,
    isFav
  } = beer;

  const [ favState, setFavState ] = useState(isFav);
  const crudContext = useContext(CrudContext);
  const { toggleFav, test } = crudContext;

  const heartIcon = favState ? ["fas", "heart"] : ["far", "heart"];
  
  //todo
  const handleFavClick = () => {
    toggleFav(beer)
    setFavState(!isFav);
    console.log(favState);
    // alert('Favourites functionality will be live by 12th December 2020')
    test();
  }; 

  return (
    <>
        <article className={styles.card}>
          <span className={styles.heart} onClick={handleFavClick}>
            <FontAwesomeIcon icon={heartIcon} className={styles.inner} />
          </span>
          <div className={styles.container}>
            <h2 className={styles.title}>{name}</h2>
            <h3>{abv}% ABV</h3>
            <div className={styles.scrollBox}>
              <p>{description}</p>
              <h3 className={styles.pairingsTitle}>Food Pairings</h3>
              <ul>
                <li>{foodPairing[0]}</li>
                <li>{foodPairing[1]}</li>
                <li>{foodPairing[2]}</li>
              </ul>
            </div>
            <div className={styles.moreInfo}>
                <button onClick={handleClick}>Back</button>
            </div>
          </div>
        </article>
    </>
  );
};

export default CardBack;
