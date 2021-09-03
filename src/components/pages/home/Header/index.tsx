import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { characters } from '../../../../utils/data/characters'
import { CharacterData } from '../../../../utils/data/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import SearchBar from '../../../global/SearchBar'
import ExpandMore from '../../../svg/ExpandMore'
import {
  NotationOptions,
  useNotationContext,
} from '../../../../context/notationContext'
import { RosterPortions } from '../../../../utils/data/rosterPortions'

export type HeaderFormData = {
  searchQuery: string
}

interface HeaderProps {
  setSelectedCharacters: Dispatch<SetStateAction<CharacterData[]>>
  setRosterPortion: Dispatch<SetStateAction<RosterPortions>>
}

const Header: React.FC<HeaderProps> = ({
  setSelectedCharacters,
  setRosterPortion,
}) => {
  const { currentNotation, setCurrentNotation } = useNotationContext()
  const { register, handleSubmit } = useForm<HeaderFormData>()

  const onSubmit: SubmitHandler<HeaderFormData> = ({ searchQuery }) => {
    if (searchQuery) {
      setSelectedCharacters(
        characters.filter(({ name }) =>
          name.includes(searchQuery.toLowerCase())
        )
      )
      setRosterPortion('mk11 ultimate')
    } else {
      setSelectedCharacters(characters)
      setRosterPortion('mk11 ultimate')
    }
  }

  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <Image
          src="/frame-data-logo.png"
          width={240}
          height={72}
          objectFit="contain"
        />
      </Link>
      <SearchBar<HeaderFormData>
        name="searchQuery"
        placeholder="search fighters"
        onSubmit={handleSubmit(onSubmit)}
        {...{ register }}
      />
      <div className={styles.customSelectContainer}>
        <h3>Notation</h3>
        <select
          defaultValue={currentNotation}
          onChange={(event) => {
            setCurrentNotation(event.target.value as NotationOptions)
          }}
        >
          <option value={NotationOptions.default}>Default</option>
          <option value={NotationOptions.playstation}>Playstation</option>
          <option value={NotationOptions.xbox}>Xbox</option>
        </select>
        <span className={styles.customArrow}>
          <ExpandMore />
        </span>
      </div>
    </header>
  )
}

export default Header
