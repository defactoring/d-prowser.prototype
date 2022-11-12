import React, {useCallback, useState} from 'react';
import * as S from './style';
import {BackIcon} from '../BackIcon';
import {get} from '../../../feature/bookmark';
import {AppIcon} from '../AppIcon';
import {InitializeIcon} from '../InitializeIcon';

export const Contents = () => {
  const [bookmarks, setBookmarks] = useState(get())
  const handleRefresh = useCallback(() => setBookmarks(get()), [setBookmarks])
  return (
    <S.Container>
      <InitializeIcon refresh={handleRefresh} />
      <BackIcon/>
      {bookmarks.map(bookmark => {
        return <AppIcon key={bookmark.id} bookmark={bookmark} refresh={handleRefresh} />
      })}
    </S.Container>
  );
}
