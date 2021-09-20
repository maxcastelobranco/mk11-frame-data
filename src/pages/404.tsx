import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/pages/404.module.scss'
import StaticHeader from '../components/global/StaticHeader'
import Copyright from '../components/global/Copyright'
import { NextSeo } from "next-seo";

const IMAGE_HEIGHT = 350
const IMAGE_RATIO = 0.80769230769
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_RATIO

const Custom404: NextPage = () => {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Frame Data | Not Found"
        noindex
        nofollow
      />
      <StaticHeader />
      <h1>Nothing to see here.</h1>
      <Image
        src="/characters/kenshi.png"
        height={IMAGE_HEIGHT}
        width={IMAGE_WIDTH}
        layout="fixed"
        quality={100}
        priority
      />
      <Copyright style={{ position: 'absolute', bottom: 0 }} />
    </div>
  )
}

export default Custom404
