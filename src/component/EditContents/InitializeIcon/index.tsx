import React, {useCallback} from 'react';
import * as S from './style';
import {Tooltip} from '@mui/material';
import {initialize} from '../../../feature/bookmark';

type Props = {
  refresh: () => void
}
// アプリ追加ボタン
// アプリ追加ダイアログを開く。
export const InitializeIcon: React.FC<Props> = ({refresh}) => {
  const handleClick = useCallback(() => {
    initialize()
    refresh()
  }, [refresh])
  return <Tooltip title='initialize'>
        <S.Container role='button' aria-pressed={false} onClick={handleClick}>
          <S.Icon />
    </S.Container>
  </Tooltip>
}
