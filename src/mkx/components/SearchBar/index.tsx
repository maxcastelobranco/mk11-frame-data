import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import Search from '../../../components/svg/Search'
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormRegisterReturn,
} from 'react-hook-form'
import { FrameData } from '../../utils/data/types'
import { filterAttacks } from '../../utils/helpers/filterAttacks'
import { useFilteredFrameDataContext } from '../../context/filteredFrameDataContext'

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
        komboAttacks,
        specialMoves,
        variations,
      } = currentCharacterFrameData
      const variationNames = Object.keys(variations)
      const v1 = variationNames[0]
      const v2 = variationNames[1]
      const v3 = variationNames[2]

      const newFrameData: FrameData = {
        basicAttacks: filterAttacks(basicAttacks, searchQuery),
        jumpingAttacks: filterAttacks(jumpingAttacks, searchQuery),
        komboAttacks: filterAttacks(komboAttacks, searchQuery),
        specialMoves: filterAttacks(specialMoves, searchQuery),
        throw: filterAttacks(
          [currentCharacterFrameData['throw']],
          searchQuery
        )[0],
        variations: {
          [v1]: filterAttacks(variations[v1], searchQuery),
          [v2]: filterAttacks(variations[v2], searchQuery),
          [v3]: filterAttacks(variations[v3], searchQuery),
        },
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
