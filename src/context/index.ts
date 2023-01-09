import { createContext, Dispatch, SetStateAction } from 'react'
import { BookmarkStorage } from '../feature/storage'
import { Bookmark } from '../feature/bookmark'
import firebase from 'firebase/compat'

type AuthContext = {
  user: firebase.User | null
  setUser: Dispatch<SetStateAction<firebase.User | null>>
}

export const authContext = createContext<AuthContext>({} as AuthContext)

type AppContext = {
  user: firebase.User
  mode: 'normal' | 'edit'
  setMode: (mode: 'normal' | 'edit') => void
  storage: BookmarkStorage
}

export const appContext = createContext<AppContext>({} as AppContext)

type BookmarksContext = {
  bookmarks: Bookmark[]
  setBookmarks: Dispatch<SetStateAction<Bookmark[]>>
}

export const bookmarksContext = createContext<BookmarksContext>({} as BookmarksContext)
