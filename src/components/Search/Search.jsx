import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {

  const { updateSearchText } = props;
  console.log(updateSearchText);


  return (
      <section className={styles.search}>
          <input type="text" placeholder="Search our beverages..." onInput={e => updateSearchText(e.target.value)} />
      </section>
  );
}

export default Search;
