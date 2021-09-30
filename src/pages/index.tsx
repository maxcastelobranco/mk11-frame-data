import React from 'react'
import { NextPage } from 'next'
import styles from '../styles/index.module.scss'
import { NextSeo } from 'next-seo'
import Copyright from '../components/global/Copyright'
import CustomParticles from '../components/global/CustomParticles'
import AnimatedLink from '../components/global/AnimatedLink'

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <NextSeo
        title="Frame Data | Choose Game"
        description="MkFrameData is a web app with the goal of making it easier to visualize and go through Mortal Kombat characters frame data"
      />
      <CustomParticles color="#fff" />
      <h1>Choose a Game</h1>
      <AnimatedLink href="/mk11" label="Mortal Kombat 11" yellow />
      <AnimatedLink href="/mkx" label="Mortal Kombat X" />
      <Copyright />
    </main>
  )
}

export default Home
