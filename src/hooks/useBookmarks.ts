import { useCallback, useContext } from 'react'
import { bookmarksContext } from '@contexts'
import { useStorage } from './useStorage'
import { get } from '@features/bookmark'

export const useBookmarks = () => {
  const { storage } = useStorage()
  const { bookmarks, setBookmarks } = useContext(bookmarksContext)
  const filter = useCallback(
    (params?: { q: string }) => {
      const queries = new URLSearchParams(params ?? {})
      return get(storage, { q: queries.get('q') }).then(setBookmarks)
    },
    [storage, setBookmarks],
  )
  return { bookmarks, filter }
}
