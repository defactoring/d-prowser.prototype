import { useCallback, useEffect, useMemo } from 'react'
import { useBookmarks as _useBookmarks } from '@hooks'
import { useRouter } from 'next/router'

export const useBookmarks = () => {
  const router = useRouter()
  const defaultValue = useMemo(() => {
    const tags = router.query.tags
    if (Array.isArray(tags)) return tags[0]
    return tags ?? ''
  }, [router.query.tags])
  const { bookmarks, filter } = _useBookmarks()
  const tags = useMemo(
    () => [...new Set(bookmarks.flatMap(({ tags }) => tags))].filter((tag) => !!tag),
    [bookmarks],
  )
  const onSearch = useCallback(
    (tag: string | null) => {
      if (!tag) {
        router.push({ query: { ...router.query, tags: undefined } })
        return
      }
      router.push({ query: { ...router.query, tags: [tag] } })
    },
    [filter],
  )
  let timer: NodeJS.Timeout | null = null
  useEffect(() => {
    timer = setTimeout(() => {
      if (!defaultValue) return filter()
      return filter({ tags: [defaultValue] })
    }, 200)
    return () => void (timer && clearTimeout(timer))
  }, [defaultValue])
  return { bookmarks, tags, onSearch, defaultValue }
}
