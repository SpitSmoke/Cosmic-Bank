import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import api from '../api/axios' 

import { FormContainer, Input, Button, Error } from '../styles/register'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validação de senhas
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.')
      return
    }

    setError('')
    setLoading(true)

    try {
      const response = await api.post('/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      console.log('Usuário registrado com sucesso', response.data)

      navigate('/login')
    } catch (err: any) {
      setError('Erro ao registrar. Tente novamente.')
      console.error(
        'Erro ao registrar:',
        err.response?.data?.message || err.message
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Cadastre-se</h2>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <Error>{error}</Error>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </Button>
      <p>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </FormContainer>
  )
}

export default Register
