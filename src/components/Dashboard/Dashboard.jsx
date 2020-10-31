import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "./../Card"
// import styles from "./../styles/App.module.scss";
// import Styles from "./../styles/Card.module.scss"; 


const Dashboard = (props) => {

    const { searchBeers } = props;

    // passing beer to card
    const getBeer = (beer) => (
        <div key={beer.id}>
            <Card beer={beer}/>
        </div>
    )

    return (
        <>
            <section className={styles.dashboard}>
                {searchBeers.map(getBeer)}
            </section>
        </>
    )
}

export default Dashboard;
