import React from "react";
import styles from "./Spinner.module.css"; 

const Spinner = () => {
  return <div className={styles.loader} role="status" aria-live="polite"></div>;
};

export default Spinner;