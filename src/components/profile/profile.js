import React, { useState, useEffect } from 'react';
import { getUser, updateUser } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUsername(user.username);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    updateUser({ username, password });
    setSuccess('Profile updated successfully');
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticatedUser');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Profile Page</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          disabled
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="block w-full p-2 bg-blue-500 text-white rounded">
          Update Profile
        </button>
      </form>
      <button
        onClick={handleLogout}
        className="mt-4 block w-full p-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
