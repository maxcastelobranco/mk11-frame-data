type CharKeys =
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

type CharNames =
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

export const characters: CharacterData[] = [
  {
    key: 'fujin',
    src: '/characters/fujin.png',
    thumbSrc: '/characterThumbs/fujin.png',
    name: 'fujin',
    availableOn: 'aftermath expansion',
  },
  {
    key: 'robocop',
    src: '/characters/robocop.png',
    thumbSrc: '/characterThumbs/robocop.png',
    name: 'robocop',
    availableOn: 'aftermath expansion',
  },
  {
    key: 'sheeva',
    src: '/characters/sheeva.png',
    thumbSrc: '/characterThumbs/sheeva.png',
    name: 'sheeva',
    availableOn: 'aftermath expansion',
  },
  {
    key: 'mileena',
    src: '/characters/mileena.png',
    thumbSrc: '/characterThumbs/mileena.png',
    name: 'mileena',
    availableOn: 'kombat pack 2',
  },
  {
    key: 'rain',
    src: '/characters/rain.png',
    thumbSrc: '/characterThumbs/rain.png',
    name: 'rain',
    availableOn: 'kombat pack 2',
  },
  {
    key: 'rambo',
    src: '/characters/rambo.png',
    thumbSrc: '/characterThumbs/rambo.png',
    name: 'rambo',
    availableOn: 'kombat pack 2',
  },
  {
    key: 'sindel',
    src: '/characters/sindel.png',
    thumbSrc: '/characterThumbs/sindel.png',
    name: 'sindel',
    availableOn: 'kombat pack 1',
  },
  {
    key: 'nightwolf',
    src: '/characters/nightwolf.png',
    thumbSrc: '/characterThumbs/nightwolf.png',
    name: 'nightwolf',
    availableOn: 'kombat pack 1',
  },
  {
    key: 'spawn',
    src: '/characters/spawn.png',
    thumbSrc: '/characterThumbs/spawn.png',
    name: 'spawn',
    availableOn: 'kombat pack 1',
  },
  {
    key: 'johnny-cage',
    src: '/characters/johnny-cage.png',
    thumbSrc: '/characterThumbs/johnny-cage.png',
    name: 'johnny cage',
    availableOn: 'kombat pack 1',
  },
  {
    key: 'terminator',
    src: '/characters/terminator.png',
    thumbSrc: '/characterThumbs/terminator.png',
    name: 'terminator',
    availableOn: 'kombat pack 1',
  },
  {
    key: 'the-joker',
    src: '/characters/the-joker.png',
    thumbSrc: '/characterThumbs/the-joker.png',
    name: 'the joker',
    availableOn: 'kombat pack 1',
  },
  {
    key: 'liu-kang',
    src: '/characters/liu-kang.png',
    thumbSrc: '/characterThumbs/liu-kang.png',
    name: 'liu kang',
    availableOn: 'base game',
  },
  {
    key: 'jacqui-briggs',
    src: '/characters/jacqui-briggs.png',
    thumbSrc: '/characterThumbs/jacqui-briggs.png',
    name: 'jacqui briggs',
    availableOn: 'base game',
  },
  {
    key: 'kitana',
    src: '/characters/kitana.png',
    thumbSrc: '/characterThumbs/kitana.png',
    name: 'kitana',
    availableOn: 'base game',
  },
  {
    key: 'kollector',
    src: '/characters/kollector.png',
    thumbSrc: '/characterThumbs/kollector.png',
    name: 'kollector',
    availableOn: 'base game',
  },
  {
    key: 'noob-saibot',
    src: '/characters/noob-saibot.png',
    thumbSrc: '/characterThumbs/noob-saibot.png',
    name: 'noob saibot',
    availableOn: 'base game',
  },
  {
    key: 'sonya-blade',
    src: '/characters/sonya-blade.png',
    thumbSrc: '/characterThumbs/sonya-blade.png',
    name: 'sonya blade',
    availableOn: 'base game',
  },
  {
    key: 'kotal-kahn',
    src: '/characters/kotal-kahn.png',
    thumbSrc: '/characterThumbs/kotal-kahn.png',
    name: 'kotal kahn',
    availableOn: 'base game',
  },
  {
    key: 'kano',
    src: '/characters/kano.png',
    thumbSrc: '/characterThumbs/kano.png',
    name: 'kano',
    availableOn: 'base game',
  },
  {
    key: 'jax-briggs',
    src: '/characters/jax-briggs.png',
    thumbSrc: '/characterThumbs/jax-briggs.png',
    name: 'jax briggs',
    availableOn: 'base game',
  },
  {
    key: 'shao-kahn',
    src: '/characters/shao-kahn.png',
    thumbSrc: '/characterThumbs/shao-kahn.png',
    name: 'shao kahn',
    availableOn: 'base game',
  },
  {
    key: 'baraka',
    src: '/characters/baraka.png',
    thumbSrc: '/characterThumbs/baraka.png',
    name: 'baraka',
    availableOn: 'base game',
  },
  {
    key: 'cetrion',
    src: '/characters/cetrion.png',
    thumbSrc: '/characterThumbs/cetrion.png',
    name: 'cetrion',
    availableOn: 'base game',
  },
  {
    key: 'sub-zero',
    src: '/characters/sub-zero.png',
    thumbSrc: '/characterThumbs/sub-zero.png',
    name: 'sub-zero',
    availableOn: 'base game',
  },
  {
    key: 'kabal',
    src: '/characters/kabal.png',
    thumbSrc: '/characterThumbs/kabal.png',
    name: 'kabal',
    availableOn: 'base game',
  },
  {
    key: 'jade',
    src: '/characters/jade.png',
    thumbSrc: '/characterThumbs/jade.png',
    name: 'jade',
    availableOn: 'base game',
  },
  {
    key: 'shang-tsung',
    src: '/characters/shang-tsung.png',
    thumbSrc: '/characterThumbs/shang-tsung.png',
    name: 'shang tsung',
    availableOn: 'base game',
  },
  {
    key: 'skarlet',
    src: '/characters/skarlet.png',
    thumbSrc: '/characterThumbs/skarlet.png',
    name: 'skarlet',
    availableOn: 'base game',
  },
  {
    key: 'cassie-cage',
    src: '/characters/cassie-cage.png',
    thumbSrc: '/characterThumbs/cassie-cage.png',
    name: 'cassie cage',
    availableOn: 'base game',
  },
  {
    key: 'geras',
    src: '/characters/geras.png',
    thumbSrc: '/characterThumbs/geras.png',
    name: 'geras',
    availableOn: 'base game',
  },
  {
    key: 'd-vorah',
    src: '/characters/d-vorah.png',
    thumbSrc: '/characterThumbs/d-vorah.png',
    name: "d'vorah",
    availableOn: 'base game',
  },
  {
    key: 'raiden',
    src: '/characters/raiden.png',
    thumbSrc: '/characterThumbs/raiden.png',
    name: 'raiden',
    availableOn: 'base game',
  },
  {
    key: 'frost',
    src: '/characters/frost.png',
    thumbSrc: '/characterThumbs/frost.png',
    name: 'frost',
    availableOn: 'base game',
  },
  {
    key: 'scorpion',
    src: '/characters/scorpion.png',
    thumbSrc: '/characterThumbs/scorpion.png',
    name: 'scorpion',
    availableOn: 'base game',
  },
  {
    key: 'kung-lao',
    src: '/characters/kung-lao.png',
    thumbSrc: '/characterThumbs/kung-lao.png',
    name: 'kung lao',
    availableOn: 'base game',
  },
  {
    key: 'erron-black',
    src: '/characters/erron-black.png',
    thumbSrc: '/characterThumbs/erron-black.png',
    name: 'erron black',
    availableOn: 'base game',
  },
]
