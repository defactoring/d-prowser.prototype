import React from 'react'
import * as S from './style'
import { MoreHoriz } from '@mui/icons-material'
import { useCallback, useState } from 'react';
import { MoreHorizDialog } from '../MoreHorizDialog';
import { Bookmark } from '../../../feature/bookmark/type';

/**
 * アプリアイコン
 */
export const AppIcon: React.FC<{ open: () => void; name: string; icon: string; url: string }> = ({
  open,
  ...props
}) => {
  const bookmark: Bookmark = {props}
  const [isDialogShow, setHasDialog] = useState<boolean>(false)
  const handleOpenDialog = () => setHasDialog(true)
  const handleCloseDialog = () => setHasDialog(false)
  return (
    <S.Container>
      <S.Menu onClick={handleOpenDialog}>
        <MoreHoriz fontSize='large' />
      </S.Menu>
      <MoreHorizDialog open={isDialogShow} onClose={handleCloseDialog} bookmark={bookmark}/>
      <S.Link href={props.url} target='_blank'>
        <S.IconImage src={props.icon} />
        <S.Name>{props.name}</S.Name>
      </S.Link>
    </S.Container>
  )
}
