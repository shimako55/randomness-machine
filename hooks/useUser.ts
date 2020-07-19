import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import cookies from 'js-cookie'
import firebase from '@/lib/firebase'

type User = {
  id: string
  email: string
  token: string
}

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        cookies.remove('auth')
        setUser(null)
        router.push('/')
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    const cookie = cookies.get('auth')
    if (!cookie) {
      router.push('/')
      return
    }
    setUser(JSON.parse(cookie))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, logout }
}

export { useUser }
