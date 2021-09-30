import React from 'react'
import styles from './styles.module.scss'

interface MoveInfoProps {
  info: string | undefined
}

const MoveInfo: React.FC<MoveInfoProps> = ({ info }) => {
  return (
    <div className={styles.container}>
      <p>Move info</p>
      {info ? (
        info.split('\n').map((data) => <span key={data}>{data}</span>)
      ) : (
        <span>N/A</span>
      )}
    </div>
  )
}

export default MoveInfo
