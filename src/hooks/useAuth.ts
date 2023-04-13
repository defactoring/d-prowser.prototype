import { useContext, useEffect } from 'react'
import 'firebase/compat/auth'
import { authContext } from '@contexts'
import { firebaseApp } from '@features/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useAuth = () => {
  const { user, setUser } = useContext(authContext)
  const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseApp.auth(), email, password).then(({ user }) => {
      setUser(user)
      return user
    })
  }

  const signOut = async () => {
    return firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
  }

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return { user, signIn, signOut }
}
