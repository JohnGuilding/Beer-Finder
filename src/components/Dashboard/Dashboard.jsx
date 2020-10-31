import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "./../Card"

const Dashboard = (props) => {

    const { beers } = props;

    return (
        <>
            <section className={styles.dashboard}>
                {beers ? beers.map(beer => <Card key={beer.id} beer={beer} />) : <h2>Beers Inbound</h2>}
            </section>
        </>
    )
}

export default Dashboard;
