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
    <div className="profile">
      <h2 className="profile-title">Profile Page</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="profile-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="profile-input"
        />
        <button type="submit" className="profile-button">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
