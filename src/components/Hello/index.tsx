import React from "react";
import styles from "./styles.scss";

interface HelloProps {
    name: string;
}

const Hello = ({name}: HelloProps) => (
  <div className={styles.hello}>Hello, {name}!</div>
);

export default Hello;
