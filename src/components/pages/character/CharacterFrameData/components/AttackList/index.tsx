import React, { useEffect, useRef } from 'react'
import styles from '../../styles.module.scss'
import { AttackData } from '../../../../../../utils/data/types'
import Notation from './components/Notation'

interface AttackListProps {
  attackList: AttackData[]
  currentAttack: AttackData
  setCurrentAttack: React.Dispatch<React.SetStateAction<AttackData>>
  title?: string
  activeAttackRef?: React.RefObject<HTMLLIElement>
}

const AttackList: React.FC<AttackListProps> = ({
  attackList,
  currentAttack,
  setCurrentAttack,
  title = 'Input Commands',
  activeAttackRef,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {attackList.map((attack, index) => {
          const isActive = Object.is(attack, currentAttack)
          const classNames = []
          if (isActive) classNames.push(styles.activeAttack)
          if (attack.subcategory === 'Submove')
            classNames.push(styles.complementaryAttack)

          return (
            <li
              ref={isActive && activeAttackRef ? activeAttackRef : undefined}
              key={index}
              onClick={() => setCurrentAttack(attack)}
              role="button"
              className={classNames.join(' ')}
            >
              <span>{attack.moveName}</span>
              <Notation notation={attack.notation} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AttackList
