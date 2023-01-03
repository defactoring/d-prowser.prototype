// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from './FirebaseAuth'
import 'firebase/compat/auth'
import { firebase } from '../../feature/firebase'
import { EmailAuthProvider } from 'firebase/auth'

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

type Props = {
  children: React.ReactNode
}

const SignInScreen: React.FC<Props> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false) // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  }
  return (
    <>
      {children}
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </>
  )
}

export default SignInScreen
