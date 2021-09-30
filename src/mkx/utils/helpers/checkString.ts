export const checkString = (str: string | undefined, test: string) => {
  if (!str) return false

  const pattern = new RegExp(test.split('').join('.*'))

  return str.match(pattern)
}
