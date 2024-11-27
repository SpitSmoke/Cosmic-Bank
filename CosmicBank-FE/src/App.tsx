import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/EstiloGlobal'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Footer from './components/footer'
import Register from './pages/register'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="services">
                  <Services />
                </section>
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <>
        <Footer />
      </>
    </Router>
  )
}

export default App
