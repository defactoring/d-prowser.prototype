import { useCallback, useContext } from 'react'
import { bookmarksContext } from '../context'
import { useStorage } from './useStorage'
import { get } from '../feature/bookmark'

export const useBookmarks = () => {
  const { storage } = useStorage()
  const { bookmarks, setBookmarks } = useContext(bookmarksContext)
  const filter = useCallback(
    (params?: { q: string }) => {
      const queries = new URLSearchParams(params ?? window.location.search)
      window.history.pushState({}, document.title, `/?${queries}`)
      return get(storage, { q: queries.get('q') }).then(setBookmarks)
    },
    [storage, setBookmarks],
  )
  return { bookmarks, filter }
}
