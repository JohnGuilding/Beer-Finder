import React, { useState } from 'react';
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {

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
            <article className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.beerImg}>
                        <div className={styles.circle}></div>

                        <img src={image_url} alt="A picture of beer"/>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{shortenName(name)}</h2>
                        <h3>{tagline}</h3>
                        <p>{shortenDescription(description)}</p>
                        <div className={styles.moreInfo}>
                            <button>More Info</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;

{/* <article 
    className={styles.card}
    style={{backgroundColor: `#${randomColor}`}}>
    <div className={styles.canTop}></div>
    <div className={styles.canMiddle}> 
        <img src={image_url} />
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{description}</p>
        <h4>{abv} abv</h4>
    </div>
    <div className={styles.canBottom}></div>
</article> */}

// can jsx
{/* <div 
    className={styles.can}
    style={{backgroundColor: `#${randomColor}`}}>
    <div className={styles.canTop}></div>
    <div className={styles.canBottom}></div>
</div> */}


// "food_pairing": [
//     "Spicy carne asada with a pico de gallo sauce",
//     "Shredded chicken tacos with a mango chilli lime salsa",
//     "Cheesecake with a passion fruit swirl sauce"
// ]

// "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit."