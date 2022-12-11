import React, {useCallback, useState} from 'react';
import * as S from './style';
import {BackIcon} from '../BackIcon';
import {get} from '../../../feature/bookmark';
import {AppIcon} from '../AppIcon';
import {InitializeIcon} from '../InitializeIcon';

/**
 * 編集モード画面
 * 初期化ボタン, 戻るボタン, アプリアイコン
 */
export const Contents = () => {
  const [bookmarks, setBookmarks] = useState(get())
  const handleRefresh = useCallback(() => setBookmarks(get()), [setBookmarks])
  return (
    <S.Container>
      <InitializeIcon refresh={handleRefresh} />{/* 初期化ボタン */}
      <BackIcon/>{/* 戻るボタン */}
      {bookmarks.map(bookmark => {
        return <AppIcon key={bookmark.id} bookmark={bookmark} refresh={handleRefresh} />/* アプリアイコン */
      })}
    </S.Container>
  );
}
