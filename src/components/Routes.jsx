import React from 'react';
import { Router } from "@reach/router";
import styles from "./../styles/App.module.scss"
import PrivateRoutes from "./PrivateRoutes";
import Favourites from "./Favourites";
import Dashboard from "./Dashboard/Dashboard";


const Routes = () => {

    return (
        <Router className={styles.router}>
            <PrivateRoutes path="/" >
                <Favourites path='/favourites' />
            </PrivateRoutes>
            <Dashboard 
                path="/" 
            />
        </Router>
    )
}

export default Routes
