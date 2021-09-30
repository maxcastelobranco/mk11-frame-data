import React from 'react'
import Particles from 'react-particles-js'
import styles from './styles.module.scss'

interface CustomParticlesProps {
  color?: string
}

const CustomParticles: React.FC<CustomParticlesProps> = ({
  color = '#fda90f',
}) => {
  return (
    <Particles
      canvasClassName={styles.container}
      params={{
        background: {
          color: 'transparent',
        },
        particles: {
          color: {
            value: color,
          },
          collisions: {
            enable: false,
          },
          number: {
            value: 50,
          },
          lineLinked: {
            enable: false,
          },
          move: {
            speed: 0.5,
            out_mode: 'out',
            direction: 'right',
          },
          opacity: {
            value: 1,
            anim: {
              enable: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0.5,
              sync: false,
            },
          },
        },
      }}
    />
  )
}

export default CustomParticles
