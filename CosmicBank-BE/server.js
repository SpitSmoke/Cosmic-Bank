const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {Pool} = require('pg')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

const pool = new Pool({
  user: 'spit_smoke',
  host: 'localhost',
  database: 'cosmic_bank',
  password: 'mafefe4598',
  port: 5432,
})

// Middleware 
app.use(cors())
app.use(express.json())

// Dados
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
    // Verificando se o usuário existe no banco
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    const user = result.rows[0]
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' })

    // Comparando a senha informada com a senha armazenada (criptografada)
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: 'Senha inválida' })

    // Criando um token JWT
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

  const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  if (userExists.rows.length > 0 ) {
    return res.status(400).json({ message: 'Usuário já existe' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword]
    )

    const newUser = result.rows[0]

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

    res.status(201).json({ message: 'Usuário registrado com sucesso', token });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message)
    res.status(500).json({ message: 'Erro ao registrar usuário' })
  }
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
