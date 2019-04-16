import React from "react";
import classes from "./styles.scss";

interface HelloProps {
    name: String;
}

const Hello = ({name}: HelloProps) => (
  <div className={classes.hello}>Hello, {name}!</div>
);

export default Hello;
