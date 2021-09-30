export const formatOption = (option: string) =>
  option
    .replace('flawlessBlock', 'f/b')
    .replace('Advantage', 'Adv')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
