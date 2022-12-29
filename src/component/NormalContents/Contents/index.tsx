import React from 'react'
import * as S from './style'
import { AppIcon } from '../AppIcon'
import { AddIcon } from '../AddIcon'
import { EditIcon } from '../EditIcon'
import { get } from '../../../feature/bookmark'

type Props = {
  open: () => void
}

/**
 * コンテンツ
 * 画面にアイコンオブジェクトを表示させる。
 */
export const Contents: React.FC<Props> = ({ open }) => {
  return (
    <S.Container>
      <AddIcon open={open} />
      {/* 追加ボタン */}
      <EditIcon />
      {/* 編集ボタン */}
      {get().map((appIconItem) => {
        return (
          <AppIcon
            key={appIconItem.id}
            title={appIconItem.title}
            icon={appIconItem.icon}
            url={appIconItem.url}
          /> // アプリアイコン
        )
      })}
    </S.Container>
  )
}
