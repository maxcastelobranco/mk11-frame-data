import React from 'react'

const ExpandMore: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="#fda90f" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  )
}

export default ExpandMore
