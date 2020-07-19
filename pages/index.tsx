import Link from 'next/link'
import FirebaseAuth from '@/components/FirebaseAuth'
import { useUser } from '@/hooks/useUser'
// import { useState, useEffect } from 'react'
import firebase from '@/lib/firebase'

export default function Home() {
  const { user, logout } = useUser()

  // const [user, setUser] = useState<unknown | null>(null)
  // useEffect(() => {
  //   return firebase.auth().onAuthStateChanged((user) => {
  //     console.log(`effect`, user)
  //     setUser(user)
  //   })
  // }, [])

  const handleSave = () => {
    const firestore = firebase.firestore()
    firestore.collection('test').add({
      hoge: 'hoge'
    })
    console.log('log')
  }

  return (
    <main className="text-red-500">
      <div>hellow, Randomness machine!!!!</div>
      <Link href="/gacha-list">
        <a>Gacha List</a>
      </Link>
      {!user && <FirebaseAuth />}
      <div>{JSON.stringify(user)}</div>
      <button onClick={() => logout()}>logout</button>
      <button onClick={handleSave}>save</button>
    </main>
  )
}
