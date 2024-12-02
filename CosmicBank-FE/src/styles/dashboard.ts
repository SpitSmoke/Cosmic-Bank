import { motion } from "framer-motion"
import styled from "styled-components"


export const DashBoardContainer = styled(motion.div)`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(135deg, #0d0d27, #1f1f46);
color: #fff;
font-family: 'Arial', sans-serif;
`

export const Header = styled(motion.header)`
width: 100%;
display: flex;
justify-content: space-between;
padding: 20px;
background: rgba(0, 0, 0, 0.5);
border-bottom: 1px solid #333;

h1 {
    font-size: 1.5rem;
}

button {
background: #f44336;
color: #fff;
border: none;
padding: 10px 15px;

&:hover {
	background: #d32f2f;
    scale: 1.1; 
}
`

export const BalanceContainer = styled(motion.div)`
margin: 50px 0;
text-align: center;

h2 {
    font-size: 2.5rem;
    color: #ffd700;
}
`

export const ActionsContainer = styled(motion.div)`
display: flex;
gap: 20px;

button {
    padding: 15px 30px;
    background: #673ab7;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
    background: #5e35b1;
    transform: scale(1.1); 
    }
}
`

export const Footer = styled.footer`
margin-top: auto;
padding: 20px;
background: rgba(0, 0, 0, 0.5);
width: 100%;
text-align: center;
color: #aaa;

a {
    color: #ffd700;
    text-decoration: none;

&:hover {
    text-decoration: underline;
    }
}
`

export const UserInfo = styled.div`
display: flex;
align-items: center;
gap: 15px;

img  {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #e8e8e8;
}

span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffd700;
}
`