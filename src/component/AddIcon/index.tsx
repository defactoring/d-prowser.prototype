import React from 'react';
import * as S from './style';
import {useDialog} from '../hooks';

export const AddIcon: React.FC = () => {
  const {open} = useDialog()
  return <S.Container role='button' aria-pressed={false} onClick={open}>
      <S.Icon />
      <S.Title>add</S.Title>
    </S.Container>
}
