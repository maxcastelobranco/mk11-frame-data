import React from 'react'
import {
  NotationOptions,
  useNotationContext,
} from '../../context/notationContext'
import Select from '../Select'

const options = [
  NotationOptions.default,
  NotationOptions.xbox,
  NotationOptions.playstation,
]

const PlatformSelect: React.FC = () => {
  const { currentNotation, setCurrentNotation } = useNotationContext()

  const onClick = (option: NotationOptions) => {
    setCurrentNotation(option)
  }

  return (
    <Select
      {...{ options, onClick }}
      activeOption={currentNotation}
      title="Platform"
    />
  )
}

export default PlatformSelect
