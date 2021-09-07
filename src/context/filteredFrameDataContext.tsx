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

    const defaultSortFunction = sortMap['notation']

    const newFrameData: FrameData = {
      ...currentCharacterFrameData,
      basicAttacks: customSortFunction(basicAttacks, defaultSortFunction),
      jumpingAttacks: customSortFunction(jumpingAttacks, defaultSortFunction),
      hopAttacks: customSortFunction(hopAttacks, defaultSortFunction),
      getupAttacks: customSortFunction(getupAttacks, defaultSortFunction),
      flawlessBlockAttacks: customSortFunction(
        flawlessBlockAttacks,
        defaultSortFunction
      ),
      komboAttacks: customSortFunction(komboAttacks, defaultSortFunction),
      specialMoves: customSortFunction(specialMoves, defaultSortFunction),
      abilities: customSortFunction(abilities, defaultSortFunction),
    }

    setFilteredCharacterFrameData(newFrameData)
  }, [currentCharacterFrameData])

  const sortFrameData = useCallback((newSortOption: SortOptions) => {
    setSortOption(newSortOption)

    setFilteredCharacterFrameData((prevState) => {
      const {
        basicAttacks,
        jumpingAttacks,
        hopAttacks,
        getupAttacks,
        flawlessBlockAttacks,
        komboAttacks,
        specialMoves,
        abilities,
      } = prevState

      return {
        ...prevState,
        basicAttacks: customSortFunction(basicAttacks, sortMap[newSortOption]),
        jumpingAttacks: customSortFunction(
          jumpingAttacks,
          sortMap[newSortOption]
        ),
        hopAttacks: customSortFunction(hopAttacks, sortMap[newSortOption]),
        getupAttacks: customSortFunction(getupAttacks, sortMap[newSortOption]),
        flawlessBlockAttacks: customSortFunction(
          flawlessBlockAttacks,
          sortMap[newSortOption]
        ),
        komboAttacks: customSortFunction(komboAttacks, sortMap[newSortOption]),
        specialMoves: customSortFunction(specialMoves, sortMap[newSortOption]),
        abilities: customSortFunction(abilities, sortMap[newSortOption]),
      }
    })
  }, [])

  const currentCharacterFrameDataAbsoluteCount = useMemo(() => {
    let count = 0

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
      finishers,
    } = currentCharacterFrameData
    basicAttacks.forEach(() => {
      count++
    })
    jumpingAttacks.forEach(() => {
      count++
    })
    hopAttacks.forEach(() => {
      count++
    })
    getupAttacks.forEach(() => {
      count++
    })
    flawlessBlockAttacks.forEach(() => {
      count++
    })
    throws.forEach(() => {
      count++
    })
    rollEscapes.forEach(() => {
      count++
    })
    airEscape.forEach(() => {
      count++
    })
    komboAttacks.forEach(() => {
      count++
    })
    specialMoves.forEach(() => {
      count++
    })
    abilities.forEach(() => {
      count++
    })
    finishers.fatalities.forEach(() => {
      count++
    })
    finishers.brutalities.forEach(() => {
      count++
    })

    return count
  }, [currentCharacterFrameData])
  const isResetDisabled = useMemo(() => {
    let count = 0

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
      finishers,
    } = filteredCharacterFrameData
    basicAttacks.forEach(() => {
      count++
    })
    jumpingAttacks.forEach(() => {
      count++
    })
    hopAttacks.forEach(() => {
      count++
    })
    getupAttacks.forEach(() => {
      count++
    })
    flawlessBlockAttacks.forEach(() => {
      count++
    })
    throws.forEach(() => {
      count++
    })
    rollEscapes.forEach(() => {
      count++
    })
    airEscape.forEach(() => {
      count++
    })
    komboAttacks.forEach(() => {
      count++
    })
    specialMoves.forEach(() => {
      count++
    })
    abilities.forEach(() => {
      count++
    })
    finishers.fatalities.forEach(() => {
      count++
    })
    finishers.brutalities.forEach(() => {
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
