import React, { useState } from 'react'
import Refresh from '../../../../../svg/Refresh'
import styles from './styles.module.scss'
import { useFilteredFrameDataContext } from '../../../../../../context/filteredFrameDataContext'

interface ResetFrameDataProps {
  reset: () => void
}

const ResetFrameData: React.FC<ResetFrameDataProps> = ({ reset }) => {
  const { resetFrameData } = useFilteredFrameDataContext()
  const [pressed, setPressed] = useState(true)

  const togglePressed = () => {
    setPressed((prevState) => !prevState)
  }

  return (
    <button
      onClick={() => {
        resetFrameData()
        togglePressed()
        reset()
      }}
      className={styles.container}
    >
      <h3>Reset</h3>
      <Refresh
        style={{
          transform: pressed ? 'rotate(0deg)' : 'rotate(540deg)',
        }}
      />
    </button>
  )
}

export default ResetFrameData
