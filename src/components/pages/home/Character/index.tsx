import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { preventImageDrag } from '../../../../utils/helpers/preventImageDrag'
import { CharacterData } from '../../../../utils/data/characters'
import { motion, Variants } from 'framer-motion'

interface CharacterProps {
  character: CharacterData
  index: number
}

const Character: React.FC<CharacterProps> = ({
  character: { src, thumbSrc, name },
  index,
}) => {
  const characterVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.06,
      },
    },
  }

  return (
    <motion.button
      className={styles.container}
      variants={characterVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      layout
    >
      <Image
        {...{ src }}
        objectFit="contain"
        alt={name}
        // quality={100}
        layout="fill"
        className={styles.imgSm}
        {...preventImageDrag}
      />
      <Image
        src={thumbSrc}
        objectFit="cover"
        alt={name}
        // quality={100}
        layout="fill"
        className={styles.imgLg}
        {...preventImageDrag}
      />
      <span className={styles.characterName}>{name}</span>
    </motion.button>
  )
}

export default Character
