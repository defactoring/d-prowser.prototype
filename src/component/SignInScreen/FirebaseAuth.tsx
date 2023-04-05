import React, { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebaseui'
import * as types from '@firebase/auth-types'

type Props = {
  uiConfig: auth.Config
  firebaseAuth: types.FirebaseAuth
  className?: string
}

/**
 * React wrapper for the FirebaseUI Auth widget.
 */
export const FirebaseAuth: React.FC<Props> = (props) => {
  const { uiConfig, firebaseAuth, className } = props

  const [userSignedIn, setUserSignedIn] = useState(false)

  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Get or Create a firebaseUI instance.
    // const firebaseUiWidget = auth.AuthUI.getInstance() || new auth.AuthUI(firebaseAuth)

    if (uiConfig.signInFlow === 'popup') {
      // firebaseUiWidget.reset()
    }

    // We track the auth state to reset firebaseUi if the user signs out.
    const unregisterAuthObserver = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user && userSignedIn) {
        // firebaseUiWidget.reset()
      }
      setUserSignedIn(!!user)
    })

    // Render the firebaseUi Widget.
    // if (elementRef.current !== null) {
    //   firebaseUiWidget.start(elementRef.current, uiConfig)
    // }

    return () => {
      unregisterAuthObserver()
      // firebaseUiWidget.reset()
    }
  }, [uiConfig])

  // if (auth !== null) {
  //   // Import the css only on the client.
  //   require('firebaseui/dist/firebaseui.css')
  // }

  return <div className={className} ref={elementRef} />
}
