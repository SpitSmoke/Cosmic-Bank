import React from 'react'
import Particles from 'react-tsparticles'

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: '#000000', // Cor de fundo preta
          },
        },
        particles: {
          number: {
            value: 100, // Número de partículas
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ff69b4', // Cor das partículas (rosa)
          },
          shape: {
            type: 'circle', // Forma das partículas
          },
          opacity: {
            value: 0.5, // Opacidade das partículas
            random: true,
          },
          size: {
            value: 3, // Tamanho das partículas
            random: true,
          },
          move: {
            enable: true,
            speed: 2, // Velocidade de movimento das partículas
            direction: 'none',
            outMode: 'out',
          },
        },
      }}
    />
  )
}

export default ParticlesBackground
