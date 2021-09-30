import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData, emptyAttack } from '../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'
import { useNavigateAttacks } from '../../../../../../hooks/useNavigateAttacks'
import { useFilteredFrameDataContext } from '../../../../../../context/filteredFrameDataContext'

const BasicAttacks: React.FC = () => {
  const {
    filteredCharacterFrameData: {
      basicAttacks,
      jumpingAttacks,
      hopAttacks,
      getupAttacks,
      flawlessBlockAttacks,
      throws,
      rollEscapes,
      airEscape,
    },
  } = useFilteredFrameDataContext()
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
