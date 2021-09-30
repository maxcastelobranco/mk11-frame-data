import React from 'react'
import { AttackData } from '../../../../../utils/data/types'
import styles from '../../styles.module.scss'
import MoveType from './components/MoveType'
import FrameData from './components/FrameData'
import MoveInfo from './components/MoveInfo'

interface CurrentAttackDataProps {
  currentAttack: AttackData
}

const CurrentAttackData: React.FC<CurrentAttackDataProps> = ({
  currentAttack: {
    moveType,
    startup,
    active,
    recovery,
    cancelAdvantage,
    hitAdvantage,
    blockAdvantage,
    info,
  },
}) => {
  return (
    <>
      <h3 className={styles.moveDataTitle}>Move Data</h3>
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
        }}
      />
    </>
  )
}

export default CurrentAttackData
