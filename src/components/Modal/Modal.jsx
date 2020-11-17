import React from "react";
import styles from "./Modal.module.scss";

const Modal = (props) => {

  const { modal } = props;
  
    // IF MODAL CLICKED SHOW MODAL //
    const modalShow = modal ? styles.showModal : styles.hideModal;

  return (
    <section className={`${styles.modal} ${modalShow}`}>
      <p>Modal works</p>
    </section>
  );
};

export default Modal;
