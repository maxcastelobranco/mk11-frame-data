import React, { useState } from 'react'
import styles from '../../../styles.module.scss'
import { AttackData } from '../../../../../../../utils/data/types'
import AttackList from '../../AttackList'
import CurrentAttackData from '../../CurrentAttackData'

interface SpecialMovesProps {
  specialMoves: AttackData[]
  fatalBlow: AttackData | AttackData[]
}

const SpecialMoves: React.FC<SpecialMovesProps> = ({
  specialMoves,
  fatalBlow,
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

        {Array.isArray(fatalBlow) ? (
          <AttackList
            attackList={fatalBlow}
            title="Fatal Blow"
            {...{ currentAttack, setCurrentAttack }}
          />
        ) : (
          <>
            <h3>Fatal Blow</h3>
            <ul>
              <li
                key={fatalBlow.move}
                onClick={() => setCurrentAttack(fatalBlow)}
                role="button"
                className={
                  Object.is(fatalBlow, currentAttack) ? styles.activeAttack : ''
                }
              >
                <span>{fatalBlow.move}</span>
                <span>{fatalBlow.input}</span>
              </li>
            </ul>
          </>
        )}
      </section>
      <section>
        <CurrentAttackData {...{ currentAttack }} />
      </section>
    </div>
  )
}

export default SpecialMoves
