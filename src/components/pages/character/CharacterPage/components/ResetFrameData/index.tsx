import React, { useState } from 'react'
import Refresh from '../../../../../svg/Refresh'
import styles from './styles.module.scss'

interface ResetFrameDataProps {
  resetFrameData(): void
  disabled: boolean
}

const ResetFrameData: React.FC<ResetFrameDataProps> = ({
  resetFrameData,
  disabled,
}) => {
  const [pressed, setPressed] = useState(true)

  const togglePressed = () => {
    setPressed((prevState) => !prevState)
  }

  const containerClassName = disabled
    ? [styles.container, styles.disabled].join(' ')
    : styles.container

  return (
    <button
      onClick={() => {
        resetFrameData()
        togglePressed()
      }}
      className={containerClassName}
      {...{ disabled }}
    >
      <h3>Reset Frame Data</h3>
      <Refresh
        style={{
          transform: pressed ? 'rotate(0deg)' : 'rotate(540deg)',
        }}
      />
    </button>
  )
}

export default ResetFrameData
