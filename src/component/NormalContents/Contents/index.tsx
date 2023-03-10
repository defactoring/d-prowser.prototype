import React from 'react'
import * as S from './style'
import { AppIcon } from '../AppIcon'
import { AddIcon } from '../AddIcon'
import { useBookmarks } from '../../../hooks'
import { Bookmark } from '../../../feature/bookmark'

type Props = {
  open: (bookmark?: Bookmark) => void
}

/**
 * コンテンツ
 * 画面にアイコンオブジェクトを表示させる。
 */
export const Contents: React.FC<Props> = ({ open }) => {
  const { bookmarks } = useBookmarks()
  return (
    <S.Container>
      <S.AppContents>
        {bookmarks.map((bookmark) => {
          return (
            // アプリアイコン
            <AppIcon
              key={bookmark.id}
              open={() => open(bookmark)}
              bookmark={bookmark}
            />
          )
        })}
      </S.AppContents>
      <S.EditContents>
        {/* 追加ボタン */}
        <AddIcon open={() => open()} />
      </S.EditContents>
    </S.Container>
  )
}
