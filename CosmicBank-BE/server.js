const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('./Databases/mysql')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Middleware 
app.use(cors())
app.use(express.json())

// Dados simulados
const users = [
  {
    email: 'test@example.com',
    password: '$2a$10$A0IXT2fVxyVdWqU77mbf5OxTz6K/A7V3cm1fqFvSQt2yDVsEmWiVe' 
  }
]

// Rota de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
    const user = rows[0]
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: 'Senha inválida' })

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

    res.json({ message: 'Login bem-sucedido', token })
  } catch (error) {
    console.error('Erro ao realizar login:', error.message)
    res.status(500).json({ error: 'Erro ao realizar login' })
  }
})

// Rota de registro
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  try {
    const [userExists] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (userExists.length > 0) {
      return res.status(400).json({ message: 'Usuário já existe' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    )

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })

    res.status(201).json({ message: 'Usuário registrado com sucesso', token })
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message)
    res.status(500).json({ message: 'Erro ao registrar usuário' })
  }
})

// Rota para ver o saldo
app.get('/balance', (req, res) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const email = decoded.email

    const balance = 1000.50 // puxar do banco futuramente
    res.json({ balance })
  } catch (error) {
    console.error('Erro ao verificar token:', error.message)
    res.status(401).json({ message: 'Token inválido' })
  }
})

// rota para informacoes de usuarios
app.get('/user-info', async (req, res) => {
  const token = req.headers.authorization?.split('')[1]
  if (!token) return res.status(401).json({ message: 'Token não fornecido' })

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const result = await pool.query('SELECT name, email FROM users WHERE email = $1', [decoded.email])
      const user = result.rows[0]

      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' })

        res.json({
          name: user.name,
          avatar: user.avatar ||
          null
        })
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error.message)
      res.status(500).json({
        message: 'Erro ao obter informações do usuário'
      })
    }
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
