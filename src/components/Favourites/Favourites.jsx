import React, { useContext, useEffect } from 'react';
import styles from "./Favourites.module.scss";
import Card from './../Card/Card';
import { CrudContext } from './../../context/crudContext';

const Favourites = () => {
    const crudContext = useContext(CrudContext);
    const { favourites, getFavourites } = crudContext;

    useEffect(() => {
        getFavourites();
        console.log(favourites);
    }, [])

    const showFavourites = favourites.length ? (
        favourites.map((favourite) => (
            <Card 
                key={favourite.id} 
                beer={favourite} 
            />
        ))
    ) : (
        <h2 className={styles.message}>No beverages in sight! Sign in to add beers to your favourites. </h2>
    )

    return (
        <section className={styles.favDashboard}>
                {showFavourites}
        </section>
    )
}

export default Favourites;
