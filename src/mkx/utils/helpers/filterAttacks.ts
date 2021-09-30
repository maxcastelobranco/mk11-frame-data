import { AttackData } from '../data/types'

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
      }) => {
        return (
          Number(startup) === Number(searchQuery) ||
          Number(active) === Number(searchQuery) ||
          Number(recovery) === Number(searchQuery) ||
          Number(cancelAdvantage) === Number(searchQuery) ||
          Number(hitAdvantage) === Number(searchQuery) ||
          Number(blockAdvantage) === Number(searchQuery) ||
          notation?.includes(searchQuery)
        )
      }
    )
  }

  return attacks.filter(({ name, notation, moveType, info }) => {
    return (
      name?.toLowerCase().includes(lowerCaseSearchQuery) ||
      notation?.toLowerCase().includes(lowerCaseSearchQuery) ||
      moveType?.toLowerCase().includes(lowerCaseSearchQuery) ||
      info?.toLowerCase().includes(lowerCaseSearchQuery)
    )
  })
}
