import { useContext, useEffect } from 'react'
import 'firebase/compat/auth'
import { authContext } from '@contexts'
import { firebaseApp } from '@features/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

/**
 * 認証を利用するためのカスタムフック
 */
export const useAuth = () => {
  const { user, setUser } = useContext(authContext)
  /**
   * ログイン処理
   * @param email
   * @param password
   */
  const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseApp.auth(), email, password).then(({ user }) => {
      setUser(user)
      return user
    })
  }

  /**
   * ログアウト処理
   */
  const signOut = async () => {
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
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return { user, signIn, signOut }
}
