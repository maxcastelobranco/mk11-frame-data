import React from 'react'
import styles from '../../styles.module.scss'
import { AttackData } from '../../../../../../utils/data/types'

interface AttackListProps {
  attackList: AttackData[]
  currentAttack: AttackData
  setCurrentAttack: React.Dispatch<React.SetStateAction<AttackData>>
  title?: string
}

const AttackList: React.FC<AttackListProps> = ({
  attackList,
  currentAttack,
  setCurrentAttack,
  title = 'Input Commands',
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
              key={index}
              onClick={() => setCurrentAttack(attack)}
              role="button"
              className={classNames.join(' ')}
            >
              <span>{attack.moveName}</span>
              <span>{attack.notation}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AttackList
