import React, { useCallback } from 'react'
import * as S from './style'
import { useMode } from '../../../hooks'
import { Tooltip } from '@mui/material'

export const EditIcon: React.FC = () => {
  const { setMode } = useMode()
  const handleClick = useCallback(() => setMode('edit'), [setMode])
  return (
    <Tooltip title='edit'>
      <S.Container role='button' aria-pressed={false} onClick={handleClick}>
        <S.Icon />
      </S.Container>
    </Tooltip>
  )
}
