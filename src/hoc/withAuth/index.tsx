import React, { useEffect, useState } from 'react'
import { useAuth } from '@hooks'
import { appContext, bookmarksContext } from '@contexts'
import { FirestoreStorage } from '@features/storage'
import { Bookmark, get } from '@features/bookmark'
import { jsx } from '@emotion/react'
import firebase from 'firebase/compat'
import * as P from '@pages'

const Wrapped: React.FC<{ children: React.ReactNode; user: firebase.UserInfo }> = ({
  children,
  user,
}) => {
  const storage = new FirestoreStorage(user)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  useEffect(() => {
    get(storage).then(setBookmarks)
  }, [setBookmarks])
  return (
    <appContext.Provider value={{ user, storage }}>
      <bookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
        {children}
      </bookmarksContext.Provider>
    </appContext.Provider>
  )
}

export const withAuth = <P extends jsx.JSX.IntrinsicAttributes>(Component: React.FC<P>) => {
  const WithAuth = (props: P) => {
    const { user } = useAuth()
    if (user === null) return <P.SignIn />
    return (
      <Wrapped user={user}>
        <Component {...props} />
      </Wrapped>
    )
  }
  WithAuth.displayName = `withAuth(${Component.displayName || Component.name})`
  return WithAuth
}
