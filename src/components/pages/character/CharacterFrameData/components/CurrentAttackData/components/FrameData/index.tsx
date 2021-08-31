import React from 'react'
import styles from './styles.module.scss'

interface FrameDataProps {
  startup: string | undefined
  active: string | undefined
  recovery: string | undefined
  cancelAdvantage: string | undefined
  hitAdvantage: string | undefined
  blockAdvantage: string | undefined
  flawlessBlockAdvantage: string | undefined
}

const FrameData: React.FC<FrameDataProps> = ({
  startup,
  active,
  recovery,
  cancelAdvantage,
  hitAdvantage,
  blockAdvantage,
  flawlessBlockAdvantage,
}) => {
  const frameDataMap = [
    {
      title: 'Startup',
      value: startup,
    },
    {
      title: 'Active',
      value: active,
    },
    {
      title: 'Recovery',
      value: recovery,
    },
    {
      title: 'Cancel Advantage',
      value: cancelAdvantage,
    },
    {
      title: 'Hit Advantage',
      value: hitAdvantage,
    },
    {
      title: 'Block Advantage',
      value: blockAdvantage,
    },
    {
      title: 'Flawless Block Advantage',
      value: flawlessBlockAdvantage,
    },
  ]

  return (
    <ul className={styles.container}>
      {frameDataMap.map(({ title, value }) => (
        <li key={title}>
          <p>{title}</p>
          <span>{value || 'N/A'}</span>
        </li>
      ))}
    </ul>
  )
}

export default FrameData
