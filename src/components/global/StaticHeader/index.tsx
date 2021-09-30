import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useMediaQuery } from '../../../mk11/hooks/useMediaQuery'

const StaticHeader: React.FC = () => {
  const maxWidth560 = useMediaQuery('(max-width: 560px)')

  const logo = maxWidth560 ? (
    <Image
      alt="frame data logo"
      src="/mk11/frame-data-small-logo.png"
      width={100}
      height={72}
      objectFit="contain"
    />
  ) : (
    <Image
      alt="frame data logo"
      src="/mk11/frame-data-logo.png"
      width={240}
      height={72}
      objectFit="contain"
    />
  )

  return (
    <header className={styles.container}>
      <Link href="/mk11" passHref>
        {logo}
      </Link>
    </header>
  )
}

export default StaticHeader
