import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {

  const { handleClick } = props;

  const { 
    name,
    tagline,
    description,
    image_url,
    abv,
    food_pairing
  } = props.beer;

  // let randomColor = Math.floor(Math.random()*16777215).toString(16);

  // const shortenName = (name) => name.length < 30 ? name : name.substring(0, 25) + "...";
  // const shortenDescription = (description) => description.length < 100 ? description : description.substring(0, 80) + "...";
  return (
    <>
        <article className={styles.card}>
          <div className={styles.info}>
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
