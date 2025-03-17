import React from "react";
import styles from "./Error.module.css";

const Error = ({ message }) => {
  return (
    <div className={styles.centeredContainer}>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
};

export default Error;