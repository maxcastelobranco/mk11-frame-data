import React from 'react'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  CharKeys,
  FrameData,
  RosterFrameData,
} from '../../../mkx/utils/data/types'
import CharacterPage from '../../../mkx/components/character/CharacterPage'
import LoadingPage from '../../../components/global/LoadingPage'
import { characters } from '../../../mkx/utils/data/characters'
import { GetStaticProps } from 'next'
import { AES, enc } from 'crypto-js'
import encryptedFrameData from '../../../mkx/utils/data/encryptedFrameData.json'

export async function getStaticPaths() {
  return {
    paths: characters.map(({ key }) => ({
      params: { id: key },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  { currentCharacterFrameData: FrameData },
  { id: CharKeys }
> = async (context) => {
  if (!context.params || !process.env.ENCRYPTION_KEY) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const ciphertext = encryptedFrameData.ciphertext
  const bytes = AES.decrypt(ciphertext, process.env.ENCRYPTION_KEY)
  const decryptedFrameData: RosterFrameData = JSON.parse(
    bytes.toString(enc.Utf8)
  )

  const currentCharacterFrameData = decryptedFrameData[context.params.id]

  return {
    props: {
      currentCharacterFrameData,
    },
  }
}

const Character: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  currentCharacterFrameData,
}) => {
  const { query } = useRouter()
  const id = query.id as CharKeys

  if (!id) {
    return <LoadingPage />
  }

  return <CharacterPage {...{ id, currentCharacterFrameData }} />
}

export default Character
