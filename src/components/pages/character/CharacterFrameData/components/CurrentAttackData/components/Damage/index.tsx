import React from 'react'
import styles from './styles.module.scss'

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
  const damageMap = [
    {
      title: 'Damage',
      value: damage,
    },
    {
      title: 'Block Damage',
      value: blockDamage,
    },
    {
      title: 'Flawless Block Damage',
      value: flawlessBlockDamage,
    },
  ]

  return (
    <ul className={styles.container}>
      {damageMap.map(({ title, value }) => (
        <li key={title}>
          <p>{title}</p>
          <span>{value || 'N/A'}</span>
        </li>
      ))}
    </ul>
  )
}

export default Damage
