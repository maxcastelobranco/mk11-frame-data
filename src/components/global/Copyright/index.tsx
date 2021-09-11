import React from 'react'
import styles from './styles.module.scss'

const Copyright: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.container} {...props}>
      <small>
        &copy; Copyright {currentYear}, Max Lourenço Castelo Branco. All other
        trademarks and copyrights are the property of their respective owners.
        All rights reserved. Mortal Kombat®, characters, images and font are
        trademarks of and © NetherRealm Studios, a subsidiary of Warner Bros.
        Interactive Entertainment Inc. This site is unaffiliated.
      </small>
    </footer>
  )
}

export default Copyright
