import React from "react";
import styles from "./Search.module.scss";
import { Link } from '@reach/router';

const Search = (props) => {

  const { updateSearchText } = props;

  return (
      <section className={styles.search}>
          <input type="text" placeholder="Search our beverages..." onInput={e => updateSearchText(e.target.value)} />
          <Link className={styles.supriseBtn} to="/suprise">
            <h3>suprise</h3>
          </Link>
      </section>
  );
}

export default Search;
