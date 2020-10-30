import React from 'react';
import styles from "./../styles/App.module.scss";
import Styles from "./../styles/Card.module.scss"; 
import Card from "./Card";



const Suprise = (props) => {
    const {setRandomBeer, randomBeer} = props;

     // passing beer to card
    const getBeer = (beer) => (
        <div key={beer.id}>
            <Card beer={beer}/>
        </div>
    )

    return (
        <div>
            <button onClick={setRandomBeer} className={styles.btn}>Random Beer</button>
            This is a suprise
            <section className={styles.dashboard}>
                {randomBeer.map(getBeer)}
            </section>
        </div>
    )
}

export default Suprise;
