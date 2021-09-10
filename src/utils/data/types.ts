export type CharKeys =
  | 'rambo'
  | 'rain'
  | 'mileena'
  | 'robocop'
  | 'sheeva'
  | 'fujin'
  | 'spawn'
  | 'the-joker'
  | 'jade'
  | 'erron-black'
  | 'kabal'
  | 'kung-lao'
  | 'sub-zero'
  | 'scorpion'
  | 'cetrion'
  | 'frost'
  | 'baraka'
  | 'raiden'
  | 'shao-kahn'
  | 'd-vorah'
  | 'jax-briggs'
  | 'geras'
  | 'kano'
  | 'terminator'
  | 'nightwolf'
  | 'cassie-cage'
  | 'kotal-kahn'
  | 'skarlet'
  | 'sonya-blade'
  | 'shang-tsung'
  | 'johnny-cage'
  | 'noob-saibot'
  | 'kollector'
  | 'kitana'
  | 'jacqui-briggs'
  | 'liu-kang'
  | 'sindel'

export type CharNames =
  | 'rambo'
  | 'rain'
  | 'mileena'
  | 'robocop'
  | 'sheeva'
  | 'fujin'
  | 'spawn'
  | 'the joker'
  | 'jade'
  | 'erron black'
  | 'kabal'
  | 'kung lao'
  | 'sub-zero'
  | 'scorpion'
  | 'cetrion'
  | 'frost'
  | 'baraka'
  | 'raiden'
  | 'shao kahn'
  | "d'vorah"
  | 'jax briggs'
  | 'geras'
  | 'kano'
  | 'terminator'
  | 'nightwolf'
  | 'cassie cage'
  | 'kotal kahn'
  | 'skarlet'
  | 'sonya blade'
  | 'shang tsung'
  | 'johnny cage'
  | 'noob saibot'
  | 'kollector'
  | 'kitana'
  | 'jacqui briggs'
  | 'liu kang'
  | 'sindel'

export type AvailableOn =
  | 'kombat pack 2'
  | 'kombat pack 1'
  | 'aftermath expansion'
  | 'base game'

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
  moveName: string
  notation: string
  subcategory?: string
  damage?: string
  blockDamage?: string
  flawlessBlockDamage?: string
  moveType?: MoveTypes
  property1?: string
  property2?: string
  info?: string
  startup?: string
  active?: string
  recovery?: string
  cancelAdvantage?: string
  hitAdvantage?: string
  blockAdvantage?: string
  flawlessBlockAdvantage?: string
}

export interface AttackData extends MoveData {
  submoves?: MoveData[]
}

interface FinisherData {
  moveName: string
  notation: string
  key: string
}

interface FriendshipData extends FinisherData {
  info: string
}

export interface FinishersData {
  fatalities: FinisherData[]
  brutalities: FinisherData[]
  friendship: FriendshipData
}

export interface FrameData {
  basicAttacks: AttackData[]
  jumpingAttacks: AttackData[]
  hopAttacks: AttackData[]
  getupAttacks: AttackData[]
  flawlessBlockAttacks: AttackData[]
  throws: AttackData[]
  rollEscapes: AttackData[]
  airEscape: AttackData[]
  komboAttacks: AttackData[]
  specialMoves: AttackData[]
  abilities: AttackData[]
  finishers: FinishersData
  fatalBlow: AttackData
}
// export type RosterFrameData = Record<CharKeys, FrameData>

export const emptyAttack: AttackData = {
  key: '',
  moveName: '',
  notation: '',
  subcategory: '',
  damage: '',
  blockDamage: '',
  flawlessBlockDamage: '',
  moveType: 'Mid',
  property1: '',
  property2: '',
  info: '',
  startup: '',
  active: '',
  recovery: '',
  cancelAdvantage: '',
  hitAdvantage: '',
  blockAdvantage: '',
  flawlessBlockAdvantage: '',
}

export const emptyFriendship: FriendshipData = {
  moveName: '',
  notation: '',
  info: '',
  key: '',
}
