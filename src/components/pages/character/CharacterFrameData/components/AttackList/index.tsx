import React from 'react'
import styles from '../../styles.module.scss'
import { AttackData } from '../../../../../../utils/data/types'
import Notation from './components/Notation'
import { useMediaQuery } from '../../../../../../hooks/useMediaQuery'

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
  const minWidth950 = useMediaQuery('(min-width:950px)')
  const minWidth570 = useMediaQuery('(min-width:570px)')
  return (
    <>
      {title !== 'Input Commands' && <h3>{title}</h3>}
      {title === 'Input Commands' && minWidth950 && <h3>{title}</h3>}
      <ul>
        {attackList.map((attack) => {
          const isActive = Object.is(attack, currentAttack)

          return (
            <React.Fragment key={attack.key}>
              <li
                ref={isActive && activeAttackRef ? activeAttackRef : undefined}
                onClick={() => setCurrentAttack(attack)}
                role="button"
                className={isActive ? styles.activeAttack : ''}
              >
                {minWidth570 && <span>{attack.moveName}</span>}
                <Notation notation={attack.notation} />
              </li>
              {attack.submoves &&
                attack.submoves.map((submove) => {
                  const isActive = Object.is(submove, currentAttack)
                  const classNames = [styles.complementaryAttack]
                  if (isActive) classNames.push(styles.activeAttack)

                  return (
                    <li
                      ref={
                        isActive && activeAttackRef
                          ? activeAttackRef
                          : undefined
                      }
                      key={submove.key}
                      onClick={() => setCurrentAttack(submove)}
                      role="button"
                      className={classNames.join(' ')}
                    >
                      <span>{submove.moveName}</span>
                      <Notation notation={submove.notation} />
                    </li>
                  )
                })}
            </React.Fragment>
          )
        })}
      </ul>
    </>
  )
}

export default AttackList
