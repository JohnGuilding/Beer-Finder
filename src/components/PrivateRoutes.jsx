import React, { useEffect } from 'react';
import firebase from './../firebase';
import { navigate } from '@reach/router';

const PrivateRoutes = (props) => {

    const { children } = props;

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(!user) {
                alert('You are not logged in. Sign in with the google icon to access additional features');
                navigate('/');
            }
        });
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoutes;
