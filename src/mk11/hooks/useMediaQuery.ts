import { useState, useEffect } from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      const listener = () => {
        setMatches(media.matches)
      }
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    }
  }, [matches, query])

  if (
    typeof window === 'undefined' ||
    typeof window?.matchMedia === 'undefined'
  )
    return false

  return matches
}
