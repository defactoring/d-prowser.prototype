import { useBookmarks as _useBookmarks, useStorage } from '../../../hooks'
import { useCallback } from 'react'

export const useBookmarks = () => {
  const { bookmarks, setBookmarks } = _useBookmarks()
  const { storage } = useStorage()
  let id: NodeJS.Timeout | null = null
  const onSearch = useCallback(
    (q: string) => {
      if (id !== null) clearTimeout(id)
      id = setTimeout(() => storage.search(q).then(setBookmarks), 200)
    },
    [storage, setBookmarks],
  )
  return { bookmarks, tags: storage.tags, onSearch }
}
