import React from 'react'
import styles from "./../styles/App.module.scss";
import Card from "./Card";


const Dashboard = (props) => {

    const { searchBeers, randomBeer } = props;

    // passing beer to card
    const getBeer = (beer) => (
        <div key={beer.id}>
            <Card beer={beer}/>
        </div>
    )

    return (
        <section className={styles.dashboard}>
            {searchBeers.map(getBeer)}
            {randomBeer.map(getBeer)}
        </section>
    )
}

export default Dashboard
