import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #0a0a23;
  color: #fff;
  padding: 20px;
  text-align: center;
`
export const CTASection = styled.div`
  margin-bottom: 20px;
`

export const CTAText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`
export const CTAButton = styled.a`
  display: inline-block;
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  background: linear-gradient(90deg, #ff69b4, #6a0572, #1b003a);
  color: #fff;
  border-radius: 4px;
  transition: transform 0.2s, filter 0.2s;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`
export const FooterLinks = styled.div`
  margin-bottom: 20px;

  a {
    color: #e0e0e0;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const SocialLinks = styled.div`
  a {
    color: #e0e0e0;
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      color: #ff69b4;
    }
  }
`
