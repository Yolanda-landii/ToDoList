import React, { useEffect, useState } from 'react';
import TaskItem from './taskItem';
import { fetchTasks } from '../../utils/storage';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(fetchTasks());
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
