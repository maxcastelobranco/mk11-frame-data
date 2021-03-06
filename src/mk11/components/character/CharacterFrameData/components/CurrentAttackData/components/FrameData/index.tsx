import React from 'react'
import styles from './styles.module.scss'
import containerStyles from '../../../../styles.module.scss'
import { useFilteredFrameDataContext } from '../../../../../../../context/filteredFrameDataContext'
import { SortOptions } from '../../../../../../../utils/helpers/sortAttacks'

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
  const { sortOption, sortFrameData } = useFilteredFrameDataContext()

  const frameDataMap: {
    title: string
    key: SortOptions
    value: string | undefined
  }[] = [
    {
      key: 'startup',
      value: startup,
      title: 'Startup',
    },
    {
      key: 'active',
      value: active,
      title: 'Active',
    },
    {
      key: 'recovery',
      value: recovery,
      title: 'Recovery',
    },
    {
      key: 'cancelAdvantage',
      value: cancelAdvantage,
      title: 'Cancel Adv.',
    },
    {
      key: 'hitAdvantage',
      value: hitAdvantage,
      title: 'Hit Adv.',
    },
    {
      key: 'blockAdvantage',
      value: blockAdvantage,
      title: 'Block Adv.',
    },
    {
      key: 'flawlessBlockAdvantage',
      value: flawlessBlockAdvantage,
      title: 'F/B Adv.',
    },
  ]

  return (
    <ul className={styles.container}>
      {frameDataMap.map(({ title, value, key }) => {
        const isActive = sortOption === key

        return (
          <li
            key={key}
            className={isActive ? containerStyles.activeItem : ''}
            onClick={() => sortFrameData(key)}
            role="button"
            tabIndex={0}
          >
            <p>{title}</p>
            <span>{value || 'N/A'}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default FrameData
