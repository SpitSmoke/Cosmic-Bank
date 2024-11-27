import styled from 'styled-components'

export const SectionHero = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin-top: 90px;
`
export const HeroTitle = styled.div`
  display: flex;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Orbitron', sans-serif;
    margin-botttom: 20px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    color: #fff;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;
    max-width: 600px;
    color: #fff;
    padding: 70px;
  }
`
export const HeroButton = styled.a`
  background-color: #4b84e8;
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #6a4c9c, #4120a1, #4d3bbd);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;

  &:hover {
    background: linear-gradient(45deg, #4d3bbd, #4120a1, #6a4c9c);
    background-size: 400% 400%;
    animation: gradientReverse 1s forwards;
    transform: scale(1.05);
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes gradientReverse {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
export const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  font-family: 'Orbitron', sans-serif;
`
