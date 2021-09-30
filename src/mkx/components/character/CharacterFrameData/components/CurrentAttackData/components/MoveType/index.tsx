import React from 'react'
import styles from './styles.module.scss'
import { useFilteredFrameDataContext } from '../../../../../../../context/filteredFrameDataContext'

interface MoveTypeProps {
  moveType: string | undefined
}

const moveTypeMap: Record<string, string> = {
  M: 'Mid',
  H: 'High',
  L: 'Low',
  OH: 'Overhead',
  UB: 'Unblockable',
}

const MoveType: React.FC<MoveTypeProps> = ({ moveType }) => {
  const { sortOption, sortFrameData } = useFilteredFrameDataContext()
  const isActive = sortOption === 'moveType'

  const className = isActive
    ? [styles.container, styles.activeItem].join(' ')
    : styles.container

  const formatMoveType = (moveType: string | undefined) => {
    if (!moveType) return 'N/A'
    if (!moveType.includes(',')) return moveType

    const finalMoveType: string[] = []
    const splitMoveType = moveType.replaceAll(' ', '').split(',')
    console.log(moveType)
    console.log(splitMoveType)

    splitMoveType.forEach((char) => {
      if (moveTypeMap[char]) {
        finalMoveType.push(moveTypeMap[char])
      } else {
        finalMoveType.push(char)
      }
    })

    return finalMoveType.join(', ')
  }

  return (
    <div
      {...{ className }}
      onClick={() => sortFrameData('moveType')}
      role="button"
      tabIndex={0}
    >
      <p>Move type</p>
      <span>{formatMoveType(moveType)}</span>
    </div>
  )
}

export default MoveType
