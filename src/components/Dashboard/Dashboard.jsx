import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Card from "./../Card";
import Modal from "./../Modal";

const Dashboard = (props) => {

    const { beers } = props;

    const [modal, setModal] = useState(false)

    const {modalInfo, setModalInfo} = useState("")



    // IF MODAL CLICKED SHOW MODAL //
    const modalShow = modal ? styles.showModal : styles.hideModal;

    return (
        <>
            <section className={styles.dashboard}>
                {beers ? beers.map(beer => 
                <Card 
                    key={beer.id} 
                    beer={beer} 
                    modal={modal}
                    setModal={setModal}
                    setModalInfo={setModalInfo}
                />
                ) : <h2>Beers Inbound</h2>}
            </section>
            <div className={modalShow}>
                <Modal 
                    modalInfo={modalInfo}
                />
            </div>
        </>
    )
}

export default Dashboard;
