import React from 'react'
import frameData from '../../../../utils/data/frameData.json'
import { CharKeys, FrameData } from '../../../../utils/data/types'
import { useForm } from 'react-hook-form'
import styles from '../../../../styles/pages/character.module.scss'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { preventImageDrag } from '../../../../utils/helpers/preventImageDrag'
import SearchBar from '../../../global/SearchBar'
import PlatformSelect from '../../../global/PlatformSelect'
import CharacterFrameData from '../CharacterFrameData'
import ResetFrameData from './components/ResetFrameData'
import FilteredFrameDataProvider from '../../../../context/filteredFrameDataContext'
import SortBySelect from '../../../global/SortBySelect'

interface CharacterPageProps {
  id: CharKeys
}

export interface CharacterFormData {
  searchQuery: string
}

const CharacterPage: React.FC<CharacterPageProps> = ({ id }) => {
  const { register, handleSubmit, reset, setFocus } =
    useForm<CharacterFormData>()

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

  return (
    <FilteredFrameDataProvider {...{ currentCharacterFrameData }}>
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
                {...{ register, handleSubmit, setFocus }}
                placeholder="Filter frame data"
                name="searchQuery"
              />
              <ResetFrameData {...{ reset }} />
              <SortBySelect />
              <PlatformSelect />
            </div>
          </div>
        </section>
        <CharacterFrameData />
      </main>
    </FilteredFrameDataProvider>
  )
}

export default CharacterPage
