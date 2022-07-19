import React from "react";
import Task from "./Task";

function TaskList() {
  
  return (
    <div className="tasks">
      <Task text={Task.text} category={Task.category} delete={Task.onDeleteTask} />
      
    </div>
  );
}

export default TaskList;
