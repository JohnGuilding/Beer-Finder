import React from 'react'
// import styles from "./../styles/App.module.scss";
import styles from "./Card.module.scss";


const Card = (props) => {

    // const { 
    //     name,
    //     tagline,
    //     description,
    //     abv,
    // } = props.beer;

    const { beer } = props;


    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);

    return (
        <>
            <article 
                className={styles.card}
                style={{backgroundColor: `#${randomColor}`}}>
                <div className={styles.canTop}></div>
                <div className={styles.canMiddle}> 
                    <h2>{beer}</h2>
                    {/* <h3>{tagline}</h3>
                    <p>{description}</p>
                    <h4>{abv}</h4> */}
                </div>
                <div className={styles.canBottom}></div>
            </article>
        </>
    )
}

export default Card
