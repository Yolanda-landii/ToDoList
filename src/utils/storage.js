export const isAuthenticated = () => {
  return !!localStorage.getItem('authenticatedUser');
};

export const loginUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    localStorage.setItem('authenticatedUser', JSON.stringify(user));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('authenticatedUser');
};

export const registerUser = (username, password, profilePicture) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, password, profilePicture });
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('authenticatedUser'));
};

export const updateUser = (updatedUser) => {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users = users.map(user => user.username === updatedUser.username ? updatedUser : user);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('authenticatedUser', JSON.stringify(updatedUser)); // Update the authenticated user data as well
};

export const fetchTasks = () => {
  const tasks = localStorage.getItem('tasks');
  
  if (!tasks) {
    return []; 
  }
  
  try {
    return JSON.parse(tasks);
  } catch (error) {
    console.error('Failed to parse tasks:', error);
    return []; 
  }
};

export const addTask = (task) => {
  const tasks = fetchTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const updateTask = (id, updatedTask) => {
  const tasks = fetchTasks();
  const index = tasks.findIndex(task => task.id === id);
  tasks[index] = { ...tasks[index], ...updatedTask };
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  const tasks = fetchTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export const markTaskComplete = (id) => {
  let tasks = fetchTasks();
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.status = 'Complete';
    task.completedDate = new Date().toLocaleDateString();
    localStorage.setItem('tasks', JSON.stringify(tasks.filter(t => t.id !== id)));
    let completedTasks = fetchCompletedTasks();
    completedTasks.push(task);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }
};

export const fetchCompletedTasks = () => {
  return JSON.parse(localStorage.getItem('completedTasks')) || [];
};
