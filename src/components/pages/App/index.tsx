import React, { useCallback, useState } from 'react'
import * as T from '@templates'
import { Bookmark } from '@features/bookmark'
import { Contents, BookmarkDialog } from './components'

export const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [bookmark, setBookmark] = useState<Bookmark>()
  const handleOpen = useCallback(
    (bookmark?: Bookmark) => {
      setBookmark(bookmark)
      setOpen(true)
    },
    [setBookmark, setOpen],
  )
  const handleClose = useCallback(() => {
    setBookmark(undefined)
    setOpen(false)
  }, [setBookmark, setOpen])
  return (
    <T.Authenticated>
      <Contents open={handleOpen} />
      {/* アプリ追加ダイアログ */}
      <BookmarkDialog open={open} onClose={handleClose} bookmark={bookmark} />
    </T.Authenticated>
  )
}
