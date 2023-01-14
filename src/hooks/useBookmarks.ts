import { useContext } from 'react'
import { bookmarksContext } from '../context'

export const useBookmarks = () => {
  const { bookmarks, setBookmarks } = useContext(bookmarksContext)
  return { bookmarks, setBookmarks }
}
