import React, {useCallback} from 'react';
import * as S from './style';
import {Tooltip} from '@mui/material';
import {useMode} from '../../../hooks';

export const BackIcon: React.FC = () => {
  const {setMode} = useMode()
  const handleClick = useCallback(() => setMode('normal'), [setMode])
  return <Tooltip title='back'>
        <S.Container role='button' aria-pressed={false} onClick={handleClick}>
          <S.Icon />
    </S.Container>
  </Tooltip>
}
