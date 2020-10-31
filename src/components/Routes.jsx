import React from 'react';
import { Router } from "@reach/router";
import styles from "./../styles/App.module.scss"
import PrivateRoutes from "./PrivateRoutes";
import Suprise from "./Suprise";
import Dashboard from "./Dashboard/Dashboard";


const Routes = (props) => {

    const { user, beers } = props;

    return (
        <Router className={styles.router}>
            <PrivateRoutes path="/" user={user}>
                <Suprise path='/suprise' />
            </PrivateRoutes>
            <Dashboard 
            path="/" 
            beers={beers}
            />
        </Router>
    )
}

export default Routes
