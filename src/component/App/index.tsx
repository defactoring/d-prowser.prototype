import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { appContext, authContext, bookmarksContext } from '../../context'
import { NormalContents } from '../NormalContents'
import { FirestoreStorage } from '../../feature/storage'
import { Bookmark, get } from '../../feature/bookmark'
import SignInScreen from '../SignInScreen'
import firebase from 'firebase/compat'

type Props = {
  user: firebase.User
  defaultValue?: string | null
}
/**
 * 認証機能を提供する
 */
const Authenticated: React.FC<Props> = ({ user, defaultValue }) => {
  const storage = new FirestoreStorage(user)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const value = useRef({ storage, user }).current
  useLayoutEffect(() => {
    get(storage, { q: defaultValue }).then(setBookmarks)
  }, [setBookmarks])
  return (
    <appContext.Provider value={value}>
      <bookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
        <NormalContents defaultValue={defaultValue} />
      </bookmarksContext.Provider>
    </appContext.Provider>
  )
}
/**
 * コンテンツ画面
 * サインインされていない状態はログイン画面
 * サインインされている状態はコンテンツ画面
 */
const Content: React.FC<{ defaultValue?: string | null }> = ({ defaultValue }) => {
  const { user } = useContext(authContext)
  return (
    <>
      {user === null ? <SignInScreen /> : <Authenticated user={user} defaultValue={defaultValue} />}
    </>
  )
}

/**
 * Appコンポーネント
 * React大元
 */
export const App = () => {
  const queries = new URLSearchParams(window.location.search)
  const [user, setUser] = useState<firebase.User | null>(null)
  return (
    <authContext.Provider value={{ user, setUser }}>
      <Content defaultValue={queries.get('q')} />
    </authContext.Provider>
  )
}
