import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import {
  NotationOptions,
  useNotationContext,
} from '../../../../../../../../context/notationContext'

interface NotationProps {
  notation: string
}

const directionalMap = {
  U: 'up',
  D: 'down',
  B: 'left',
  F: 'right',
}

const playstationMap = {
  1: 'square',
  2: 'triangle',
  3: 'cross',
  4: 'circle',
  Throw: 'l1',
  SS: 'l2',
  AMP: 'r1',
  Block: 'r2',
}
const xboxMap = {
  1: 'x',
  2: 'y',
  3: 'a',
  4: 'b',
  Throw: 'lb',
  SS: 'lt',
  AMP: 'rb',
  Block: 'rt',
}

const Notation: React.FC<NotationProps> = ({ notation }) => {
  const { currentNotation } = useNotationContext()

  if (currentNotation === NotationOptions.default) {
    return <span>{notation}</span>
  }

  const currentPlatformMap =
    currentNotation === NotationOptions.playstation ? playstationMap : xboxMap

  const platformSpecificNotation: (string | JSX.Element)[] = []

  notation.split('').forEach((character, index) => {
    const allCharacters = notation.split('')

    if (
      character === '1' ||
      character === '2' ||
      character === '3' ||
      character === '4'
    ) {
      platformSpecificNotation.push(
        <Image
          key={index}
          quality={100}
          objectFit="contain"
          src={`/${currentNotation}/${currentPlatformMap[character]}.${
            currentNotation === NotationOptions.playstation ? 'svg' : 'png'
          }`}
          width={16}
          height={16}
          alt={`${currentNotation} ${currentPlatformMap[character]}`}
          aria-label={`${currentNotation} ${currentPlatformMap[character]}`}
        />
      )
    }

    if (
      character === 'U' ||
      character === 'D' ||
      character === 'F' ||
      (character === 'B' && allCharacters[index + 1] !== 'l')
    ) {
      platformSpecificNotation.push(
        <Image
          key={index}
          quality={100}
          objectFit="contain"
          src={`/arrows/${directionalMap[character]}.svg`}
          width={16}
          height={16}
          alt={`${directionalMap[character]} arrow`}
          aria-label={`${directionalMap[character]} arrow`}
        />
      )
    }

    if (character === 'B' && allCharacters[index + 1] === 'l') {
      platformSpecificNotation.push(
        <Image
          key={index}
          quality={100}
          objectFit="contain"
          src={`/${currentNotation}/${currentPlatformMap.Block}.png`}
          width={24}
          height={16}
          alt={`${currentNotation} ${currentPlatformMap.Block}`}
          aria-label={`${currentNotation} ${currentPlatformMap.Block}`}
        />
      )
    }

    if (character === 'T') {
      platformSpecificNotation.push(
        <Image
          key={index}
          quality={100}
          objectFit="contain"
          src={`/${currentNotation}/${currentPlatformMap.Throw}.png`}
          width={24}
          height={16}
          alt={`${currentNotation} ${currentPlatformMap.Throw}`}
          aria-label={`${currentNotation} ${currentPlatformMap.Throw}`}
        />
      )
    }

    if (character === 'A') {
      platformSpecificNotation.push(
        <Image
          key={index}
          quality={100}
          objectFit="contain"
          src={`/${currentNotation}/${currentPlatformMap.AMP}.png`}
          width={24}
          height={16}
          alt={`${currentNotation} ${currentPlatformMap.AMP}`}
          aria-label={`${currentNotation} ${currentPlatformMap.AMP}`}
        />
      )
    }

    if (character === 'S' && allCharacters[index + 1] === 'S') {
      platformSpecificNotation.push(
        <Image
          key={index}
          quality={100}
          objectFit="contain"
          src={`/${currentNotation}/${currentPlatformMap.SS}.png`}
          width={24}
          height={16}
          alt={`${currentNotation} ${currentPlatformMap.SS}`}
          aria-label={`${currentNotation} ${currentPlatformMap.SS}`}
        />
      )
    }

    if (character === '+' || character === ',') {
      platformSpecificNotation.push(
        <span key={index} className={styles.marginBoth}>
          {character}
        </span>
      )
    }

    if (character === 'o' && allCharacters[index + 1] === 'r') {
      platformSpecificNotation.push(
        <span key={index} className={styles.marginBoth}>
          or
        </span>
      )
    }

    if (character === 'H') {
      platformSpecificNotation.push(
        <span key={index} className={styles.marginBoth}>
          Hold
        </span>
      )
    }

    if (
      character === 'R' &&
      allCharacters[index + 1] === 'e' &&
      allCharacters[index + 2] === 'l'
    ) {
      platformSpecificNotation.push(
        <span key={index} className={styles.marginBoth}>
          Release
        </span>
      )
    }

    if (
      character === 'R' &&
      allCharacters[index + 1] === 'e' &&
      allCharacters[index + 2] === 'p'
    ) {
      platformSpecificNotation.push(
        <span key={index} className={styles.marginBoth}>
          Repeatedly
        </span>
      )
    }

    if (character === 'R' && allCharacters[index + 1] === 'a') {
      platformSpecificNotation.push(
        <span key={index} className={styles.marginBoth}>
          Rapidly
        </span>
      )
    }
  })

  return <span>{platformSpecificNotation.map((e) => e)}</span>
}

export default Notation
