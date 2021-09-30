import React, { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion'
import { wrap } from '../../../utils/helpers/wrap'
import KomboAttacks from './components/slides/KomboAttacks'
import BasicAttacks from './components/slides/BasicAttacks'
import SpecialMoves from './components/slides/SpecialMoves'
import { useNavigateAttackTypes } from '../../../hooks/useNavigateAttackTypes'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import FirstVariation from './components/slides/FirstVariation'
import { useFilteredFrameDataContext } from '../../../context/filteredFrameDataContext'
import SecondVariation from './components/slides/SecondVariation'
import ThirdVariation from './components/slides/ThirdVariation'

const transition: Transition = {
  x: { type: 'spring', stiffness: 400, damping: 30 },
  opacity: { duration: 0.2 },
}
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const CharacterFrameData: React.FC = () => {
  const {
    currentCharacterFrameData: { variations },
  } = useFilteredFrameDataContext()

  const variationNames = Object.keys(variations)
  const v1 = variationNames[0]
  const v2 = variationNames[1]
  const v3 = variationNames[2]

  const attackTypes = [
    'Basic Attacks',
    'Kombo Attacks',
    'Special moves',
    v1,
    v2,
    v3,
  ]

  const attackTypesMap: Record<string, JSX.Element> = {
    'Basic Attacks': <BasicAttacks />,
    'Kombo Attacks': <KomboAttacks />,
    'Special moves': <SpecialMoves />,
    [v1]: <FirstVariation />,
    [v2]: <SecondVariation />,
    [v3]: <ThirdVariation />,
  }
  const [[page, direction], setPage] = useState([0, 0])

  const attackTypeIndex = wrap(0, attackTypes.length, page)
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }
  const navigateToAttackType = (index: number) => {
    setPage(([prevIndex]) => {
      if (prevIndex > index) {
        return [index, -1]
      } else {
        return [index, 1]
      }
    })
  }

  useNavigateAttackTypes({ paginate })

  const maxWidth768 = useMediaQuery('(max-width:768px)')
  const maxWidth1024 = useMediaQuery('(max-width:1024px)')

  const directionMultiplier = maxWidth768 ? 10 : maxWidth1024 ? 100 : 500

  const variants: Variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? directionMultiplier : -1 * directionMultiplier,
        opacity: 0,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      }
    },
  }

  return (
    <div className={styles.container}>
      <header>
        <Image
          src="/mkx/lin-kuei.png"
          alt="decoration"
          width={32}
          height={32}
        />
        {attackTypes.map((attackType, index) => {
          const isActive = index === attackTypeIndex

          return (
            <button
              key={attackType}
              className={isActive ? styles.activeButton : styles.button}
              onClick={() => navigateToAttackType(index)}
            >
              {attackType}
            </button>
          )
        })}
        <Image
          src="/mkx/lin-kuei.png"
          alt="decoration"
          width={32}
          height={32}
        />
      </header>
      <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
        <motion.div
          className={styles.frameDataSlideWrapper}
          key={page}
          custom={direction}
          variants={variants}
          transition={transition}
          initial="initial"
          animate="animate"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          {attackTypesMap[attackTypes[attackTypeIndex]]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default CharacterFrameData
