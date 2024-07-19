import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../../utils/authentication';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      {isAuthenticated() && (
        <>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/completed-tasks">Completed Tasks</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
