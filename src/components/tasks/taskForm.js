import React, { useState } from 'react';
import { addTask, updateTask } from '../../utils/storage';

const TaskForm = ({ task, onSubmit }) => {
  const [name, setName] = useState(task ? task.name : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [priority, setPriority] = useState(task ? task.priority : 'Low');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, description, priority, dueDate, status: 'Incomplete' };
    if (task) {
      updateTask(task.id, newTask);
    } else {
      addTask(newTask);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
