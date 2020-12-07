import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link } from '@reach/router';
import { UserContext } from "./../../context/userContext";

const Header = () => {
    const userContext = useContext(UserContext);
    const { user, signIn, signOut } = userContext;

    const ShowUserName = user ? user.displayName : 'guest';

    // SHOWS LOGIN OR LOGOUT OPTION //
    const loginOption = !user ? <li onClick={signIn} className={styles.login}>Sign In</li> : <li onClick={signOut} className={styles.login}>Sign Out</li>

    return (
        <ul className={styles.header}>
            <li>
                <Link className={styles.title} to="/">
                    <h1 >Beer App</h1>
                </Link>
            </li>
            <li>Welcome {ShowUserName}</li>
            {loginOption}
        </ul>
    )
}

export default Header;