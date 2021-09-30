import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { characters } from '../../../utils/data/characters'
import { CharacterData } from '../../../utils/data/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import SearchBar from '../../../../mkx/components/SearchBar'

import { RosterPortions } from '../../../utils/data/rosterPortions'
import { checkString } from '../../../utils/helpers/checkString'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import SwitchGame from '../../../../components/global/SwitchGame'

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
  const { register, handleSubmit, setFocus } = useForm<HeaderFormData>()
  const maxWidth850 = useMediaQuery('(max-width: 850px)')

  const onSubmit: SubmitHandler<HeaderFormData> = ({ searchQuery }) => {
    if (searchQuery) {
      setSelectedCharacters(
        characters.filter(({ name }) => {
          const formattedSearchQuery = searchQuery.toLowerCase()

          return (
            name.includes(formattedSearchQuery) ||
            checkString(name, formattedSearchQuery)
          )
        })
      )
      setRosterPortion('mkxl')
    } else {
      setSelectedCharacters(characters)
      setRosterPortion('mkxl')
    }
  }

  const logo = maxWidth850 ? (
    <Image
      alt="frame data logo"
      src="/mkx/frame-data-small-logo.png"
      width={100}
      height={72}
      objectFit="contain"
      role="link"
      tabIndex={0}
    />
  ) : (
    <Image
      alt="frame data logo"
      src="/mkx/frame-data-logo.png"
      width={240}
      height={72}
      objectFit="contain"
      role="link"
      tabIndex={0}
    />
  )

  return (
    <header className={styles.container}>
      <Link href="/mkx" passHref>
        {logo}
      </Link>
      <SearchBar<HeaderFormData>
        name="searchQuery"
        placeholder="search fighters"
        onSubmit={handleSubmit(onSubmit)}
        {...{ register, setFocus }}
      />
      <SwitchGame />
    </header>
  )
}

export default Header
