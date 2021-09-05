import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { CharKeys } from '../../utils/data/types'
import CharacterPage from '../../components/pages/character/CharacterPage'

const Character: NextPage = () => {
  const { query } = useRouter()
  const id = query.id as CharKeys

  if (!id) {
    return <h1>...Loading</h1>
  }

  return <CharacterPage {...{ id }} />
}

export default Character
