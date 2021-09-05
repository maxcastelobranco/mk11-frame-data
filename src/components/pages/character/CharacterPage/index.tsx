import React, { useState } from 'react'
import frameData from '../../../../utils/data/frameData.json'
import { CharKeys, emptyAttack, FrameData } from '../../../../utils/data/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from '../../../../styles/pages/character.module.scss'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { preventImageDrag } from '../../../../utils/helpers/preventImageDrag'
import SearchBar from '../../../global/SearchBar'
import PlatformSelect from '../../../global/PlatformSelect'
import CharacterFrameData from '../CharacterFrameData'
import {
  filterAttacks,
  filterFinishers,
  testFatalBlow,
} from '../../../../utils/helpers/filterAttacks'
import ResetFrameData from './components/ResetFrameData'

interface CharacterPageProps {
  id: CharKeys
}

interface CharacterFormData {
  searchQuery: string
}

const CharacterPage: React.FC<CharacterPageProps> = ({ id }) => {
  const { register, handleSubmit, reset } = useForm<CharacterFormData>()

  const currentCharacterName = id.replace('-', ' ')
  const currentCharacterCapitalized = currentCharacterName
    .split(' ')
    .map((name) => {
      const lowerCaseName = name.toLowerCase()
      return name.charAt(0).toUpperCase() + lowerCaseName.slice(1)
    })
    .join(' ')
  const currentCharacterSrc = `/characters/${id}.png`
  const currentCharacterFrameData = frameData[id] as FrameData
  const [filteredCharacterFrameData, setFilteredCharacterFrameData] = useState(
    currentCharacterFrameData
  )

  const onSubmit: SubmitHandler<CharacterFormData> = ({ searchQuery }) => {
    if (!searchQuery) {
      setFilteredCharacterFrameData(currentCharacterFrameData)
    } else {
      const {
        basicAttacks,
        jumpingAttacks,
        hopAttacks,
        getupAttacks,
        flawlessBlockAttacks,
        throws,
        rollEscapes,
        airEscape,
        komboAttacks,
        specialMoves,
        abilities,
        fatalBlow,
        finishers,
      } = currentCharacterFrameData

      const newFrameData: FrameData = {
        basicAttacks: filterAttacks(basicAttacks, searchQuery),
        jumpingAttacks: filterAttacks(jumpingAttacks, searchQuery),
        hopAttacks: filterAttacks(hopAttacks, searchQuery),
        getupAttacks: filterAttacks(getupAttacks, searchQuery),
        flawlessBlockAttacks: filterAttacks(flawlessBlockAttacks, searchQuery),
        throws: filterAttacks(throws, searchQuery),
        rollEscapes: filterAttacks(rollEscapes, searchQuery),
        airEscape: filterAttacks(airEscape, searchQuery),
        komboAttacks: filterAttacks(komboAttacks, searchQuery),
        specialMoves: filterAttacks(specialMoves, searchQuery),
        abilities: filterAttacks(abilities, searchQuery),
        fatalBlow: testFatalBlow(fatalBlow, searchQuery)
          ? fatalBlow
          : emptyAttack,
        finishers: filterFinishers(finishers, searchQuery),
      }

      setFilteredCharacterFrameData(newFrameData)
    }
  }

  const resetFrameDataDisabled = Object.is(
    currentCharacterFrameData,
    filteredCharacterFrameData
  )

  const resetFrameData = () => {
    if (!resetFrameDataDisabled) {
      reset()
      setFilteredCharacterFrameData(currentCharacterFrameData)
    }
  }

  return (
    <main className={styles.container}>
      <NextSeo title={`Frame Data | ${currentCharacterCapitalized}`} />
      <section className={styles.characterContainer}>
        <Image
          src={currentCharacterSrc}
          alt={id}
          width={400}
          height={400}
          objectFit="cover"
          {...preventImageDrag}
        />
        <div>
          <h1>{currentCharacterName}</h1>
          <div>
            <SearchBar<CharacterFormData>
              {...{ register }}
              placeholder="Filter frame data"
              name="searchQuery"
              onSubmit={handleSubmit(onSubmit)}
            />
            <ResetFrameData
              {...{ resetFrameData }}
              disabled={resetFrameDataDisabled}
            />
            <PlatformSelect />
          </div>
        </div>
      </section>
      <CharacterFrameData frameData={filteredCharacterFrameData} />
    </main>
  )
}

export default CharacterPage
