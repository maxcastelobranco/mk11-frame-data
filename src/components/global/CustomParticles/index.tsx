import React from 'react'
import Particles from 'react-particles-js'
import styles from './styles.module.scss'

const CustomParticles: React.FC = () => {
  return (
    <Particles
      canvasClassName={styles.container}
      params={{
        background: {
          color: 'transparent',
        },
        particles: {
          color: {
            value: '#fda90f',
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
