import type { NextPage } from 'next'
import { useState } from 'react'
import { CharacterData } from '../utils/data/types'
import Header from '../components/pages/home/Header'
import styles from '../styles/pages/index.module.scss'
import { characters } from '../utils/data/characters'
import FilterCharacters from '../components/pages/home/FilterCharacters'
import { RosterPortions } from '../utils/data/rosterPortions'
import Character from '../components/pages/home/Character'
import { AnimatePresence, motion } from 'framer-motion'
import CustomParticles from '../components/global/CustomParticles'
import { NextSeo } from 'next-seo'
import Copyright from '../components/global/Copyright'

const Home: NextPage = () => {
  const [rosterPortion, setRosterPortion] =
    useState<RosterPortions>('mk11 ultimate')
  const [selectedCharacters, setSelectedCharacters] =
    useState<CharacterData[]>(characters)

  return (
    <main className={styles.container}>
      <NextSeo
        title="Frame Data | Home"
        description="MkFrameData is a web app with the goal of making it easier to visualize and go through Mortal Kombat characters frame data"
      />
      <CustomParticles />
      <Header
        {...{
          setSelectedCharacters,
          setRosterPortion,
        }}
      />
      <h1>Choose your fighter</h1>
      <FilterCharacters
        {...{ rosterPortion, setRosterPortion, setSelectedCharacters }}
      />
      <AnimatePresence exitBeforeEnter>
        <motion.section className={styles.charactersContainer} layout>
          {selectedCharacters.map((character, index) => (
            <Character key={character.key} {...{ character, index }} />
          ))}
        </motion.section>
      </AnimatePresence>
      <Copyright />
    </main>
  )
}

export default Home
