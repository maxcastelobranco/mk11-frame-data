import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { preventImageDrag } from '../../../../../../../../utils/helpers/preventImageDrag'
import { useFilteredFrameDataContext } from '../../../../../../../../context/filteredFrameDataContext'

interface MoveTypeProps {
  moveType: string | undefined
}

const MoveType: React.FC<MoveTypeProps> = ({ moveType }) => {
  const { sortOption } = useFilteredFrameDataContext()
  const isActive = sortOption === 'moveType'

  const className = isActive
    ? [styles.container, styles.activeItem].join(' ')
    : styles.container

  return (
    <div {...{ className }}>
      <p>Move type</p>
      {moveType ? (
        <div>
          <span>{moveType}</span>
          <Image
            src={`/moveTypes/${moveType.toLowerCase()}.png`}
            objectFit="cover"
            width={103.2}
            height={136}
            {...preventImageDrag}
          />
        </div>
      ) : (
        <span>N/A</span>
      )}
    </div>
  )
}

export default MoveType
