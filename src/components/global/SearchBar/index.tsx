import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import Search from '../../svg/Search'
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form'

interface SearchBarProps<T extends FieldValues> {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  register: (
    name: FieldPath<T>,
    options?: RegisterOptions<T, FieldPath<T>>
  ) => UseFormRegisterReturn
  placeholder: string
  name: FieldPath<T>
}

const SearchBar = <T extends FieldValues>({
  onSubmit,
  register,
  placeholder,
  name,
}: PropsWithChildren<SearchBarProps<T>>) => {
  return (
    <form {...{ onSubmit }} className={styles.container}>
      <input
        {...register(name)}
        {...{ placeholder }}
        aria-label={placeholder}
        type="text"
      />
      <button type="submit">
        <Search />
      </button>
    </form>
  )
}

export default SearchBar
