import React from 'react'

import Select from '../Select'
import { SortOptions } from '../../utils/helpers/sortAttacks'
import { useFilteredFrameDataContext } from '../../context/filteredFrameDataContext'
import { formatOption } from '../../utils/helpers/formatOption'

const options: SortOptions[] = [
  'notation',
  'startup',
  'active',
  'recovery',
  'hitAdvantage',
  'blockAdvantage',
  'cancelAdvantage',
  'moveType',
  'moveName',
  'damage',
  'blockDamage',
  'flawlessBlockDamage',
  'flawlessBlockAdvantage',
]

const SortBySelect: React.FC = () => {
  const { sortOption, sortFrameData } = useFilteredFrameDataContext()

  const onClick = (option: SortOptions) => {
    sortFrameData(option)
  }

  return (
    <Select
      {...{ options, onClick }}
      activeOption={formatOption(sortOption)}
      title="Sort By"
    />
  )
}

export default SortBySelect
