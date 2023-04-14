import React, { useEffect, useState } from 'react'
import { useAuth } from '@hooks'
import { appContext, bookmarksContext } from '@contexts'
import { FirestoreStorage } from '@features/storage'
import { Bookmark, get } from '@features/bookmark'
import { jsx } from '@emotion/react'
import firebase from 'firebase/compat'
import * as P from '@pages'

/**
 * 認証されたユーザーのみアクセス可能なページをラップする
 * @param children
 * @param user
 * @constructor
 */
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

/**
 * 認証が必要なページに付与する
 * もし認証されていない場合はサインインページを表示する
 * @param Component
 */
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
