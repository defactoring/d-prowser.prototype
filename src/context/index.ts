import { createContext, Dispatch, SetStateAction } from 'react'
import { BookmarkStorage } from '../feature/storage'
import { Bookmark } from '../feature/bookmark'
import firebase from 'firebase/compat'

type AuthContext = {
  user: firebase.User | null
  setUser: Dispatch<SetStateAction<firebase.User | null>>
}

export const authContext = createContext<AuthContext>({
  user: null,
  setUser: () => void 0,
})

type AppContext = {
  user: firebase.User
  mode: 'normal' | 'edit'
  setMode: (mode: 'normal' | 'edit') => void
  storage: BookmarkStorage
}

export const appContext = createContext<AppContext>({
  user: {} as firebase.User,
  mode: 'normal',
  setMode: () => void 0,
  storage: {} as BookmarkStorage,
})

type BookmarksContext = {
  bookmarks: Bookmark[]
  setBookmarks: (bookmarks: Bookmark[]) => void
}

export const bookmarksContext = createContext<BookmarksContext>({
  bookmarks: [],
  setBookmarks: () => void 0,
})
