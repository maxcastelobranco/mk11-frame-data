import React, { useEffect, useRef } from 'react'
import { AttackData } from '../utils/data/types'

interface UseNavigateAttacksDTO {
  allAttacks: AttackData[]
  currentAttack: AttackData
  setCurrentAttack: React.Dispatch<React.SetStateAction<AttackData>>
}

export const useNavigateAttacks = ({
  allAttacks,
  currentAttack,
  setCurrentAttack,
}: UseNavigateAttacksDTO) => {
  const handleUserKeyPress = (event: KeyboardEvent) => {
    if (
      ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
        event.code
      ) > -1
    ) {
      event.preventDefault()
    }

    const currentIndex = allAttacks.findIndex((attack) =>
      Object.is(attack, currentAttack)
    )

    switch (event.key) {
      case 'ArrowUp': {
        if (currentIndex === 0) {
          break
        }
        setCurrentAttack(allAttacks[currentIndex - 1])
        break
      }
      case 'ArrowDown': {
        if (currentIndex === allAttacks.length - 1) {
          break
        }
        setCurrentAttack(allAttacks[currentIndex + 1])
        break
      }
    }
  }

  const activeAttackRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (activeAttackRef.current) {
      activeAttackRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [activeAttackRef.current])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleUserKeyPress)

      return () => {
        window.removeEventListener('keydown', handleUserKeyPress)
      }
    }
  })

  return activeAttackRef
}
