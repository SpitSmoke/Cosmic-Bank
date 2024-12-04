import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/EstiloGlobal'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Footer from './components/footer'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route
            path="/home"
            element={<Home />} />
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
      <Footer />
    </Router>
  )
}

export default App
