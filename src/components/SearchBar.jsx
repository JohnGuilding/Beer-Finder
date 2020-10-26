import React from 'react'
import styles from './../styles/App.module.scss';


const SearchBar = (props) => {

    const { updateSearchText } = props;

    return (
        <input type="text" placeholder="Search our beverages" onInput={e => updateSearchText(e.target.value)} />
    )
}

export default SearchBar
