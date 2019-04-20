import React from "react";

import styles from "./styles.scss";

interface VoteProps {
  score: number;
  onUpvote: () => void;
  onDownvote: () => void;
}

const Vote = ({score, onUpvote, onDownvote}: VoteProps) => {
  return (
    <div className={styles.vote}>
      <button onClick={onUpvote}>+</button>
      <div>{score}</div>
      <button onClick={onDownvote}>-</button>
    </div>
  );
};

export default Vote;
