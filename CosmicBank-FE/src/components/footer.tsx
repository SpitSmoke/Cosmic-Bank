/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import {
  CTAButton,
  CTASection,
  CTAText,
  FooterContainer,
  FooterLinks,
  SocialLinks,
} from '../styles/footer'
import { SpanBank, SpanCosmic } from '../styles/HeaderStyles'

const Footer = () => {
  return (
    <FooterContainer>
      <CTASection>
        <CTAText>
          Pronto para explorar o universo finânceiro ? <br /> Junte-se ao{' '}
          <SpanCosmic>Cosmic</SpanCosmic>
          <SpanBank>Bank</SpanBank> agora!
        </CTAText>
        <Link to="/register">
          <CTAButton href="#register">Criar Conta</CTAButton>
        </Link>

        <Link to="/login">
          <CTAButton href="#login">Login</CTAButton>
        </Link>
      </CTASection>

      <FooterLinks>
        <a href="#about">Sobre</a>
        <a href="#terms">Termos</a>
        <a href="privacy">Política de Privacidade</a>
      </FooterLinks>

      <SocialLinks>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <FaFacebook />
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <FaTwitter />
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <FaInstagram />
      </SocialLinks>
    </FooterContainer>
  )
}
export default Footer
