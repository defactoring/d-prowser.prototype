import React from 'react'
import * as S from './style'
import { MoreHoriz } from '@mui/icons-material'

/**
 * アプリアイコン
 */
export const AppIcon: React.FC<{ open: () => void; name: string; icon: string; url: string }> = ({
  open,
  ...props
}) => {
  return (
    <S.Container>
      <S.Menu onClick={open}>
        <MoreHoriz fontSize='large' />
      </S.Menu>
      <S.Link href={props.url} target='_blank'>
        <S.IconImage src={props.icon} />
        <S.Name>{props.name}</S.Name>
      </S.Link>
    </S.Container>
  )
}
