import React from 'react';
import * as S from './style';
import {useDialog} from '../hooks';
import {styled, Tooltip} from '@mui/material';
import {Add} from '@mui/icons-material';

const Icon = styled(Add)`
  border-radius: 50%;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
`;

export const AddIcon: React.FC = () => {
  const {open} = useDialog()
  return <S.Container role='button' aria-pressed={false} onClick={open}>
      <Tooltip title='add'>
        <Icon />
      </Tooltip>
    </S.Container>
}
