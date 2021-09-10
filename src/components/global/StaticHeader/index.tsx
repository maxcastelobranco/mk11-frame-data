import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import PlatformSelect from '../PlatformSelect'

const StaticHeader: React.FC = () => {
  const maxWidth560 = useMediaQuery('(max-width: 560px)')
  const minWidth380 = useMediaQuery('(min-width: 380px)')

  const logo = maxWidth560 ? (
    <Image
      alt="frame data logo"
      src="/frame-data-small-logo.png"
      width={100}
      height={72}
      objectFit="contain"
    />
  ) : (
    <Image
      alt="frame data logo"
      src="/frame-data-logo.png"
      width={240}
      height={72}
      objectFit="contain"
    />
  )

  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        {logo}
      </Link>
      {minWidth380 && <PlatformSelect />}
    </header>
  )
}

export default StaticHeader
