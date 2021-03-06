import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {

  const { handleClick } = props;

  const { 
    name,
    tagline,
    description,
    image
  } = props.beer;

  const shortenName = (name) => name.length < 30 ? name : name.substring(0, 25) + "...";
  const shortenDescription = (description) => description.length < 100 ? description : description.substring(0, 130) + "...";
  return (
    <>
      <article className={styles.card}>
        <div className={styles.container}>
          <div className={styles.beerImg}>
            <div className={styles.circle}></div>
            <img src={image} alt="beer"/>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{shortenName(name)}</h2>
            <h3>{tagline}</h3>
            <p>{shortenDescription(description)}</p>
          </div>
          <div className={styles.moreInfo}>
              <button onClick={handleClick}>More Info</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardFront;
