import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <Image
          src="/frame-data-logo.png"
          width={240}
          height={72}
          objectFit="contain"
        />
      </Link>
    </header>
  )
}

export default Header
