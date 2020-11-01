import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "./../Card"

const Dashboard = (props) => {

    const { beers, searchBeers } = props;

    // const displayBeers = () => {
    //     if (searchBeers) {
    //         console.log('false');
    //         // {beers ? beers.map(beer => <Card key={beer.id} beer={beer} />) : <h2>Beers Inbound</h2>}
    //     } else {
    //         console.log('true');
    //         // {searchBeers.map(getSearchCard)}
    //     }
    // }

    const getSearchCard = (searchBeer) => (
        <Card key={searchBeer.id} searchBeer={searchBeer} />
    );

    return (
        <>
            <section className={styles.dashboard}>
                {beers ? beers.map(beer => <Card key={beer.id} beer={beer} />) : <h2>Beers Inbound</h2>}
                {/* {searchBeers ? searchBeers.map(searchBeer => <Card key={searchBeer.id} searchBeer={searchBeer} />) : <h2>Beers Inbound</h2>} */}
                {/* {displayBeers} */}
                {/* {searchBeers.map(getSearchCard)} */}
            </section>
        </>
    )
}

export default Dashboard;
