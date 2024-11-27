import styled from 'styled-components'

export const SectionServices = styled.section`
  padding: 4rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #cccccc;
  }
`
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
`

export const ServiceCard = styled.div`
  position: relative;
  background: #2a2a2a;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
    z-index: 5;
  }

  h3 {
    font-size: 1.5rem;
    margin: 1 rem 0;
    color: #fff;
  }

  p {
    font-size: 1 rem;
    color: #cccccc;
  }

  svg {
    color: #ff69b4;
    margin-bottom: 1 rem;
  }
`
