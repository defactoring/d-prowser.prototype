import React, { useLayoutEffect, useRef, useState } from 'react'
import { appContext, bookmarksContext } from '../../context'
import { NormalContents } from '../NormalContents'
import { EditContents } from '../EditContents'
import { FirestoreStorage } from '../../feature/storage'
import { Bookmark, get } from '../../feature/bookmark'
import SignInScreen from '../SignIn'

// React大元
export const App = () => {
  const [mode, setMode] = useState<'normal' | 'edit'>('normal')
  const storage = new FirestoreStorage()
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const value = useRef({ mode, setMode, storage }).current
  useLayoutEffect(() => {
    get(storage).then(setBookmarks)
  }, [setBookmarks])
  return (
    <SignInScreen>
      <appContext.Provider value={value}>
        <bookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
          {mode === 'normal' ? <NormalContents /> : <EditContents />}
        </bookmarksContext.Provider>
      </appContext.Provider>
    </SignInScreen>
  )
}
