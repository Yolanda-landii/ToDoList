import React, { useState, useEffect } from 'react';
import TaskForm from '../components/tasks/taskForm';
import TaskList from '../components/tasks/taskList';
import { fetchTasks, addTask, updateTask, deleteTask, markTaskComplete } from '../utils/storage';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(fetchTasks());
  }, []);

  const handleTaskSubmit = (newTask) => {
    if (newTask.id) {
      setTasks(fetchTasks());
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setTasks(fetchTasks());
  };

  const handleMarkTaskComplete = (id) => {
    markTaskComplete(id);
    setTasks(fetchTasks());
  };

  return (
    <div className="home">
      <h1 className="home-title">Home Page</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList
        tasks={tasks}
        onUpdateTask={handleTaskSubmit}
        onDeleteTask={handleDeleteTask}
        onMarkTaskComplete={handleMarkTaskComplete}
      />
    </div>
  );
};

export default Home;
