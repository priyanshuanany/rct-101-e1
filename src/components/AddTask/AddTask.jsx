import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({getData}) => {
  const [text, setText] = useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Write the Task" onChange={(e)=>{
        setText(e.target.value);
      }}/>
      <button data-cy="add-task-button" className={styles.button} onClick={()=>{
        getData(text);
      }}>+</button>
    </div>
  );
};

export default AddTask;
