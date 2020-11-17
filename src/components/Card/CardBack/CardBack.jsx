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
  } = props.beer;

  let randomColor = Math.floor(Math.random()*16777215).toString(16);

  const shortenName = (name) => name.length < 30 ? name : name.substring(0, 25) + "...";
  const shortenDescription = (description) => description.length < 100 ? description : description.substring(0, 80) + "...";
  return (
    <>
        <article className={styles.card}>
          <div className={styles.info}>
            <h2 className={styles.title}>{shortenName(name)}</h2>
            <h3>{tagline}</h3>
            <p>{shortenDescription(description)}</p>
            <div className={styles.moreInfo}>
                <button onClick={handleClick}>Back</button>
            </div>
          </div>
        </article>
    </>
  );
};

export default CardBack;
