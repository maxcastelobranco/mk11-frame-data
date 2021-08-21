import React from 'react'
import Link from 'next/link'
import Logo from '../../../svg/Logo'
import styles from './styles.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <Logo />
      </Link>
    </header>
  )
}

export default Header
