import React from 'react';
import * as S from './style';
import {AppIcon} from '../AppIcon';
import {AddIcon} from '../AddIcon';
import {get} from '../../feature/bookmark';

export const Contents = () => {
  const bookmarks = get()
  return (
    <S.Container>
      <AddIcon/>
      {bookmarks.map((appIconItem) => {
        return (
          <AppIcon
            key={appIconItem.id}
            title={appIconItem.title}
            icon={appIconItem.icon}
            url={appIconItem.url}
          />
        )
      })}
    </S.Container>
  );
}
