import React from 'react';
import { Router } from "@reach/router";
import styles from "./../styles/App.module.scss"
import PrivateRoutes from "./PrivateRoutes";
import Suprise from "./Suprise";
import Dashboard from "./Dashboard";


const Routes = (props) => {

    const { user, pageLoadBeers, searchBeers, randomBeer, setRandonBeer } = props;

    return (
        <Router className={styles.router}>
            <PrivateRoutes path="/" user={user}>
                <Suprise path='/suprise' setRandonBeer={setRandonBeer} randomBeer={randomBeer}/>
            </PrivateRoutes>
            <Dashboard 
            path="/" 
            pageLoadBeers={pageLoadBeers}
            searchBeers={searchBeers} 
            />
        </Router>
    )
}

export default Routes
