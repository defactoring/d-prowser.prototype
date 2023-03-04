import React, { useCallback } from 'react'
import * as S from './style'
import { BackIcon } from '../BackIcon'
import { get } from '../../../feature/bookmark'
import { AppIcon } from '../AppIcon'
import { InitializeIcon } from '../InitializeIcon'
import { useBookmarks, useStorage } from '../../../hooks'

/**
 * 編集モード画面
 * 初期化ボタン, 戻るボタン, アプリアイコン
 */
export const Contents: React.FC = () => {
  const { bookmarks, setBookmarks } = useBookmarks()
  // ブックマーク配列をリフレッシュされたときに更新する関数を定義
  const { storage } = useStorage()
  const handleRefresh = useCallback(() => get(storage).then(setBookmarks), [setBookmarks])
  return (
    <S.Container>
      <S.EditContents>
        {/* 初期化ボタン */}
        <InitializeIcon refresh={handleRefresh} />
        {/* 戻るボタン */}
        <BackIcon />
      </S.EditContents>
      {bookmarks.map((bookmark) => {
        return (
          /* アプリアイコン */
          <AppIcon key={bookmark.id} bookmark={bookmark} refresh={handleRefresh} />
        )
      })}
    </S.Container>
  )
}
