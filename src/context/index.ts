import { createContext, Dispatch, SetStateAction } from 'react'
import { BookmarkStorage } from '../feature/storage'
import { Bookmark } from '../feature/bookmark'
import firebase from 'firebase/compat'

/**
 * ユーザーを保持するコンテクストのType定義
 */
type AuthContext = {
  user: firebase.UserInfo | null
  setUser: Dispatch<SetStateAction<firebase.UserInfo | null>>
}

/**
 * ユーザーとモードを保持するコンテクスト
 */
export const authContext = createContext<AuthContext>({} as AuthContext)

type AppContext = {
  user: firebase.UserInfo
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
