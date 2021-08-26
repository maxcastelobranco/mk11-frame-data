import React from 'react'
import styles from './styles.module.scss'

interface MoveTypeProps {
  type: string | undefined
}

const MoveType: React.FC<MoveTypeProps> = ({ type }) => {
  return (
    <div className={styles.container}>
      <p>Move type</p>
      <span>{type}</span>
    </div>
  )
}

export default MoveType
