import Link from 'next/link'
import FirebaseAuth from '@/components/FirebaseAuth'
import { useUser } from '@/hooks/useUser'
import firebase from '@/lib/firebase'
import tw, { styled } from 'twin.macro'
import { useGacha } from '@/hooks/useGacha'
import GachaCard from '@/components/GachaCard'

export default function Home() {
  const { user, logout } = useUser()

  const { open, gachas, determinedGacha } = useGacha()

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
  }

  return (
    <main tw="text-red-500">
      <div>hellow, Randomness machine!!!!</div>
      <Link href="/gacha-list">
        <a>Gacha List</a>
      </Link>
      {!user && <FirebaseAuth />}
      <div>{JSON.stringify(user)}</div>
      <button onClick={() => logout()}>logout</button>
      <button onClick={handleSave}>save</button>
      {gachas.length > 0 && (
        <button
          onClick={() => open()}
          tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ガチャる
        </button>
      )}
      {determinedGacha && <GachaCard gacha={determinedGacha} />}
    </main>
  )
}
