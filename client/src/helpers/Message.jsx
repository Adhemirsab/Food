import React from "react";
import styles from "./Loader.module.css";
const Message = ({ msg }) => {
  return (
    <div className={styles.message}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
