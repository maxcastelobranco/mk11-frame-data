import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { FrameData } from '../utils/data/types'
import {
  customSortFunction,
  sortMap,
  SortOptions,
} from '../utils/helpers/sortAttacks'

interface FilteredFrameDataContextData {
  filteredCharacterFrameData: FrameData
  setFilteredCharacterFrameData: React.Dispatch<React.SetStateAction<FrameData>>
  resetFrameData(): void
  currentCharacterFrameData: FrameData
  sortOption: SortOptions
  sortFrameData: (newSortOption: SortOptions) => void
  isResetDisabled: boolean
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

    const { basicAttacks, jumpingAttacks, komboAttacks, specialMoves } =
      currentCharacterFrameData

    const defaultSortFunction = sortMap['notation']

    const newFrameData: FrameData = {
      ...currentCharacterFrameData,
      basicAttacks: customSortFunction(basicAttacks, defaultSortFunction),
      jumpingAttacks: customSortFunction(jumpingAttacks, defaultSortFunction),
      komboAttacks: customSortFunction(komboAttacks, defaultSortFunction),
      specialMoves: customSortFunction(specialMoves, defaultSortFunction),
    }

    setFilteredCharacterFrameData(newFrameData)
  }, [currentCharacterFrameData])

  const sortFrameData = useCallback(
    (newSortOption: SortOptions) => {
      if (newSortOption === sortOption) {
        resetFrameData()
      } else {
        setSortOption(newSortOption)

        setFilteredCharacterFrameData((prevState) => {
          const { basicAttacks, jumpingAttacks, komboAttacks, specialMoves } =
            prevState

          const sortFunction = sortMap[newSortOption]

          return {
            ...prevState,
            basicAttacks: customSortFunction(basicAttacks, sortFunction),
            jumpingAttacks: customSortFunction(jumpingAttacks, sortFunction),
            komboAttacks: customSortFunction(komboAttacks, sortFunction),
            specialMoves: customSortFunction(specialMoves, sortFunction),
          }
        })
      }
    },
    [resetFrameData, sortOption]
  )

  const currentCharacterFrameDataAbsoluteCount = useMemo(() => {
    let count = 0

    const { basicAttacks, jumpingAttacks, komboAttacks, specialMoves } =
      currentCharacterFrameData
    basicAttacks.forEach(() => {
      count++
    })
    jumpingAttacks.forEach(() => {
      count++
    })
    komboAttacks.forEach(() => {
      count++
    })
    specialMoves.forEach(() => {
      count++
    })

    return count
  }, [currentCharacterFrameData])
  const isResetDisabled = useMemo(() => {
    let count = 0

    const { basicAttacks, jumpingAttacks, komboAttacks, specialMoves } =
      filteredCharacterFrameData
    basicAttacks.forEach(() => {
      count++
    })
    jumpingAttacks.forEach(() => {
      count++
    })
    komboAttacks.forEach(() => {
      count++
    })
    specialMoves.forEach(() => {
      count++
    })

    return count === currentCharacterFrameDataAbsoluteCount
  }, [currentCharacterFrameDataAbsoluteCount, filteredCharacterFrameData])

  return (
    <FilteredFrameDataContext.Provider
      value={{
        filteredCharacterFrameData,
        setFilteredCharacterFrameData,
        resetFrameData,
        currentCharacterFrameData,
        sortOption,
        sortFrameData,
        isResetDisabled,
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
