import { Contents } from './Contents'
import { AddDialog } from './AddDialog'
import React, { useCallback, useState } from 'react'

/**
 * 通常モード
 */
export const NormalContents: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Contents open={handleOpen} />
      {/* アプリ追加ダイアログ */}
      <AddDialog open={open} onClose={handleClose} />
    </>
  )
}
