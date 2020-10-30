import React from 'react'
import styles from "./../styles/App.module.scss";
import SearchBar from "./SearchBar";


const Aside = (props) => {

    const { updateSearchText } = props
    console.log(updateSearchText);

    return (
        <section className={styles.aside}>
            <SearchBar updateSearchText={updateSearchText}/>
        </section>
    )
}

export default Aside
