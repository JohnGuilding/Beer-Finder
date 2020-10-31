import React from 'react';
import styles from "./../styles/App.module.scss";
import Styles from "./../styles/Card.module.scss"; 
import Card from "./Card/Card";



const Suprise = () => {

    return (
        <div>
            <button className={styles.btn}>Random Beer</button>
            This is a suprise
            <section className={styles.dashboard}>
            </section>
        </div>
    )
}

export default Suprise;
