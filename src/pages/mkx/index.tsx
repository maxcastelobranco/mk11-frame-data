import type { NextPage } from 'next'
import { useState } from 'react'
import { CharacterData } from '../../mkx/utils/data/types'
import Header from '../../mkx/components/home/Header'
import styles from '../../styles/mkx/index.module.scss'
import { characters } from '../../mkx/utils/data/characters'
import FilterCharacters from '../../mkx/components/home/FilterCharacters'
import { RosterPortions } from '../../mkx/utils/data/rosterPortions'
import Character from '../../mkx/components/home/Character'
import { AnimatePresence, motion } from 'framer-motion'
import CustomParticles from '../../components/global/CustomParticles'
import { NextSeo } from 'next-seo'
import Copyright from '../../components/global/Copyright'

const Home: NextPage = () => {
  const [rosterPortion, setRosterPortion] = useState<RosterPortions>('mkxl')
  const [selectedCharacters, setSelectedCharacters] =
    useState<CharacterData[]>(characters)

  return (
    <main className={styles.container}>
      <NextSeo
        title="MKX Frame Data | Home"
        description="MkFrameData is a web app with the goal of making it easier to visualize and go through Mortal Kombat characters frame data"
      />
      <CustomParticles color="#f8f9fa" />
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
      <Copyright light />
    </main>
  )
}

export default Home
