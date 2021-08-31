import React from 'react'
import { AttackData } from '../../../../../../utils/data/types'
import styles from '../../styles.module.scss'
import Damage from './components/Damage'
import MoveType from './components/MoveType'
import FrameData from './components/FrameData'
import MoveInfo from './components/MoveInfo'

interface CurrentAttackDataProps {
  currentAttack: AttackData
}

const CurrentAttackData: React.FC<CurrentAttackDataProps> = ({
  currentAttack: {
    damage,
    blockDamage,
    flawlessBlockDamage,
    moveType,
    startup,
    active,
    recovery,
    cancelAdvantage,
    hitAdvantage,
    blockAdvantage,
    flawlessBlockAdvantage,
    info,
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
      <MoveType {...{ moveType }} />
      <MoveInfo {...{ info }} />
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
