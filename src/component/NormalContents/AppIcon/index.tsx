import React from 'react'
import * as S from './style'
import { MoreHoriz } from '@mui/icons-material'
import { useState } from 'react';
import { MoreHorizDialog } from '../MoreHorizDialog';
import { Bookmark } from '../../../feature/bookmark/type';

type Props = {
  open: () => void
  bookmark: Bookmark
}
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<Props> = ({
  open,
  bookmark
}) => {
  const [isDialogShow, setHasDialog] = useState<boolean>(false)
  const handleOpenDialog = () => setHasDialog(true)
  const handleCloseDialog = () => setHasDialog(false)
  return (
    <S.Container>
      <S.Menu onClick={handleOpenDialog}>
        <MoreHoriz fontSize='large' />
      </S.Menu>
      <MoreHorizDialog 
      open={isDialogShow} 
      onClose={handleCloseDialog} 
      openDialog={open}
      bookmark={bookmark}
      />
      <S.Link href={bookmark.url} target='_blank'>
        <S.IconImage src={bookmark.icon} />
        <S.Name>{bookmark.name}</S.Name>
      </S.Link>
    </S.Container>
  )
}
