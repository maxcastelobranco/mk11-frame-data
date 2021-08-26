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

export type FinisherTypes = 'Fatalities' | 'Brutalities'

export interface AttackData {
  move: string
  input: string
  type?: string
  damage?: string
  blockDamage?: string
  flawlessBlockDamage?: string
  startup?: string
  active?: string
  recovery?: string
  cancelAdvantage?: string
  hitAdvantage?: string
  blockAdvantage?: string
  flawlessBlockAdvantage?: string
  equip?: string
  info?: string
}

export interface FrameData {
  'Basic Attacks': AttackData[]
  'Jumping Attacks': AttackData[]
  'Hop Attacks': AttackData[]
  'Getup Attacks': AttackData[]
  'Flawless Block Attacks': AttackData[]
  Throws: AttackData[]
  'Roll Escapes': AttackData[]
  'Air Escape': AttackData[]
  'Kombo Attacks': AttackData[]
  'Special moves': AttackData[]
  'Fatal Blow': AttackData | AttackData[]
  Finishers: Record<FinisherTypes, AttackData[]>
}
export type RosterFrameData = Record<CharKeys, FrameData>
