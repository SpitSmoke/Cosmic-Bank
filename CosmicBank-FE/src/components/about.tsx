import {
  AboutCard,
  AboutContainer,
  AboutPoints,
  AboutTitle,
} from '../styles/about'
import { SpanBank, SpanCosmic } from '../styles/HeaderStyles'

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>
        O <SpanCosmic>Cosmic</SpanCosmic>
        <SpanBank>Bank</SpanBank> é a próxima geração de serviços financeiros,
        levando inovação e segurança ao seu alcance. Junte-se à revolução
        cósmica, onde suas finanças podem atingir novos horizontes.
      </AboutTitle>
      <AboutPoints>
        <AboutCard>
          <strong>Segurança em Primeiro Lugar</strong>
          <p>
            Proteja seu futuro financeiro com as mais avançadas tecnologias de
            criptografia.
          </p>
        </AboutCard>
        <AboutCard>
          <strong>Inovação Contínua</strong>
          <p>
            Estar à frente é nossa missão. O futuro das finanças já está aqui.
          </p>
        </AboutCard>
        <AboutCard>
          <strong>Acesso Fácil</strong>
          <p>
            Uma plataforma fácil de usar para gerenciar suas finanças de
            qualquer lugar, a qualquer hora.
          </p>
        </AboutCard>
      </AboutPoints>
    </AboutContainer>
  )
}

export default About
