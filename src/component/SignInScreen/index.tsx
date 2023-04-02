// Import FirebaseAuth and firebase.
import React, { useContext, useEffect } from 'react'
import { FirebaseAuth } from './FirebaseAuth'
import 'firebase/compat/auth'
import { firebaseApp } from '../../feature/firebase'
import { EmailAuthProvider } from 'firebase/auth'
import { authContext } from '../../context'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
}
/**
 * サインインスクリーンタグ
 * ログイン画面を表示
 */
const SignInScreen: React.FC = () => {
  const { setUser } = useContext(authContext)

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return (
    <div>
      <h1>D-Prowser</h1>
      <p>ログインフォーム</p>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
    </div>
  )
}

export default SignInScreen
