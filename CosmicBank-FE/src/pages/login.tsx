/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import axios from 'axios'
import {
  ContainerDiv,
  ContainerRememberMe,
  FormContainer,
  InputField,
  InputRememberMe,
  LoginButton,
  LoginWrapper,
  ShowPasswordButton,
} from '../styles/login'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Enviando os dados para o servidor de login
      const response = await axios.post('http://localhost:5000/login', formData)

      // Salvando o token no armazenamento correto
      if (rememberMe) {
        localStorage.setItem('authToken', response.data.token)
      } else {
        sessionStorage.setItem('authToken', response.data.token)
      }

      // Redirecionando para a página inicial ou protegida
      navigate('/dashboard') // Substitua '/dashboard' pela página de destino após o login
    } catch (err: any) {
      setError('Erro ao fazer login. Verifique suas credenciais!')
      console.error('Erro no login:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoginWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>

        <ContainerDiv>
          <InputField
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div style={{ position: 'relative', width: '100%' }}>
            <InputField
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <ShowPasswordButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </ShowPasswordButton>
          </div>
        </ContainerDiv>

        <ContainerRememberMe style={{marginBottom: '50px'}}>
          <InputRememberMe
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Permanecer Logado</label>
        </ContainerRememberMe>

        <LoginButton type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </LoginButton>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </FormContainer>
    </LoginWrapper>
  )
}

export default Login
