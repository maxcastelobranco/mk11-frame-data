import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData, emptyAttack } from '../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../hooks/useNavigateAttacks'
import { useFilteredFrameDataContext } from '../../../../../../context/filteredFrameDataContext'

const SecondVariation: React.FC = () => {
  const {
    filteredCharacterFrameData: { variations },
  } = useFilteredFrameDataContext()
  const variationName = Object.keys(variations)[1]
  const variationAttacks = variations[variationName]
  const allAttacks = [...variationAttacks]
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    variationAttacks[0] || emptyAttack
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
          attackList={variationAttacks}
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default SecondVariation
