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
      <S.AppContents>
        {bookmarks.map((appIconItem) => {
          return (
            // アプリアイコン
            <AppIcon
              open={open}
              key={appIconItem.id}
              name={appIconItem.name}
              icon={appIconItem.icon}
              url={appIconItem.url}
            />
          )
        })}
      </S.AppContents>
      <S.EditContents>
        {/* 追加ボタン */}
        <AddIcon open={open} />
        {/* 編集ボタン */}
        <EditIcon />
      </S.EditContents>
    </S.Container>
  )
}
