import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { preventImageDrag } from '../../../../../../../../utils/helpers/preventImageDrag'

interface MoveTypeProps {
  moveType: string | undefined
}

const MoveType: React.FC<MoveTypeProps> = ({ moveType }) => {
  return (
    <div className={styles.container}>
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
