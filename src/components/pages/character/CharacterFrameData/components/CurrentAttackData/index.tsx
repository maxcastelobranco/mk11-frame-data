import React from 'react'
import { AttackData } from '../../../../../../utils/data/types'
import styles from '../../styles.module.scss'
import Damage from './components/Damage'
import MoveType from './components/MoveType'
import FrameData from './components/FrameData'

interface CurrentAttackDataProps {
  currentAttack: AttackData
}

const CurrentAttackData: React.FC<CurrentAttackDataProps> = ({
  currentAttack: {
    damage,
    blockDamage,
    flawlessBlockDamage,
    type,
    startup,
    active,
    recovery,
    cancelAdvantage,
    hitAdvantage,
    blockAdvantage,
    flawlessBlockAdvantage,
  },
}) => {
  return (
    <>
      <h3 className={styles.moveDataTitle}>Move Data</h3>
      <Damage
        {...{
          damage,
          blockDamage,
          flawlessBlockDamage,
        }}
      />
      <MoveType {...{ type }} />
      <h3 className={styles.frameDataTitle}>Frame Data</h3>
      <FrameData
        {...{
          startup,
          active,
          recovery,
          cancelAdvantage,
          hitAdvantage,
          blockAdvantage,
          flawlessBlockAdvantage,
        }}
      />
    </>
  )
}

export default CurrentAttackData
