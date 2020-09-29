import React from "react";
import styles from "./button.module.scss";

const Button = ({
  onClick,
  text,
  type,
}) => (
  <button
    className={styles.button + " " + styles.buttonOutlined}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);

export default Button;
