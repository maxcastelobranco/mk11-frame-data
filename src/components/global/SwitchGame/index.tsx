import React, { useEffect, useRef, useState } from 'react'
import { motion, Transition, useCycle, Variants } from 'framer-motion'
import { useDimensions } from '../../../hooks/useDimensions'
import Navigation from './components/Navigation'
import MenuToggle from './components/MenuToggle'
import styles from './styles.module.scss'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

const openTransition: Transition = {
  type: 'spring',
  stiffness: 20,
  restDelta: 2,
}
const closeTransition: Transition = {
  delay: 0.5,
  type: 'spring',
  stiffness: 400,
  damping: 40,
}

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 200px 40px)`,
    transition: openTransition,
  }),
  closed: {
    clipPath: 'circle(30px at 200px 40px)',
    transition: closeTransition,
  },
}

const opacityVariants: Variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
}

const SwitchGame: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [zIndex, setZIndex] = useState(0)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null
    if (isOpen) {
      setZIndex(100)
    } else {
      timeoutId = setTimeout(() => {
        setZIndex(0)
      }, 1000)
    }

    return () => {
      if (timeoutId) {
        return clearTimeout(timeoutId)
      }
    }
  }, [isOpen])

  useOnClickOutside(containerRef, () => {
    if (isOpen) {
      toggleOpen()
    }
  })

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={styles.container}
      style={{
        zIndex,
      }}
    >
      <motion.div className={styles.background} variants={sidebarVariants}>
        <motion.h4
          variants={opacityVariants}
          animate={isOpen ? 'open' : 'closed'}
        >
          Switch Game
        </motion.h4>
        <motion.div
          variants={opacityVariants}
          animate={isOpen ? 'open' : 'closed'}
        />
      </motion.div>
      <Navigation {...{ isOpen }} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default SwitchGame
