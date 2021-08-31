import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'

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
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    basicAttacks[0]
  )

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <AttackList
          attackList={basicAttacks}
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={jumpingAttacks}
          title="Jumping Attacks"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={hopAttacks}
          title="Hop Attacks"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={getupAttacks}
          title="Getup Attacks"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={flawlessBlockAttacks}
          title="Flawless Block Attacks"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={throws}
          title="Throws"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={rollEscapes}
          title="Roll Escapes"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={airEscape}
          title="Air Escape"
          {...{ currentAttack, setCurrentAttack }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default BasicAttacks
