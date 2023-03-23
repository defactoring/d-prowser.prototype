import { Contents } from './Contents'
import { BookmarkDialog } from './BookmarkDialog'
import React, { useCallback, useState } from 'react'
import { Bookmark } from '../../feature/bookmark'

/**
 * 通常モード
 */
export const NormalContents: React.FC<{ defaultValue?: string | null }> = ({ defaultValue }) => {
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
    <>
      <Contents open={handleOpen} defaultValue={defaultValue} />
      {/* アプリ追加ダイアログ */}
      <BookmarkDialog open={open} onClose={handleClose} bookmark={bookmark} />
    </>
  )
}
