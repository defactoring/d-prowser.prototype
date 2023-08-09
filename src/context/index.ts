import { createContext, Dispatch, SetStateAction } from 'react'
import { BookmarkStorage } from '@features/storage'
import { Bookmark } from '@features/bookmark'
import { User } from '@domain/user'

type AppContext = {
  user: User
  storage: BookmarkStorage
}

/**
 * ブックマーク配列を保持するコンテクスト
 */
export const appContext = createContext<AppContext>({} as AppContext)
type BookmarksContext = {
  bookmarks: Bookmark[]
  setBookmarks: Dispatch<SetStateAction<Bookmark[]>>
}

/**
 * ブックマークコンテクストオブジェクトを作成
 */
export const bookmarksContext = createContext<BookmarksContext>({} as BookmarksContext)
