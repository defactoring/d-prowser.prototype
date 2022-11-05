import React, {useCallback, useState} from 'react';
import * as S from './style';
import {Dialog} from '@mui/material';

export const AddIcon: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  return <>
    <S.Container onClick={handleOpen}>
      <S.Icon onClick={handleOpen}/>
      <S.Title>add</S.Title>
    </S.Container>
    <Dialog open={open} onClose={handleClose}>
      dialog
    </Dialog>
  </>
}
