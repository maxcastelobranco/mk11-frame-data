import React from 'react'
import styles from './styles.module.scss'

interface CopyrightProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  light?: boolean
}

const Copyright: React.FC<CopyrightProps> = (props) => {
  const { light } = props
  const currentYear = new Date().getFullYear()
  const classNames = [styles.container]
  light ? classNames.push(styles.light) : classNames.push(styles.yellow)

  return (
    <footer className={classNames.join(' ')} {...props}>
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
