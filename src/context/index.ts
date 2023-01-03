import { createContext } from 'react'
import { BookmarkStorage, FirestoreStorage } from '../feature/storage'
import { Bookmark } from '../feature/bookmark'

type AppContext = {
  mode: 'normal' | 'edit'
  setMode: (mode: 'normal' | 'edit') => void
  storage: BookmarkStorage
}

export const appContext = createContext<AppContext>({
  mode: 'normal',
  setMode: () => void 0,
  storage: new FirestoreStorage(),
})

type BookmarksContext = {
  bookmarks: Bookmark[]
  setBookmarks: (bookmarks: Bookmark[]) => void
}

export const bookmarksContext = createContext<BookmarksContext>({
  bookmarks: [],
  setBookmarks: () => void 0,
})
