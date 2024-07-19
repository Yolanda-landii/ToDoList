import React from 'react';
import { deleteTask, markTaskComplete } from '../../utils/storage';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => markTaskComplete(task.id)}>Complete</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
