import React, { useContext } from 'react';
import styles from "./Favourites.module.scss";
import { CrudContext } from './../../context/crudContext';

const Favourites = () => {
    const crudContext = useContext(CrudContext);
    const { favourites } = crudContext;

    const getFavourites = (beer) => (
        <h1>working</h1>
    )

    return (
        <section>
            <h1>Favourites functionality will be live by 12th December 2020</h1>
                {favourites.map(getFavourites)}
        </section>
    )
}

export default Favourites;
