import React, { useContext } from "react";
import styles from "./Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApiContext } from './../../context/apiContext';

const Modal = () => {
  const apiContext = useContext(ApiContext);
  const { fetchRandomBeer, modal, setModal } = apiContext;

  const {
    name, 
    tagline,
    description,
    image_url,
    abv
  } = apiContext.modalInfo;
  
  // IF MODAL CLICKED SHOW MODAL //
  const modalShow = modal ? styles.showModal : styles.hideModal;

  const closeModal = () => {
    setModal(!modal);
  }
  
// todo
// <div className={styles.left}>
//   <img src={beer.image_url ? beer.image_url : brewdoglogo}/> 
// </div> 

  return (
    <section className={`${styles.modal} ${modalShow}`}>
      <FontAwesomeIcon icon={['fa', 'times']} onClick={closeModal} className={styles.closeModal} />
      <FontAwesomeIcon icon={['fa', 'undo']} onClick={fetchRandomBeer} className={styles.refreshBeer} />

      <article className={styles.card}>

        <div className={styles.container}>
          <div className={styles.beerImg}>
            <div className={styles.circle}></div>
            <img src={image_url} alt="beer"/>
          </div>
          <div className={styles.infoColumn1}>
            <h2 className={styles.title}>{name}</h2>
            <h3>{tagline}</h3>
            <p>{abv}% ABV</p>
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
