import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { ActionsContainer, BalanceContainer, DashBoardContainer, Footer, Header } from '../styles/dashboard'


const Dashboard = () => {
const [balance, setBalance] = useState<number | null>(null)
const navigate = useNavigate()

useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
    navigate('/login')
    return
    }

    // Buscar saldo do usuário
    axios
    .get('http://localhost:5000/balance',{ 
		headers: { Authorization: `Bearer ${token}` } 
	})
    .then((response) => setBalance(response.data.balance))
    .catch((err) => console.error('Erro ao buscar saldo:', err))
}, [navigate])

const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
}

return (
	<DashBoardContainer
	initial={{ opacity: 0 }} 
	animate={{ opacity: 1 }} 
	transition={{ duration: 1 }} 
	>
		<Header
		initial={{ y: -50 }}
		animate={{ y: 0 }}
		transition={{ duration: 0.5 }}
		>
	<h1>Bem-vindo ao Dashboard</h1>
    <button onClick={handleLogout}>Sair</button>
		</Header>
		<BalanceContainer
		initial={{ scale: 0 }}
		animate={{ scale: 1 }}
		transition={{ duration: 0.5, delay: 0.5 }}
		>
    <h2>Seu saldo: {balance !== null ? `R$ ${balance.toFixed(2)}` : 'Carregando...'}</h2>
		</BalanceContainer>

		<ActionsContainer
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.8, delay: 0.8 }}
		>
			<button>Transferências</button>
			<button>Histórico</button>
			<button>Configurações</button>
		</ActionsContainer>

		<Footer>
		<p>© {new Date().getFullYear()} CosmicBank. Todos os direitos reservados.</p>
        <a href="/">Voltar para o site principal</a>
		</Footer>
	</DashBoardContainer>
	
)
}

export default Dashboard
