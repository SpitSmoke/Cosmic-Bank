import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;

    p {
    margin-top: 20px;
    color: #e0e0e0:
}
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`

export const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  color: white;
  background-color: #6a0572;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff69b4;
  }
`

export const Error = styled.p`
  color: red;
  font-size: 14px;
`
