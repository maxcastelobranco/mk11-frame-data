import React from 'react'
import { motion } from 'framer-motion'
import AnimatedLink from '../../../AnimatedLink'

interface MenuItemProps {
  label: string
  href: string
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatedLink
        href={href}
        label={label}
        yellow={label === 'MORTAL KOMBAT 11'}
        fontSize=".85rem"
      />
    </motion.li>
  )
}

export default MenuItem
