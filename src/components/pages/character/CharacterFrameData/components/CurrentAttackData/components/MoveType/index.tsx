import React from 'react'
import styles from './styles.module.scss'

interface MoveTypeProps {
  moveType: string | undefined
}

const MoveType: React.FC<MoveTypeProps> = ({ moveType }) => {
  return (
    <div className={styles.container}>
      <p>Move type</p>
      <span>{moveType || 'N/A'}</span>
    </div>
  )
}

export default MoveType
