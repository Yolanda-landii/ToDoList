import React, { useEffect, useState } from 'react';
import { fetchCompletedTasks } from '../utils/storage';

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setCompletedTasks(fetchCompletedTasks());
  }, []);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Completed on: {task.completedDate}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
