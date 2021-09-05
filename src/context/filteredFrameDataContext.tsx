import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { FrameData } from '../utils/data/types'
import { sortMap, SortOptions } from '../utils/helpers/sortAttacks'

interface FilteredFrameDataContextData {
  filteredCharacterFrameData: FrameData
  setFilteredCharacterFrameData: React.Dispatch<React.SetStateAction<FrameData>>
  resetFrameData(): void
  currentCharacterFrameData: FrameData
  sortOption: SortOptions
  sortFrameData: (newSortOption: SortOptions) => void
}
interface FilteredFrameDataContextProps {
  currentCharacterFrameData: FrameData
}

const FilteredFrameDataContext = createContext(
  {} as FilteredFrameDataContextData
)

const FilteredFrameDataProvider: React.FC<FilteredFrameDataContextProps> = ({
  children,
  currentCharacterFrameData,
}) => {
  const [filteredCharacterFrameData, setFilteredCharacterFrameData] =
    useState<FrameData>(currentCharacterFrameData)
  const [sortOption, setSortOption] = useState<SortOptions>('notation')

  const resetFrameData = useCallback(() => {
    setSortOption('notation')
    const {
      basicAttacks,
      jumpingAttacks,
      hopAttacks,
      getupAttacks,
      flawlessBlockAttacks,
      komboAttacks,
      specialMoves,
      abilities,
    } = currentCharacterFrameData

    const newFrameData: FrameData = {
      ...currentCharacterFrameData,
      basicAttacks: basicAttacks.sort(sortMap['notation']),
      jumpingAttacks: jumpingAttacks.sort(sortMap['notation']),
      hopAttacks: hopAttacks.sort(sortMap['notation']),
      getupAttacks: getupAttacks.sort(sortMap['notation']),
      flawlessBlockAttacks: flawlessBlockAttacks.sort(sortMap['notation']),
      komboAttacks: komboAttacks.sort(sortMap['notation']),
      specialMoves: specialMoves.sort(sortMap['notation']),
      abilities: abilities.sort(sortMap['notation']),
    }

    setFilteredCharacterFrameData(newFrameData)
  }, [currentCharacterFrameData])

  const sortFrameData = useCallback(
    (newSortOption: SortOptions) => {
      setSortOption(newSortOption)
      const {
        basicAttacks,
        jumpingAttacks,
        hopAttacks,
        getupAttacks,
        flawlessBlockAttacks,
        komboAttacks,
        specialMoves,
        abilities,
      } = filteredCharacterFrameData

      const newFrameData: FrameData = {
        ...filteredCharacterFrameData,
        basicAttacks: basicAttacks.sort(sortMap[newSortOption]),
        jumpingAttacks: jumpingAttacks.sort(sortMap[newSortOption]),
        hopAttacks: hopAttacks.sort(sortMap[newSortOption]),
        getupAttacks: getupAttacks.sort(sortMap[newSortOption]),
        flawlessBlockAttacks: flawlessBlockAttacks.sort(sortMap[newSortOption]),
        komboAttacks: komboAttacks.sort(sortMap[newSortOption]),
        specialMoves: specialMoves.sort(sortMap[newSortOption]),
        abilities: abilities.sort(sortMap[newSortOption]),
      }

      setFilteredCharacterFrameData(newFrameData)
    },
    [filteredCharacterFrameData]
  )

  return (
    <FilteredFrameDataContext.Provider
      value={{
        filteredCharacterFrameData,
        setFilteredCharacterFrameData,
        resetFrameData,
        currentCharacterFrameData,
        sortOption,
        sortFrameData,
      }}
    >
      {children}
    </FilteredFrameDataContext.Provider>
  )
}

export const useFilteredFrameDataContext = () => {
  return useContext(FilteredFrameDataContext)
}

export default FilteredFrameDataProvider
