import { Contents } from './Contents'
import { AddDialog } from './AddDialog'
import React, { useCallback, useState } from 'react'

/**
 * 通常モード
 */
export const NormalContents: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  return (
    <>
      <Contents open={handleOpen} />
      <AddDialog open={open} onClose={handleClose} />
      {/* アプリ追加ダイアログ */}
    </>
  )
}
