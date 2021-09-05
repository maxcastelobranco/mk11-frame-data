export const checkString = (str: string | undefined, test: string) => {
  if (!str) {
    return null
  }

  const pattern = test
    .split('')
    .map((x) => {
      return `(?=.*${x})`
    })
    .join('')
  const regex = new RegExp(`${pattern}`, 'g')
  return str.match(regex)
}
