import React from 'react'
import * as S from './style'
import { Tooltip } from '@mui/material'

type Props = {
  open: () => void
}

/**
 * ブックマーク追加
 */
export const AddIcon: React.FC<Props> = ({ open }) => {
  return (
    <Tooltip title='add'>
      <S.Container role='button' aria-pressed={false} onClick={open}>
        <S.Icon />
      </S.Container>
    </Tooltip>
  )
}
