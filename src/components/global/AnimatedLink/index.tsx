import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

interface AnimatedLinkProps {
  href: string
  label: string
  yellow?: boolean
  fontSize?: string
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  label,
  yellow,
  fontSize = '2rem',
}) => {
  const classNames = [styles.container]
  yellow ? classNames.push(styles.yellow) : classNames.push(styles.white)

  return (
    <Link {...{ href }}>
      <button
        role="link"
        className={classNames.join(' ')}
        style={{ color: yellow ? '#fda90f' : '#f8f9fa', fontSize }}
      >
        {label}
      </button>
    </Link>
  )
}

export default AnimatedLink
