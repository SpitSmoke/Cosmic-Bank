import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/EstiloGlobal'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <main>
        <Routes>
          <Route
            path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  )
}

export default App
