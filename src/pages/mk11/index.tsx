import type { NextPage } from 'next'
import { useState } from 'react'
import { CharacterData } from '../../mk11/utils/data/types'
import Header from '../../mk11/components/home/Header'
import styles from '../../styles/mk11/index.module.scss'
import { characters } from '../../mk11/utils/data/characters'
import FilterCharacters from '../../mk11/components/home/FilterCharacters'
import { RosterPortions } from '../../mk11/utils/data/rosterPortions'
import Character from '../../mk11/components/home/Character'
import { AnimatePresence, motion } from 'framer-motion'
import CustomParticles from '../../components/global/CustomParticles'
import { NextSeo } from 'next-seo'
import Copyright from '../../components/global/Copyright'

const Home: NextPage = () => {
  const [rosterPortion, setRosterPortion] =
    useState<RosterPortions>('mk11 ultimate')
  const [selectedCharacters, setSelectedCharacters] =
    useState<CharacterData[]>(characters)

  return (
    <main className={styles.container}>
      <NextSeo
        title="MK11 Frame Data | Home"
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
