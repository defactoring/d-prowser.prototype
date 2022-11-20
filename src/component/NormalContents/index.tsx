import {Contents} from './Contents';
import {AddDialog} from './AddDialog';
import {useCallback, useState} from 'react';

// 編集ボタン
export const NormalContents = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  return <>
    <Contents open={handleOpen} />
    <AddDialog open={open} onClose={handleClose}/>{/* アプリ追加ダイアログ */}
  </>
}
