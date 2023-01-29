import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { appContext, authContext, bookmarksContext } from '../../context'
import { NormalContents } from '../NormalContents'
import { EditContents } from '../EditContents'
import { FirestoreStorage } from '../../feature/storage'
import { Bookmark, get } from '../../feature/bookmark'
import SignInScreen from '../SignInScreen'
import firebase from 'firebase/compat'

type Props = {
  user: firebase.User
}
/**
 * ログイン機能
 * @param param0 
 * @returns 
 */
const Authenticated: React.FC<Props> = ({ user }) => {
  const [mode, setMode] = useState<'normal' | 'edit'>('normal')
  const storage = new FirestoreStorage(user)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const value = useRef({ mode, setMode, storage, user }).current
  useLayoutEffect(() => {
    get(storage).then(setBookmarks)
  }, [setBookmarks])
  return (
    <appContext.Provider value={value}>
      <bookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
        {mode === 'normal' ? <NormalContents /> : <EditContents />}
      </bookmarksContext.Provider>
    </appContext.Provider>
  )
}
/**
 * 
 * @returns 
 */
const Content: React.FC = () => {
  const { user } = useContext(authContext)
  return <>{user === null ? <SignInScreen /> : <Authenticated user={user} />}</>
}

/**
 * React大元
 * @returns 
 */
export const App = () => {
  const [user, setUser] = useState<firebase.User | null>(null)
  return (
    <authContext.Provider value={{ user, setUser }}>
      <Content />
    </authContext.Provider>
  )
}
