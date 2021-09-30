import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData, emptyAttack } from '../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../hooks/useNavigateAttacks'
import { useFilteredFrameDataContext } from '../../../../../../context/filteredFrameDataContext'

const BasicAttacks: React.FC = () => {
  const {
    filteredCharacterFrameData: { basicAttacks, jumpingAttacks },
  } = useFilteredFrameDataContext()
  const allAttacks = [...basicAttacks, ...jumpingAttacks]
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    basicAttacks[0] || emptyAttack
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
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default BasicAttacks
