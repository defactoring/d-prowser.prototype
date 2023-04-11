import React, { useLayoutEffect, useRef, useState } from 'react'
import { appContext, bookmarksContext } from '@contexts'
import { NormalContents } from '../../NormalContents'
import { FirestoreStorage } from '@features/storage'
import { Bookmark, get } from '@features/bookmark'
import firebase from 'firebase/compat'

type Props = {
  user: firebase.UserInfo
}

export const App: React.FC<Props> = ({ user }) => {
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
