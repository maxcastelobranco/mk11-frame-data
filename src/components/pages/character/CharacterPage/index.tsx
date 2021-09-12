import React from 'react'
import { useForm } from 'react-hook-form'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import SearchBar from '../../../global/SearchBar'
import PlatformSelect from '../../../global/PlatformSelect'
import CharacterFrameData from '../CharacterFrameData'
import ResetFrameData from './components/ResetFrameData'
import FilteredFrameDataProvider from '../../../../context/filteredFrameDataContext'
import SortBySelect from '../../../global/SortBySelect'
import { CharKeys, FrameData } from '../../../../utils/data/types'
import { preventImageDrag } from '../../../../utils/helpers/preventImageDrag'
import styles from '../../../../styles/pages/character.module.scss'
import { useMediaQuery } from '../../../../hooks/useMediaQuery'
import Copyright from '../../../global/Copyright'

interface CharacterPageProps {
  id: CharKeys
  currentCharacterFrameData: FrameData
}

export interface CharacterFormData {
  searchQuery: string
}

const CharacterPage: React.FC<CharacterPageProps> = ({
  id,
  currentCharacterFrameData,
}) => {
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

  const maxWidth850 = useMediaQuery('(max-width: 850px)')
  const maxWidth570 = useMediaQuery('(max-width: 570px)')

  const imageSize = maxWidth850 ? 300 : 400

  return (
    <FilteredFrameDataProvider {...{ currentCharacterFrameData }}>
      <main className={styles.container}>
        <NextSeo title={`Frame Data | ${currentCharacterCapitalized}`} />
        <section className={styles.characterContainer}>
          {!maxWidth570 ? (
            <Image
              src={currentCharacterSrc}
              alt={id}
              width={imageSize}
              height={imageSize}
              objectFit="cover"
              {...preventImageDrag}
            />
          ) : (
            <div />
          )}
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
        <Copyright />
      </main>
    </FilteredFrameDataProvider>
  )
}

export default CharacterPage
