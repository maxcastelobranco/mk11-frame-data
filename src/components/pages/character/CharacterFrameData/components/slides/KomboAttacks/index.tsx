import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'

interface KomboAttacksProps {
  komboAttacks: AttackData[]
}

const KomboAttacks: React.FC<KomboAttacksProps> = ({ komboAttacks }) => {
  const [currentAttack, setCurrentAttack] = useState<AttackData>(
    komboAttacks[0]
  )

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <AttackList
          attackList={komboAttacks}
          {...{ currentAttack, setCurrentAttack }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default KomboAttacks
