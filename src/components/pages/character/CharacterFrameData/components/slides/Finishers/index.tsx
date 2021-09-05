import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData, emptyAttack } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../../hooks/useNavigateAttacks'
import { useFilteredFrameDataContext } from '../../../../../../../context/filteredFrameDataContext'

const Finishers: React.FC = () => {
  const {
    filteredCharacterFrameData: {
      finishers: { fatalities, brutalities, friendship },
    },
  } = useFilteredFrameDataContext()

  const allAttacks = [...fatalities, ...brutalities, friendship]
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    fatalities[0] || emptyAttack
  )

  const activeAttackRef = useNavigateAttacks({
    allAttacks,
    currentAttack,
    setCurrentAttack,
  })

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <h3>Input commands</h3>
        <AttackList
          attackList={fatalities}
          title="Fatalities"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={brutalities}
          title="Brutalities"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
        <AttackList
          attackList={[friendship]}
          title="Friendship"
          {...{ currentAttack, setCurrentAttack, activeAttackRef }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default Finishers
