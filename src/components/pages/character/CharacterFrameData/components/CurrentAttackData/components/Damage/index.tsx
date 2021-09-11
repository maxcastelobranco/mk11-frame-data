import React from 'react'
import containerStyles from '../../../../styles.module.scss'
import styles from './styles.module.scss'
import { useFilteredFrameDataContext } from '../../../../../../../../context/filteredFrameDataContext'
import { SortOptions } from '../../../../../../../../utils/helpers/sortAttacks'

interface DamageProps {
  damage: string | undefined
  blockDamage: string | undefined
  flawlessBlockDamage: string | undefined
}

const Damage: React.FC<DamageProps> = ({
  damage,
  blockDamage,
  flawlessBlockDamage,
}) => {
  const { sortOption, sortFrameData } = useFilteredFrameDataContext()

  const damageMap: {
    title: string
    key: SortOptions
    value: string | undefined
  }[] = [
    {
      title: 'Damage',
      key: 'damage',
      value: damage,
    },
    {
      title: 'Block Damage',
      key: 'blockDamage',
      value: blockDamage,
    },
    {
      title: 'F/B Damage',
      key: 'flawlessBlockDamage',
      value: flawlessBlockDamage,
    },
  ]

  return (
    <ul className={styles.container}>
      {damageMap.map(({ title, value, key }) => {
        const isActive = sortOption === key

        return (
          <li
            key={key}
            className={isActive ? containerStyles.activeItem : ''}
            onClick={() => sortFrameData(key)}
            role="button"
          >
            <p>{title}</p>
            <span>{value || 'N/A'}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default Damage
