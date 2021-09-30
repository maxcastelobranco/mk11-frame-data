import { AttackData, emptyFriendship, FinishersData } from '../data/types'

export const filterAttacks = (attacks: AttackData[], searchQuery: string) => {
  const lowerCaseSearchQuery = searchQuery.toLowerCase()

  if (/^-?\d*\.?\d+$/.test(searchQuery)) {
    return attacks.filter(
      ({
        notation,
        startup,
        active,
        recovery,
        cancelAdvantage,
        hitAdvantage,
        blockAdvantage,
        flawlessBlockAdvantage,
      }) => {
        return (
          Number(startup) === Number(searchQuery) ||
          Number(active) === Number(searchQuery) ||
          Number(recovery) === Number(searchQuery) ||
          Number(cancelAdvantage) === Number(searchQuery) ||
          Number(hitAdvantage) === Number(searchQuery) ||
          Number(blockAdvantage) === Number(searchQuery) ||
          Number(flawlessBlockAdvantage) === Number(searchQuery) ||
          notation.includes(searchQuery)
        )
      }
    )
  }

  if (
    lowerCaseSearchQuery !== 'low' &&
    'krushing blow'.includes(lowerCaseSearchQuery)
  ) {
    return attacks.filter(({ info }) => {
      return info?.toLowerCase().includes(lowerCaseSearchQuery)
    })
  }

  return attacks.filter(({ moveName, notation, subcategory, moveType }) => {
    return (
      moveName?.toLowerCase().includes(lowerCaseSearchQuery) ||
      notation?.toLowerCase().includes(lowerCaseSearchQuery) ||
      subcategory?.toLowerCase().includes(lowerCaseSearchQuery) ||
      moveType?.toLowerCase().includes(lowerCaseSearchQuery)
    )
  })
}

export const filterFinishers = (
  { fatalities, brutalities, friendship }: FinishersData,
  searchQuery: string
): FinishersData => {
  const lowerCaseSearchQuery = searchQuery.toLowerCase()

  const newFatalities = filterAttacks(fatalities, searchQuery)
  const newBrutalities = filterAttacks(brutalities, searchQuery)
  const { info, moveName, notation } = friendship
  const newFriendship =
    info.toLowerCase().includes(lowerCaseSearchQuery) ||
    moveName.toLowerCase().includes(lowerCaseSearchQuery) ||
    notation.toLowerCase().includes(lowerCaseSearchQuery)
      ? friendship
      : emptyFriendship

  return {
    fatalities: newFatalities,
    brutalities: newBrutalities,
    friendship: newFriendship,
  }
}

export const testFatalBlow = (
  {
    startup,
    active,
    recovery,
    hitAdvantage,
    blockAdvantage,
    flawlessBlockAdvantage,
    moveName,
    notation,
    moveType,
  }: AttackData,
  searchQuery: string
): boolean => {
  const lowerCaseSearchQuery = searchQuery.toLowerCase()

  if (/^-?\d*\.?\d+$/.test(searchQuery)) {
    return (
      Number(startup) === Number(searchQuery) ||
      Number(active) === Number(searchQuery) ||
      Number(recovery) === Number(searchQuery) ||
      Number(hitAdvantage) === Number(searchQuery) ||
      Number(blockAdvantage) === Number(searchQuery) ||
      Number(flawlessBlockAdvantage) === Number(searchQuery)
    )
  }

  return (
    moveName?.toLowerCase().includes(lowerCaseSearchQuery) ||
    notation?.toLowerCase().includes(lowerCaseSearchQuery) ||
    moveType?.toLowerCase().includes(lowerCaseSearchQuery) ||
    false
  )
}
