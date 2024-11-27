import styled from 'styled-components'

export const AboutContainer = styled.section`
  padding: 40px 20px;
  color: #fff;
  text-align: center;
  min-height: 400px;
`
export const AboutTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff69b4;
`
export const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margiff69b4n-bottom: 30px;
`
export const AboutPoints = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const AboutCard = styled.div`
  background: rgba(255, 105, 180, 0.2);
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  min-height: 180px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY (-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  strong {
    color: #ff69b4;
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #e0e0e0;
  }
`
