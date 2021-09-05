import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData, emptyAttack } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../../hooks/useNavigateAttacks'
import { useFilteredFrameDataContext } from '../../../../../../../context/filteredFrameDataContext'

const KomboAttacks: React.FC = () => {
  const {
    filteredCharacterFrameData: { komboAttacks },
  } = useFilteredFrameDataContext()

  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    komboAttacks[0] || emptyAttack
  )
  const activeAttackRef = useNavigateAttacks({
    allAttacks: komboAttacks,
    currentAttack,
    setCurrentAttack,
  })

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <AttackList
          attackList={komboAttacks}
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default KomboAttacks
