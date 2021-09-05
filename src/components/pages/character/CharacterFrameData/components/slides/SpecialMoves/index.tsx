import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData, emptyAttack } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../../hooks/useNavigateAttacks'
import { useFilteredFrameDataContext } from '../../../../../../../context/filteredFrameDataContext'

const SpecialMoves: React.FC = () => {
  const {
    filteredCharacterFrameData: { specialMoves, fatalBlow, abilities },
  } = useFilteredFrameDataContext()

  const allAttacks = [...specialMoves, fatalBlow, ...abilities]

  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    specialMoves[0] || emptyAttack
  )

  const activeAttackRef = useNavigateAttacks({
    allAttacks,
    currentAttack,
    setCurrentAttack,
  })

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <AttackList
          attackList={specialMoves}
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={[fatalBlow]}
          title="Fatal Blow"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={abilities}
          title="Abilities"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default SpecialMoves
