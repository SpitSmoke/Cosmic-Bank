import { motion } from 'framer-motion'
import {
  HeroButton,
  HeroButtons,
  HeroTitle,
  SectionHero,
} from '../styles/HeroStyles'
import { SpanBank, SpanCosmic } from '../styles/HeaderStyles'

const Hero = () => {
  return (
    <SectionHero>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <SpanCosmic>Cosmic</SpanCosmic>
            <SpanBank>Bank</SpanBank> o Futuro das finânças!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Junte-se à revolução cósmica. Sua conta está a apenas um clique de
            distância!
          </motion.p>
        </HeroTitle>
      </motion.div>

      <HeroButtons>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <HeroButton href="#services">Abra sua conta</HeroButton>
        </motion.div>
      </HeroButtons>
    </SectionHero>
  )
}

export default Hero
