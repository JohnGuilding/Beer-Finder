import React, { useState } from 'react';
import styles from "./Card.module.scss";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = (props) => {

    const { beer } = props;

    const [isFaceDown, setIsFaceDown] = useState(false);

    const flipStyles = isFaceDown ? styles.faceDown : "";

    const handleClick = () => {
        setIsFaceDown(!isFaceDown);
        console.log('working');
    }

    return (
        <>
            <article 
                className={`${styles.beerCard} ${flipStyles}`}
            >
                <div className={styles.front}>
                    <CardFront 
                        beer={beer}
                        handleClick={handleClick}                   
                    />
                </div>
                <div className={styles.back}>
                    <CardBack 
                        beer={beer}
                        handleClick={handleClick}
                    />
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