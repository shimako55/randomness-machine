import { atom, useRecoilState } from 'recoil'
import { GifsResult } from '@giphy/js-fetch-api'

export type GifsResultData = GifsResult['data']

export const giphyState = atom<GifsResultData>({
  key: 'giphyState',
  default: []
})

export const useGiphy = () => {
  const [gifs, setGifs] = useRecoilState(giphyState)
  const eventStack: number[] = []

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value

    eventStack.push(1)
    setTimeout(() => {
      eventStack.pop()
      if (eventStack.length === 0) {
        const key = 'V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E'
        const limit = 3
        const offset = 0
        const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}&offset=${offset}`
        fetch(url)
          .then((r) => r.json())
          .then((res: GifsResult) => {
            setGifs([...res.data])
          })
      }
    }, 1000)
  }

  return { gifs, handleChange }
}
