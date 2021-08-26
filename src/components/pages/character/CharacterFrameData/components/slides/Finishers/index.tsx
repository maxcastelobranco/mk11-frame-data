import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import {
  AttackData,
  FinisherTypes,
} from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'

interface FinishersProps {
  finishers: Record<FinisherTypes, AttackData[]>
}

const Finishers: React.FC<FinishersProps> = ({
  finishers: { Fatalities, Brutalities },
}) => {
  const [currentAttack, setCurrentAttack] = useState<AttackData>(Fatalities[0])

  return (
    <div className={styles.frameDataSlide}>
      <section>
        <h3>Input commands</h3>
        <AttackList
          attackList={Fatalities}
          title="Fatalities"
          {...{ currentAttack, setCurrentAttack }}
        />
        <AttackList
          attackList={Brutalities}
          title="Brutalities"
          {...{ currentAttack, setCurrentAttack }}
        />
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default Finishers
