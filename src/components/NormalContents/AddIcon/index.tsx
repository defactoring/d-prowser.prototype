import React from 'react'
import * as S from './style'
import { Tooltip } from '@mui/material'

type Props = {
  open: () => void
}

/**
 * ブックマーク追加アイコン
 */
export const AddIcon: React.FC<Props> = ({ open }) => {
  return (
    <S.HoverCircle>
      <Tooltip title='AddIcon'>
        <S.Container role='button' aria-pressed={false} onClick={open}>
          <S.Icon />
        </S.Container>
      </Tooltip>
    </S.HoverCircle>
  )
}
