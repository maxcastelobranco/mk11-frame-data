import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../../hooks/useNavigateAttacks'

interface BasicAttacksProps {
  basicAttacks: AttackData[]
  jumpingAttacks: AttackData[]
  hopAttacks: AttackData[]
  getupAttacks: AttackData[]
  flawlessBlockAttacks: AttackData[]
  throws: AttackData[]
  rollEscapes: AttackData[]
  airEscape: AttackData[]
}

const BasicAttacks: React.FC<BasicAttacksProps> = ({
  basicAttacks,
  jumpingAttacks,
  hopAttacks,
  getupAttacks,
  flawlessBlockAttacks,
  throws,
  rollEscapes,
  airEscape,
}) => {
  const allAttacks = [
    ...basicAttacks,
    ...jumpingAttacks,
    ...hopAttacks,
    ...getupAttacks,
    ...flawlessBlockAttacks,
    ...throws,
    ...rollEscapes,
    ...airEscape,
  ]
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    basicAttacks[0]
  )
  const activeAttackRef = useNavigateAttacks({
    allAttacks,
    currentAttack,
    setCurrentAttack,
  })

  return (
    <div className={styles.frameDataSlide}>
      <section ref={activeAttackRef}>
        <AttackList
          attackList={basicAttacks}
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={jumpingAttacks}
          title="Jumping Attacks"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={hopAttacks}
          title="Hop Attacks"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={getupAttacks}
          title="Getup Attacks"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={flawlessBlockAttacks}
          title="F/B Attacks"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={throws}
          title="Throws"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={rollEscapes}
          title="Roll Escapes"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={airEscape}
          title="Air Escape"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default BasicAttacks
