import React from 'react';
import * as S from './style';
import {useDialog} from '../hooks';
import {Tooltip} from '@mui/material';

export const EditIcon: React.FC = () => {
  const {open} = useDialog()
  return <Tooltip title='edit'>
        <S.Container role='button' aria-pressed={false} onClick={open}>
          <S.Icon />
    </S.Container>
  </Tooltip>
}
