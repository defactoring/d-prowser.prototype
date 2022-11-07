import React from 'react';
import * as S from './style';
import { AppIcon } from '../AppIcon';
import {AddIcon} from '../AddIcon';
import {useBookmark} from '../hooks';

export const Contents = () => {
  const {get} = useBookmark()
  return (
    <S.Container>
      <AddIcon />
      {get().map((appIconItem) => {
        return (
          <AppIcon
           key={appIconItem.title}
           title={appIconItem.title}
           icon={appIconItem.icon}
           url={appIconItem.url}
           />
        )})}
    </S.Container>
  );
}
