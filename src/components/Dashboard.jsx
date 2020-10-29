import React from 'react'
import styles from "./../styles/App.module.scss";
import Styles from "./../styles/Card.module.scss"; 
import Card from "./Card";


const Dashboard = (props) => {

    const { pageLoadBeers, searchBeers, randomBeer } = props;

    // passing beer to card
    const getBeer = (beer) => (
        <div key={beer.id}>
            <Card beer={beer}/>
        </div>
    )

    return (
        <>
            <section className={styles.dashboard}>
                {pageLoadBeers.map(getBeer)}
                {searchBeers.map(getBeer)}
                {randomBeer.map(getBeer)}
            </section>
        </>
    )
}

export default Dashboard;
