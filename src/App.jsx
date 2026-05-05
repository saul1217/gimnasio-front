import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import ProtectedRoute from './components/ProtectRoute'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Login</Link> | {" "}
        <Link to="/dashboard">Dashboard</Link> | {" "}
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}