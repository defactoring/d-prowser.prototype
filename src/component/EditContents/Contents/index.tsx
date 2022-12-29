import React, { useCallback, useState } from 'react'
import * as S from './style'
import { BackIcon } from '../BackIcon'
import { Bookmark, get } from '../../../feature/bookmark'
import { AppIcon } from '../AppIcon'
import { InitializeIcon } from '../InitializeIcon'

/**
 * 編集モード画面
 * 初期化ボタン, 戻るボタン, アプリアイコン
 */
export const Contents = () => {
  // ブックマーク配列を取り出しstateとして定義
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(get())
  // ブックマーク配列をリフレッシュされたときに更新する関数を定義
  const handleRefresh = useCallback(() => setBookmarks(get()), [setBookmarks])
  return (
    <S.Container>
      <InitializeIcon refresh={handleRefresh} />
      {/* 初期化ボタン */}
      <BackIcon />
      {/* 戻るボタン */}
      {bookmarks.map((bookmark) => {
        return (
          <AppIcon key={bookmark.id} bookmark={bookmark} refresh={handleRefresh} />
        ) /* アプリアイコン */
      })}
    </S.Container>
  )
}
