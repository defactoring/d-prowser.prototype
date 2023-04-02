import { useContext } from 'react'
import { bookmarksContext } from '../context'

/**
 * ブックマーク配列とブックマーク配列設定関数を提供
 */
export const useBookmarks = () => {
  const { bookmarks, setBookmarks } = useContext(bookmarksContext)
  return { bookmarks, setBookmarks }
}
