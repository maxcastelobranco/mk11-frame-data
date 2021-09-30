import { AttackData } from '../data/types'

export const customSortFunction = (
  array: AttackData[],
  sortFunction: (a: AttackData, b: AttackData) => number
) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (sortFunction(array[j], array[j + 1]) > 0) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

export const sortByMoveName = (a: AttackData, b: AttackData) => {
  return !a.name || !b.name ? 0 : Number(a.name > b.name)
}

const sortByNotation = (a: AttackData, b: AttackData) => {
  if (!a.notation || !b.notation) return 0

  const aNumbers = a.notation.replace(/\D+/g, '')
  const bNumbers = b.notation.replace(/\D+/g, '')

  return Number(
    aNumbers[0] === bNumbers[0]
      ? a.notation.localeCompare(b.notation, undefined, { numeric: true })
      : aNumbers > bNumbers
  )
}

export const sortByMoveType = (a: AttackData, b: AttackData) => {
  return a.moveType && b.moveType
    ? Number(a.moveType > b.moveType)
    : a.moveType && !b.moveType
    ? -1
    : !a.moveType && b.moveType
    ? 1
    : 0
}
export const sortByStartup = (a: AttackData, b: AttackData) => {
  return a.startup && b.startup
    ? Number(Number(a.startup) > Number(b.startup))
    : a.startup && !b.startup
    ? -1
    : !a.startup && b.startup
    ? 1
    : 0
}
export const sortByActive = (a: AttackData, b: AttackData) => {
  return a.active && b.active
    ? Number(Number(a.active) < Number(b.active))
    : a.active && !b.active
    ? -1
    : !a.active && b.active
    ? 1
    : 0
}
export const sortByRecovery = (a: AttackData, b: AttackData) => {
  return a.recovery && b.recovery
    ? Number(Number(a.recovery) > Number(b.recovery))
    : a.recovery && !b.recovery
    ? -1
    : !a.recovery && b.recovery
    ? 1
    : 0
}
export const sortByCancelAdvantage = (a: AttackData, b: AttackData) => {
  return a.cancelAdvantage && b.cancelAdvantage
    ? Number(Number(a.cancelAdvantage) < Number(b.cancelAdvantage))
    : a.cancelAdvantage && !b.cancelAdvantage
    ? -1
    : !a.cancelAdvantage && b.cancelAdvantage
    ? 1
    : 0
}
export const sortByHitAdvantage = (a: AttackData, b: AttackData) => {
  return a.hitAdvantage && b.hitAdvantage
    ? Number(Number(a.hitAdvantage) < Number(b.hitAdvantage))
    : a.hitAdvantage && !b.hitAdvantage
    ? -1
    : !a.hitAdvantage && b.hitAdvantage
    ? 1
    : 0
}
export const sortByBlockAdvantage = (a: AttackData, b: AttackData) => {
  return a.blockAdvantage && b.blockAdvantage
    ? Number(Number(a.blockAdvantage) < Number(b.blockAdvantage))
    : a.blockAdvantage && !b.blockAdvantage
    ? -1
    : !a.blockAdvantage && b.blockAdvantage
    ? 1
    : 0
}

export type SortOptions =
  | 'name'
  | 'notation'
  | 'moveType'
  | 'startup'
  | 'active'
  | 'recovery'
  | 'cancelAdvantage'
  | 'hitAdvantage'
  | 'blockAdvantage'

export const sortMap: Record<
  SortOptions,
  (a: AttackData, b: AttackData) => number
> = {
  name: sortByMoveName,
  notation: sortByNotation,
  moveType: sortByMoveType,
  startup: sortByStartup,
  active: sortByActive,
  recovery: sortByRecovery,
  cancelAdvantage: sortByCancelAdvantage,
  hitAdvantage: sortByHitAdvantage,
  blockAdvantage: sortByBlockAdvantage,
}
