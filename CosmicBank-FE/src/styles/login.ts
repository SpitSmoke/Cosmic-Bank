import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1b003a, #6a0572);
  margin: 0; /* Garantir que não haja margem */
  padding: 0; /* Garantir que não haja padding extra */
  box-sizing: border-box; /* Garantir que o padding e margin sejam calculados corretamente */
`

export const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  max-width: 400px;

  h2 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    margin-top: 20px;
    color: #e0e0e0;

    a {
      color: #ff69b4;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;

  &::placeholder {
    color: #d1d1d1;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 5px #ff69b4;
  }
`


export const LoginButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #ff69b4, #6a0572);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff85c0, #8a0e92);
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.5);
  }

  &:disabled {
    background: #8a8a8a;
    cursor: not-allowed;
  }
`
