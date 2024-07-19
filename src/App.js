// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import CompletedTasks from './pages/CompletedTasks';
import Navbar from './components/layout/navBar';
import Footer from './components/layout/footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/completed-tasks" element={<CompletedTasks />} /> 
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
