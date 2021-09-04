import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import {
  NotationOptions,
  useNotationContext,
} from '../../../context/notationContext'
import ExpandMore from '../../svg/ExpandMore'
import useOnClickOutside from '../../../hooks/useOnClickOutside'

const OPTIONS = [
  NotationOptions.default,
  NotationOptions.xbox,
  NotationOptions.playstation,
]

const PlatformSelect: React.FC = () => {
  const { currentNotation, setCurrentNotation } = useNotationContext()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useOnClickOutside(containerRef, handleClickOutside)

  return (
    <div className={styles.container} ref={containerRef}>
      <h3>Notation</h3>
      <div onClick={toggleOpen}>
        <p>{currentNotation}</p>
        <ul>
          {OPTIONS.map((option, index) => {
            return (
              <li
                key={option}
                onClick={() => setCurrentNotation(option)}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transformOrigin: 'top',
                  transform: `scale(${isOpen ? 1 : 0})`,
                  transitionDelay: `${index * 125}ms`,
                }}
              >
                {option}
              </li>
            )
          })}
        </ul>
      </div>
      <span
        className={
          isOpen
            ? [styles.customArrow, styles.openArrow].join(' ')
            : styles.customArrow
        }
      >
        <ExpandMore />
      </span>
    </div>
  )
}

export default PlatformSelect
