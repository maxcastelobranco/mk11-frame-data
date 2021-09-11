import React from 'react'
import styles from './styles.module.scss'
import ReactLoading from 'react-loading'

const SIZE = 100

const LoadingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ReactLoading type="bars" width={SIZE} height={SIZE} color="#f8f9fa" />
    </div>
  )
}

export default LoadingPage
