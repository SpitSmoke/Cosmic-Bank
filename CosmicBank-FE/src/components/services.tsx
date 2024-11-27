import { FaUserAstronaut, FaRocket, FaPiggyBank } from 'react-icons/fa'
import { SectionServices, ServiceCard, ServicesGrid } from '../styles/services'
import { SpanCosmic, SpanBank } from '../styles/HeaderStyles'

const Services = () => {
  return (
    <SectionServices>
      <h2>Nossos Serviços</h2>
      <p>
        Explore os serviços intergalácticos que o{' '}
        <SpanCosmic>Cosmic</SpanCosmic>
        <SpanBank>Bank</SpanBank> oferece para você!
      </p>
      <ServicesGrid>
        <ServiceCard>
          <FaUserAstronaut size={50} />
          <h3>Contas Cósmicas</h3>
          <p>Abra sua conta com taxas interestelares e vantagens incríveis!</p>
        </ServiceCard>
        <ServiceCard>
          <FaRocket size={50} />
          <h3>Transferências Interestelares</h3>
          <p>Envie dinheiro para qualquer lugar da galáxia em segundos.</p>
        </ServiceCard>
        <ServiceCard>
          <FaPiggyBank size={50} />
          <h3>Poupança Cósmica</h3>
          <p>Economize e veja seus cosmos renderem como nunca.</p>
        </ServiceCard>
      </ServicesGrid>
    </SectionServices>
  )
}

export default Services
