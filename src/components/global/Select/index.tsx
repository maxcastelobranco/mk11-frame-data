import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import styles from './styles.module.scss'
import ExpandMore from '../../svg/ExpandMore'
import { NotationOptions } from '../../../context/notationContext'
import { formatOption } from '../../../utils/helpers/formatOption'

interface SelectProps {
  title: string | NotationOptions
  options: (string | NotationOptions)[]
  activeOption: string | NotationOptions
  onClick(option: string | NotationOptions): void
}

const Select: React.FC<SelectProps> = ({
  title,
  activeOption,
  options,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleClickOutside = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  useOnClickOutside(containerRef, handleClickOutside)

  return (
    <div className={styles.container} ref={containerRef}>
      <h3>{title}</h3>
      <div onClick={toggleOpen}>
        <p>{activeOption}</p>
        <ul
          style={{
            pointerEvents: isOpen ? 'initial' : 'none',
            bottom: -1 * 40 * options.length,
          }}
        >
          {options.map((option, index) => {
            const formattedOption = formatOption(option)

            return (
              <li
                key={option}
                onClick={() => onClick(option)}
                style={{
                  opacity: isOpen ? 0.9 : 0,
                  transformOrigin: 'top',
                  transform: `scale(${isOpen ? 1 : 0})`,
                  transitionDelay: `${index * 25}ms`,
                }}
              >
                {formattedOption}
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

export default Select
