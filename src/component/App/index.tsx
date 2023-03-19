import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { appContext, authContext, bookmarksContext } from '../../context'
import { NormalContents } from '../NormalContents'
import { FirestoreStorage } from '../../feature/storage'
import { Bookmark, get } from '../../feature/bookmark'
import SignInScreen from '../SignInScreen'
import firebase from 'firebase/compat'

type Props = {
  user: firebase.User
}
/**
 * 認証機能を提供する
 */
const Authenticated: React.FC<Props> = ({ user }) => {
  const storage = new FirestoreStorage(user)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const value = useRef({ storage, user }).current
  useLayoutEffect(() => {
    get(storage).then(setBookmarks)
  }, [setBookmarks])
  return (
    <appContext.Provider value={value}>
      <bookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
        <NormalContents />
      </bookmarksContext.Provider>
    </appContext.Provider>
  )
}
/**
 * コンテンツ画面
 * サインインされていない状態はログイン画面
 * サインインされている状態はコンテンツ画面
 */
const Content: React.FC = () => {
  const { user } = useContext(authContext)
  return <>{user === null ? <SignInScreen /> : <Authenticated user={user} />}</>
}

/**
 * Appコンポーネント
 * React大元
 */
export const App = () => {
  const [user, setUser] = useState<firebase.User | null>(null)
  return (
    <authContext.Provider value={{ user, setUser }}>
      <Content />
    </authContext.Provider>
  )
}
