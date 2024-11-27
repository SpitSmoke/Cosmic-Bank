/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import axios from 'axios'
import {
  FormContainer,
  InputField,
  LoginButton,
  LoginWrapper,
} from '../styles/login'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
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

      // Salvando o token no Local Storage para uso em futuras requisições
      localStorage.setItem('authToken', response.data.token)

      // Redirecionando para a página inicial ou página protegida
      navigate('/dashboard') // Aqui, substitua `/dashboard` pela página que você deseja redirecionar após o login
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
        <InputField
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
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
