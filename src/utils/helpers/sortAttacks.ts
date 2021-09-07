import { AttackData } from '../data/types'

export const customSortFunction = (
  array: AttackData[],
  sortFunction: (a: AttackData, b: AttackData) => number
) => {
  const arrayCopy = array.slice()

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (sortFunction(array[j], array[j + 1]) > 0) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return arrayCopy
}

export const sortByMoveName = (a: AttackData, b: AttackData) => {
  return Number(a.moveName > b.moveName)
}

export const sortByNotation = (a: AttackData, b: AttackData) => {
  const reverseString = (str: string) => {
    return str.split('').reverse().join('')
  }
  return Number(reverseString(a.notation) > reverseString(b.notation))
}

export const sortByDamage = (a: AttackData, b: AttackData) => {
  return a.damage && b.damage
    ? Number(Number(a.damage) < Number(b.damage))
    : a.damage && !b.damage
    ? -1
    : !a.damage && b.damage
    ? 1
    : 0
}
export const sortByBlockDamage = (a: AttackData, b: AttackData) => {
  return a.blockDamage && b.blockDamage
    ? Number(Number(a.blockDamage) < Number(b.blockDamage))
    : a.blockDamage && !b.blockDamage
    ? -1
    : !a.blockDamage && b.blockDamage
    ? 1
    : 0
}
export const sortByFlawlessBlockDamage = (a: AttackData, b: AttackData) => {
  return a.flawlessBlockDamage && b.flawlessBlockDamage
    ? Number(Number(a.flawlessBlockDamage) < Number(b.flawlessBlockDamage))
    : a.flawlessBlockDamage && !b.flawlessBlockDamage
    ? -1
    : !a.flawlessBlockDamage && b.flawlessBlockDamage
    ? 1
    : 0
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
export const sortByFlawlessBlockAdvantage = (a: AttackData, b: AttackData) => {
  return a.flawlessBlockAdvantage && b.flawlessBlockAdvantage
    ? Number(
        Number(a.flawlessBlockAdvantage) < Number(b.flawlessBlockAdvantage)
      )
    : a.flawlessBlockAdvantage && !b.flawlessBlockAdvantage
    ? -1
    : !a.flawlessBlockAdvantage && b.flawlessBlockAdvantage
    ? 1
    : 0
}

export type SortOptions =
  | 'moveName'
  | 'notation'
  | 'damage'
  | 'blockDamage'
  | 'flawlessBlockDamage'
  | 'moveType'
  | 'startup'
  | 'active'
  | 'recovery'
  | 'cancelAdvantage'
  | 'hitAdvantage'
  | 'blockAdvantage'
  | 'flawlessBlockAdvantage'

export const sortMap: Record<
  SortOptions,
  (a: AttackData, b: AttackData) => number
> = {
  moveName: sortByMoveName,
  notation: sortByNotation,
  damage: sortByDamage,
  blockDamage: sortByBlockDamage,
  flawlessBlockDamage: sortByFlawlessBlockDamage,
  moveType: sortByMoveType,
  startup: sortByStartup,
  active: sortByActive,
  recovery: sortByRecovery,
  cancelAdvantage: sortByCancelAdvantage,
  hitAdvantage: sortByHitAdvantage,
  blockAdvantage: sortByBlockAdvantage,
  flawlessBlockAdvantage: sortByFlawlessBlockAdvantage,
}
