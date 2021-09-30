import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CharacterData } from '../../../utils/data/types'
import styles from './styles.module.scss'
import { preventImageDrag } from '../../../utils/helpers/preventImageDrag'
import { motion, Variants } from 'framer-motion'

interface CharacterProps {
  character: CharacterData
  index: number
}

const Character: React.FC<CharacterProps> = ({
  character: { src, thumbSrc, name, key },
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
    <Link href={`/mkx/character/${key}`} passHref>
      <motion.button
        role="link"
        className={styles.container}
        variants={characterVariants}
        initial="initial"
        animate="animate"
        exit="initial"
        layout
      >
        <Image
          {...{ src }}
          objectFit="cover"
          alt={name}
          layout="fill"
          className={styles.imgSm}
          {...preventImageDrag}
        />
        <Image
          src={thumbSrc}
          objectFit="cover"
          alt={name}
          layout="fill"
          className={styles.imgLg}
          {...preventImageDrag}
        />
        <span className={styles.characterName}>{name}</span>
      </motion.button>
    </Link>
  )
}

export default Character
