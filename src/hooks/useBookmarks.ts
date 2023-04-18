import { useCallback, useContext } from 'react'
import { bookmarksContext } from '@contexts'
import { useStorage } from './useStorage'
import { get } from '@features/bookmark'
import { BookmarkSearchParams } from '@features/bookmark'

export const useBookmarks = () => {
  const { storage } = useStorage()
  const { bookmarks, setBookmarks } = useContext(bookmarksContext)
  const filter = useCallback(
    (params?: BookmarkSearchParams) => {
      return get(storage, params).then(setBookmarks)
    },
    [storage, setBookmarks],
  )
  return { bookmarks, filter }
}
