import React from 'react';
import TaskForm from '../components/tasks/taskForm';
import TaskList from '../components/tasks/taskList';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
