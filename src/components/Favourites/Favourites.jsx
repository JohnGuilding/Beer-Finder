import React, { useContext, useEffect } from 'react';
import styles from "./Favourites.module.scss";
import Card from './../Card/Card';
import { CrudContext } from './../../context/crudContext';

const Favourites = () => {
    const crudContext = useContext(CrudContext);
    const { favourites, getFavourites } = crudContext;

    useEffect(() => {
        getFavourites();
    }, [])

    const showFavourites = favourites.length ? (
        favourites.map((favourite) => (
            <Card 
                key={favourite.id} 
                beer={favourite} 
            />
        ))
    ) : (
        <h2>not working</h2>
    )


    return (
        <section>
            <h1>Favourites functionality will be live by 12th December 2020</h1>
                {showFavourites}
        </section>
    )
}

export default Favourites;
