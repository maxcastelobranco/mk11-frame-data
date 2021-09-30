import { motion } from 'framer-motion'
import React from 'react'
import MenuItem from '../MenuItem'

const items = [
  {
    label: 'MORTAL KOMBAT 11',
    href: '/mk11',
  },
  {
    label: 'MORTAL KOMBAT X',
    href: '/mkx',
  },
]

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

interface NavigationProps {
  isOpen: boolean
}

const Navigation: React.FC<NavigationProps> = ({ isOpen }) => {
  return (
    <motion.ul
      variants={variants}
      style={{ pointerEvents: isOpen ? 'initial' : 'none' }}
    >
      {items.map(({ label, href }) => (
        <MenuItem {...{ label, href }} key={label} />
      ))}
    </motion.ul>
  )
}

export default Navigation
