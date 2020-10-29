import React from 'react';
import styles from "./../styles/App.module.scss";


const Header = (props) => {

const { user, signIn, signOut } = props;
console.log(user);

const showGreeting = user ? styles.signedIn : styles.signedOut;

const ShowUserName = user ? user.displayName : 'guest';

    return (
        <section className={styles.header}>
            <h1>Beer App</h1>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOut}>Sign Out</button>
            <div className={showGreeting}>{ShowUserName}</div>
        </section>
    )
}

export default Header
