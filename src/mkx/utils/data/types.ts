export type CharKeys =
  | 'alien'
  | 'bo-rai-cho'
  | 'cassie-cage'
  | 'd-vorah'
  | 'ermac'
  | 'erron-black'
  | 'ferra-torr'
  | 'goro'
  | 'jacqui-briggs'
  | 'jason-voorhees'
  | 'jax'
  | 'johnny-cage'
  | 'kano'
  | 'kenshi'
  | 'kitana'
  | 'kotal-kahn'
  | 'kung-jin'
  | 'kung-lao'
  | 'leatherface'
  | 'liu-kang'
  | 'mileena'
  | 'predator'
  | 'quan-chi'
  | 'raiden'
  | 'reptile'
  | 'scorpion'
  | 'shinnok'
  | 'sonya-blade'
  | 'sub-zero'
  | 'takeda'
  | 'tanya'
  | 'tremor'
  | 'triborg'

export type CharNames =
  | 'alien'
  | "bo'rai'cho"
  | 'cassie cage'
  | "d'vorah"
  | 'ermac'
  | 'erron black'
  | 'ferra / torr'
  | 'goro'
  | 'jacqui briggs'
  | 'jason voorhees'
  | 'jax'
  | 'johnny cage'
  | 'kano'
  | 'kenshi'
  | 'kitana'
  | 'kotal kahn'
  | 'kung jin'
  | 'kung lao'
  | 'leatherface'
  | 'liu kang'
  | 'mileena'
  | 'predator'
  | 'quan chi'
  | 'raiden'
  | 'reptile'
  | 'scorpion'
  | 'shinnok'
  | 'sonya blade'
  | 'sub-zero'
  | 'takeda'
  | 'tanya'
  | 'tremor'
  | 'triborg'

export type AvailableOn = 'kombat pack 2' | 'kombat pack 1' | 'base game'

export interface CharacterData {
  key: CharKeys
  name: CharNames
  src: string
  thumbSrc: string
  availableOn: AvailableOn
}

type MoveTypes = 'High' | 'Low' | 'Mid' | 'Overhead' | 'Throw' | 'Unblockable'

interface MoveData {
  key: string
  name?: string
  notation?: string
  startup?: string
  active?: string
  recovery?: string
  blockAdvantage?: string
  hitAdvantage?: string
  cancelAdvantage?: string
  info?: string
  moveType?: MoveTypes
}

export interface AttackData extends MoveData {
  submoves?: MoveData[]
}

export interface FrameData {
  basicAttacks: AttackData[]
  jumpingAttacks: AttackData[]
  throw: AttackData
  komboAttacks: AttackData[]
  specialMoves: AttackData[]
  variations: Record<string, AttackData[]>
}
export type RosterFrameData = Record<CharKeys, FrameData>

export const emptyAttack: AttackData = {
  key: '',
  name: '',
  notation: '',
  moveType: 'Mid',
  info: '',
  startup: '',
  active: '',
  recovery: '',
  cancelAdvantage: '',
  hitAdvantage: '',
  blockAdvantage: '',
}
