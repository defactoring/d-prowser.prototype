import { useContext, useEffect, useState } from 'react'
import 'firebase/compat/auth'
import { authContext } from '@contexts'
import { firebaseApp } from '@features/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

/**
 * 認証を利用するためのカスタムフック
 */
export const useAuth = () => {
  const [loading, setLoading] = useState(true)
  const { user, setUser } = useContext(authContext)

  /**
   * ログイン処理
   * @param email
   * @param password
   */
  const signIn = async (email: string, password: string) => {
    setLoading(true)
    return signInWithEmailAndPassword(firebaseApp.auth(), email, password)
  }

  /**
   * ログアウト処理
   */
  const signOut = async () => {
    setLoading(true)
    return firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
  }

  // ユーザーが変更されたら、ユーザー情報を更新する
  useEffect(() => {
    const unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return { user, loading, signIn, signOut }
}
