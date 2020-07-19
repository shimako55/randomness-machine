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
  title: string
  imageUrl: string
  count: number
}

export const useGacha = () => {
  const { user: authUser } = useUser()
  const [gachas, setGachas] = useState<Gacha[]>([])
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

  const edit = (id: number, gacha: Gacha) => {
    setGachas((gachaList) => {
      const newGachaList = gachaList.map((v, i) => (i === id ? gacha : v))
      usersCollection.doc(authUser!.id).set({
        gachas: newGachaList
      })
      return newGachaList
    })
  }

  return {
    gachas,
    add,
    edit
  }
}
