import { useState, useEffect } from 'react'
import firebase from '@/lib/firebase'
import { useUser } from './useUser'

let firestore
let usersCollection: any

if (typeof window !== 'undefined') {
  firestore = firebase.firestore()
  usersCollection = firestore.collection('users')
}

export type Gacha = {
  id: string
  title: string
  imageUrl: string
  count: number
}

export const useGacha = () => {
  const { user: authUser } = useUser()
  const [gachas, setGachas] = useState<Gacha[]>([])
  const [gachaAchieves, setGachaAchives] = useState<Gacha[]>([])
  const [determinedGacha, setDeterminedGacha] = useState<Gacha | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!authUser) {
        return
      }
      const user = (await usersCollection.doc(authUser.id).get()).data()
      if (user) {
        setGachas(user.gachas)
      }
    })()
  }, [authUser])

  const add = (gacha: Gacha) => {
    setGachas((gachaList) => {
      const newGachaList = [...gachaList, gacha]
      usersCollection.doc(authUser!.id).set({
        gachas: newGachaList
      })
      return newGachaList
    })
  }

  const edit = (gacha: Gacha) => {
    setGachas((gachaList) => {
      const newGachaList = gachaList.map((v, i) =>
        v.id === gacha.id ? gacha : v
      )
      usersCollection.doc(authUser!.id).set({
        gachas: newGachaList
      })
      return newGachaList
    })
  }

  const open = () => {
    const random = (s = 1, e = 10) => Math.floor(Math.random() * e) + s
    // TODO: ガチャの個数を考慮したランダム抽選を実装する必要がある
    const ids = gachas.flatMap((i) =>
      Array.from({ length: i.count }, () => i.id)
    )
    const determinedId = ids[random(0, ids.length)]
    const determinedGacha = gachas.find((i) => determinedId === i.id)
    if (determinedGacha == null) {
      return
    }

    setDeterminedGacha(determinedGacha)

    determinedGacha.count--

    if (determinedGacha.count === 0) {
      const achrive = determinedGacha
      setGachaAchives((list) => [...list, achrive])
      const survive = gachas.slice(1, gachas.length + 1)
      setGachas(survive)
    }
  }

  return {
    gachas,
    add,
    edit,
    open,
    determinedGacha
  }
}
