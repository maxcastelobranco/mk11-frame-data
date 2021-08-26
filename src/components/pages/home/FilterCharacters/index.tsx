import React, { Dispatch, SetStateAction } from 'react'
import { CharacterData } from '../../../../utils/data/types'
import { characters } from '../../../../utils/data/characters'
import styles from './styles.module.scss'
import {
  RosterPortions,
  rosterPortions,
} from '../../../../utils/data/rosterPortions'

interface FilterCharactersProps {
  rosterPortion: RosterPortions
  setRosterPortion: Dispatch<SetStateAction<RosterPortions>>
  setSelectedCharacters: Dispatch<SetStateAction<CharacterData[]>>
}

const FilterCharacters: React.FC<FilterCharactersProps> = ({
  rosterPortion,
  setRosterPortion,
  setSelectedCharacters,
}) => {
  const handleFilterCharacters = (rosterPortion: RosterPortions) => {
    setRosterPortion(rosterPortion)

    if (rosterPortion === 'mk11 ultimate') {
      setSelectedCharacters(characters)
    } else {
      setSelectedCharacters(
        characters.filter(({ availableOn }) => availableOn === rosterPortion)
      )
    }
  }

  return (
    <div className={styles.container}>
      {rosterPortions.map((currentRosterPortion) => {
        const isActive = currentRosterPortion === rosterPortion

        return (
          <button
            key={currentRosterPortion}
            className={isActive ? styles.activeButton : ''}
            onClick={() => handleFilterCharacters(currentRosterPortion)}
          >
            {currentRosterPortion}
          </button>
        )
      })}
    </div>
  )
}

export default FilterCharacters
