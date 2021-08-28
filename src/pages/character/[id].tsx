import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CharKeys, FrameData } from '../../utils/data/types'
import styles from '../../styles/pages/character.module.scss'
import frameData from '../../utils/data/frameData.json'
import { preventImageDrag } from '../../utils/helpers/preventImageDrag'
import CharacterFrameData from '../../components/pages/character/CharacterFrameData'
import { NextSeo } from 'next-seo'

const Character: NextPage = () => {
  const { query } = useRouter()
  const id = query.id as CharKeys

  if (!id) {
    return <h1>...Loading</h1>
  }

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
        </div>
      </section>
      <CharacterFrameData frameData={currentCharacterFrameData} />
    </main>
  )
}

export default Character
