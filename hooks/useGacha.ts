import { useRecoilState, atom } from 'recoil'
import { useCallback } from 'react'

export type Gacha = {
  title: string
  imageUrl: string
  count: number
}

const imageUrlState = atom({
  key: 'imageUrlState',
  default: ''
})

const gachaState = atom<Gacha[]>({
  key: 'gachaState',
  default: []
})

export const useGacha = () => {
  const [gachas, setGachas] = useRecoilState(gachaState)

  const [imageUrl, setImageUrl] = useRecoilState(imageUrlState)

  const add = useCallback(
    (gacha: Gacha) => {
      setGachas((gachaList) => [...gachaList, gacha])
    },
    [setGachas]
  )
  return {
    gachas,
    add,
    imageUrl,
    setImageUrl
  }
}
