import React, { useState, useEffect } from 'react';
import { getUser, updateUser } from '../utils/storage';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUsername(user.username);
      setPassword(user.password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ username, password });
    alert('Profile updated successfully');
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
