import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import CompletedTasks from './pages/CompletedTasks';
import Navbar from './components/layout/navBar';
import Footer from './components/layout/footer';
import ProtectedRoute from './components/layout/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completed-tasks"
          element={
            <ProtectedRoute>
              <Navbar />
              <CompletedTasks />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
