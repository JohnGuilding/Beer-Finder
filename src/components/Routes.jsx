import React from 'react';
import { Router } from "@reach/router";
import styles from "./../styles/App.module.scss"
import PrivateRoutes from "./PrivateRoutes";
import Favourites from "./Favourites";
import Dashboard from "./Dashboard/Dashboard";


const Routes = (props) => {

    const { user, updateSearchText, beers } = props;

    return (
        <Router className={styles.router}>
            <PrivateRoutes path="/" user={user}>
                <Favourites path='/favourites' />
            </PrivateRoutes>
            <Dashboard 
                path="/" 
                updateSearchText={updateSearchText}
                beers={beers}
            />
        </Router>
    )
}

export default Routes
