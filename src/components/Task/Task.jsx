import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import AddTask from "../AddTask/AddTask";

const Task = () => {
  const [todoArr, setTodo] = useState([]);
  const getData = (text)=>{
    setTodo([...todoArr, text]);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"><AddTask getData={getData}/></div>
      {todoArr.map((e)=>(
        <li>{e}</li>
      ))}
      <Counter/>
      <button data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
