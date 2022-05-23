import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";

const Counter = () => {
  
  // let count = 0;
  const [counter, setCounter] = useState(0);
  const handleChange= (value) =>{
    setCounter(counter+value)
  }
  
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className="button" onClick={() => handleChange(1)}>+</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={() => handleChange(-1)}>-</button>
    </div>
  );
};

export default Counter;
