import React from 'react'
import styles from "./../styles/App.module.scss";
import SearchBar from "./SearchBar";


const Aside = (props) => {

    const { updateSearchText, setRandomBeer } = props
    console.log(updateSearchText);

    return (
        <section className={styles.aside}>
            <SearchBar updateSearchText={updateSearchText}/>
            <button onClick={setRandomBeer} className={styles.btn}>Random Beer</button>
        </section>
    )
}

export default Aside
