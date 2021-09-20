import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import Search from '../../svg/Search'
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegisterReturn,
} from 'react-hook-form'
import { emptyAttack, FrameData } from '../../../utils/data/types'
import {
  filterAttacks,
  filterFinishers,
  testFatalBlow,
} from '../../../utils/helpers/filterAttacks'
import { useFilteredFrameDataContext } from '../../../context/filteredFrameDataContext'

interface SearchBarProps<T extends FieldValues> {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  handleSubmit?: (
    onValid: SubmitHandler<T>,
    onInvalid?: SubmitErrorHandler<T>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>
  setFocus?: (name: FieldPath<T>) => void
  register: (
    name: FieldPath<T>,
    options?: RegisterOptions<T, FieldPath<T>>
  ) => UseFormRegisterReturn
  placeholder: string
  name: FieldPath<T>
}

const SearchBar = <T extends FieldValues>({
  onSubmit,
  handleSubmit,
  setFocus,
  register,
  placeholder,
  name,
}: PropsWithChildren<SearchBarProps<T>>) => {
  const { setFilteredCharacterFrameData, currentCharacterFrameData } =
    useFilteredFrameDataContext()

  const filterFrameData: SubmitHandler<T> = ({ searchQuery }) => {
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

  return (
    <form
      onSubmit={
        onSubmit && !handleSubmit
          ? onSubmit
          : handleSubmit && !onSubmit
          ? handleSubmit(filterFrameData)
          : undefined
      }
      className={styles.container}
    >
      <input
        {...register(name)}
        {...{ placeholder }}
        aria-label={placeholder}
        autoComplete="off"
        type="text"
      />
      <button
        type="submit"
        role="submit"
        aria-label="submit character search"
        onFocus={() => {
          setFocus && setFocus(name)
        }}
      >
        <Search aria-label="search icon" />
      </button>
    </form>
  )
}

export default SearchBar
