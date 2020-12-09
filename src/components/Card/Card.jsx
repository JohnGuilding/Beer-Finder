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
    }

    return (
        <>
            <article 
                className={`${styles.beerCard} ${flipStyles}`}
                data-cy="card"
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

// CAN JSX // 

// <div 
//     className={styles.can}
//     style={{backgroundColor: `#${randomColor}`}}>
//     <div className={styles.canTop}></div>
//     <div className={styles.canBottom}></div>
// </div> 

// "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit."