import React, { useState } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBack = (props) => {

  const { handleClick } = props;

  const [favState, setFavState] = useState(false);

  const { 
    name,
    tagline,
    description,
    image_url,
    abv,
    food_pairing
  } = props.beer;

  const heartIcon = favState ? ["fas", "heart"] : ["far", "heart"];
  
  const handleFavClick = (e) => {
    e.stopPropagation();
    setFavState(!favState);
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
                <li>{food_pairing[0]}</li>
                <li>{food_pairing[1]}</li>
                <li>{food_pairing[2]}</li>
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
