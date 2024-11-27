import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const registerUser = async (data: {
  name: string
  email: string
  password: string
}) => {
  return api.post('/register', data)
}

export default api
