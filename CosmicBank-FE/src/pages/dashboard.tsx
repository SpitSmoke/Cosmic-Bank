import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { 
ActionsContainer, 
BalanceContainer, 
DashBoardContainer, 
Footer, 
Header, 
UserInfo 
} from '../styles/dashboard'
import { SpanCosmic, SpanBank } from '../styles/HeaderStyles'

const Dashboard = () => {
const [userInfo, setUserInfo] = useState<{ name: string; avatar: string | null } | null>(null)
const defaultAvatar = '../Assets/alienProfile.jpg'
const [balance, setBalance] = useState<number | null>(null)
const navigate = useNavigate()

useEffect(() => {
    const token = localStorage.getItem('authToken')
	if (!token) {
    navigate('/login')
    return;
    }

    const fetchUserInfo = async () => {
    try {
        // Requisição para obter informações do usuário
        const userInfoResponse = await axios.get('http://localhost:5000/user-info', {
        headers: { Authorization: `Bearer ${token}` },
        });
        setUserInfo(userInfoResponse.data)
        console.log(userInfoResponse.data)

        // Requisição para obter o saldo do usuário
        const balanceResponse = await axios.get('http://localhost:5000/balance', {
		headers: { Authorization: `Bearer ${token}` },
        });
        setBalance(balanceResponse.data.balance)
	} catch (error) {
        console.error('Erro ao buscar dados do usuário:', error)
	}
    }

    fetchUserInfo()
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
<UserInfo>
		<img 
            src={userInfo?.avatar || defaultAvatar} 
            alt="Avatar do Usuário" 
		/>
		<span>{userInfo?.name || 'Usuário'}</span>
        </UserInfo>
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

	<main>
        <h1>Bem-vindos ao <SpanCosmic>Cosmic</SpanCosmic><SpanBank>Bank</SpanBank></h1>
        <p>Seu banco digital e intergalático</p>
	</main>

    <Footer>
        <p>© {new Date().getFullYear()} CosmicBank. Todos os direitos reservados.</p>
        <a href="/">Voltar para o site principal</a>
    </Footer>
</DashBoardContainer>
)
}

export default Dashboard;
