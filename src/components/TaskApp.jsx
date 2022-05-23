import React from "react";
import TaskHeader from './TaskHeader/TaskHeader';
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';

import styles from "./taskApp.module.css";

const TaskApp = () => {
  
  return (
    <div data-cy="task-app" className={styles.taskApp}>
     
      <TaskHeader/>
      <AddTask/>
      <Tasks/>
    </div>
  );
};

export default TaskApp;
