import React, { useContext, useState } from "react";
import styles from "./Dashboard.module.scss";
import Search from "./../Search";
import Card from "./../Card";
import Modal from "./../Modal";
import { ApiContext } from './../../context/apiContext';

const Dashboard = () => {
    const apiContext = useContext(ApiContext);
    const { beers } = apiContext;

    const [modal, setModal] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);

    const fetchRandomBeer = () => {
        fetch("https://api.punkapi.com/v2/beers/random")
            .then((response) => response.json())
            .then((data) => {
                setModalInfo(data[0]);
            });
    };

    return (
        <>
            <Search
                modal={modal}
                setModal={setModal}
                setModalInfo={setModalInfo}
                fetchRandomBeer={fetchRandomBeer}
            />
            <section className={styles.dashboard}>
                {beers ? (
                    beers.map((beer) => 
                    <Card 
                        key={beer.id} 
                        beer={beer} 
                    />)
                ) : (
                    <h2>Beers Inbound</h2>
                )}
            </section>
            <div>
                <Modal
                    modalInfo={modalInfo}
                    modal={modal}
                    setModal={setModal}
                    fetchRandomBeer={fetchRandomBeer}
                />
            </div>
        </>
    );
};

export default Dashboard;
