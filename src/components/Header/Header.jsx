import React from "react";
import styles from "./Header.module.scss";
import { Link } from '@reach/router';

const Header = (props) => {

const { user, signIn, signOut } = props;

// const showGreeting = user ? styles.signedIn : styles.signedOut;

const ShowUserName = user ? user.displayName : 'guest';

// SHOWS LOGIN OR LOGOUT OPTION //
const loginOption = !user ? <li ionClick={signIn} className={styles.login}>Sign In</li> : <li onClick={signOut} className={styles.login}>Sign Out</li>

    return (
        <ul className={styles.header}>
            <li>
                <h1>Beer App</h1>
            </li>
            <li>Welcome {ShowUserName}</li>
            {/* <Link className={styles.links} to="/">
                <li>home</li>
            </Link> */}
            {/* <Link to="/suprise">
                <div>suprise</div>
            </Link> */}
            {loginOption}
        </ul>
    )
}

export default Header;