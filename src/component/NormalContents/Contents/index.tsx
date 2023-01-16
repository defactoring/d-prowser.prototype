import React from 'react'
import * as S from './style'
import { AppIcon } from '../AppIcon'
import { AddIcon } from '../AddIcon'
import { EditIcon } from '../EditIcon'
import { useBookmarks } from '../../../hooks'

type Props = {
  open: () => void
}

/**
 * コンテンツ
 * 画面にアイコンオブジェクトを表示させる。
 */
export const Contents: React.FC<Props> = ({ open }) => {
  const { bookmarks } = useBookmarks()
  return (
    <S.Container>
      <AddIcon open={open} />
      {/* 追加ボタン */}
      <EditIcon />
      {/* 編集ボタン */}
      {bookmarks.map((appIconItem) => {
        return (
          <AppIcon
            key={appIconItem.id}
            name={appIconItem.name}
            icon={appIconItem.icon}
            url={appIconItem.url}
          /> // アプリアイコン
        )
      })}
    </S.Container>
  )
}
