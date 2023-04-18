import { useCallback, useMemo } from 'react'
import { useBookmarks as _useBookmarks } from '@hooks'

export const useBookmarks = () => {
  const { bookmarks, filter } = _useBookmarks()
  const tags = useMemo(
    () => [...new Set(bookmarks.flatMap(({ tags }) => tags))].filter((tag) => !!tag),
    [bookmarks],
  )
  const onSearch = useCallback(
    (tag: string) => {
      filter({ tags: [tag] })
    },
    [filter],
  )
  return { bookmarks, tags, onSearch }
}
