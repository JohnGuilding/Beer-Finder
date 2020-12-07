import React from "react";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = (props) => {

  const { modal, setModal } = props;

  const {
    name, 
    tagline,
    description,
    image_url,
    abv
  } = props.modalInfo;
  
  // IF MODAL CLICKED SHOW MODAL //
  const modalShow = modal ? styles.showModal : styles.hideModal;

  const closeModal = () => {
    setModal(!modal);
  }

  return (
    <section className={`${styles.modal} ${modalShow}`}>
      <FontAwesomeIcon icon={'fa', 'times'} onClick={closeModal} className={styles.closeModal} />
      <p>0</p>

      <article className={styles.card}>

        <div className={styles.container}>
          <div className={styles.beerImg}>
            <div className={styles.circle}></div>
            <img src={image_url} alt="A picture of beer"/>
          </div>
          <div className={styles.infoColumn1}>
            <h2 className={styles.title}>{name}</h2>
            <h3>{tagline}</h3>
            <p>{abv}</p>
          </div>
          <div className={styles.infoColumn2}>
            <p>{description}</p>
          </div>
        </div>

      </article>

    </section>
  );
};

export default Modal;
