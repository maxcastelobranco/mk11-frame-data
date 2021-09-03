import React, { useEffect } from 'react'

interface UseNavigateAttackTypesDTO {
  paginate(newDirection: number): void
}

export const useNavigateAttackTypes = ({
  paginate,
}: UseNavigateAttackTypesDTO) => {
  const handleUserKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft': {
        paginate(-1)
        break
      }
      case 'ArrowRight': {
        paginate(1)
        break
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleUserKeyPress)

      return () => {
        window.removeEventListener('keydown', handleUserKeyPress)
      }
    }
  })
}
