import { atom } from 'recoil'

export const isServer = typeof window === 'undefined'

export const localStorageAtom = <T>(config: any) => {
  let item
  if (!isServer) {
    item = window.localStorage.getItem(config.key)
  }

  return atom<T>({
    key: config.key,
    default: item ? JSON.parse(item) : config.default
  })
}
