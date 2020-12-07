import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Search from "./../Search";
import Card from "./../Card";
import Modal from "./../Modal";

const Dashboard = (props) => {

    const { updateSearchText, beers } = props;

    const [modal, setModal] = useState(false);

    const [modalInfo, setModalInfo] = useState([]);

    return (
        <>
            <Search 
                modal={modal}
                setModal={setModal} 
                setModalInfo={setModalInfo}
                updateSearchText={updateSearchText}
            />
            <section className={styles.dashboard}>
                {beers ? beers.map(beer => 
                <Card 
                    key={beer.id} 
                    beer={beer} 
                />
                ) : <h2>Beers Inbound</h2>}
            </section>
            <div>
                <Modal 
                    modalInfo={modalInfo}
                    modal={modal}
                    setModal={setModal}
                />
            </div>
        </>
    )
}

export default Dashboard;
