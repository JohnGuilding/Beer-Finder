import React, { useContext, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import Search from "./../Search";
import Card from "./../Card";
import Modal from "./../Modal";
import { ApiContext } from './../../context/apiContext';
import { CrudContext } from './../../context/crudContext';

const Dashboard = () => {
    const apiContext = useContext(ApiContext);
    const crudContext = useContext(CrudContext);
    const { beers } = apiContext;
    const { favourites, getFavourites } = crudContext;

    useEffect(() => {
        getFavourites();
        console.log(favourites);
    }, [])

    return (
        <>
            <Search />
            <section className={styles.dashboard}>
                {beers ? (
                    beers.map((beer) => 
                    <Card 
                        key={beer.id} 
                        beer={beer} 
                    />)
                ) : (
                    <h2>Beers Inbound</h2>
                )}
            </section>
            <div>
                <Modal />
            </div>
        </>
    );
};

export default Dashboard;
