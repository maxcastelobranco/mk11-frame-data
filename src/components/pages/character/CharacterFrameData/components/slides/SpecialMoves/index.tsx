import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'

interface SpecialMovesProps {
  specialMoves: AttackData[]
  abilities: AttackData[]
  fatalBlow: AttackData[]
}

const SpecialMoves: React.FC<SpecialMovesProps> = ({
  specialMoves,
  fatalBlow,
  abilities,
}) => {
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    specialMoves[0]
  )

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <AttackList
          attackList={specialMoves}
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={fatalBlow}
          title="Fatal Blow"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={abilities}
          title="Abilities"
          {...{ currentAttack, setCurrentAttack }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default SpecialMoves
