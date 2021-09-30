import React, { createContext, useContext, useState } from 'react'

export enum NotationOptions {
  default = 'default',
  playstation = 'playstation',
  xbox = 'xbox',
}

interface NotationContextData {
  currentNotation: NotationOptions
  setCurrentNotation: React.Dispatch<React.SetStateAction<NotationOptions>>
}

const NotationContext = createContext({} as NotationContextData)

const Mk11NotationProvider: React.FC = ({ children }) => {
  const [currentNotation, setCurrentNotation] = useState<NotationOptions>(
    NotationOptions.playstation
  )

  return (
    <NotationContext.Provider value={{ currentNotation, setCurrentNotation }}>
      {children}
    </NotationContext.Provider>
  )
}

export const useNotationContext = () => {
  return useContext(NotationContext)
}

export default Mk11NotationProvider
