import React, { FocusEventHandler, MouseEventHandler, useCallback } from 'react'
import * as S from './style'
import { remove } from '../../../feature/bookmark/remove'
import { Bookmark } from '../../../feature/bookmark'
import { rename } from '../../../feature/bookmark/rename'
import { useStorage } from '../../../hooks'

type Props = {
  bookmark: Bookmark
  refresh: () => void
}
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<Props> = (props) => {
  const { storage } = useStorage()
  // name stateの値を更新し、ブラウザに保存されているブックマークのidと一致するnameを更新する関数を定義
  const handleRename: FocusEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      rename(storage, props.bookmark.id, e.target.value).then(props.refresh)
    },
    [props],
  )
  // OverlayタグのonClickで呼び出され、propsのブックマークIDを引数に渡してIDと一致するブックマークを削除する関数を定義
  const handleRemove: MouseEventHandler<SVGElement> = useCallback(() => {
    remove(storage, props.bookmark.id).then(props.refresh)
  }, [props])
  return (
    <S.Container>
      {/* アイコンを表示 */}
      <S.IconImage src={props.bookmark.icon} />
      {/* 編集モードの時表示されるバツボタン */}
      <S.Overlay role='button' aria-pressed={false} onClick={handleRemove} />
      <S.Name
        defaultValue={props.bookmark.name}
        variant='standard'
        size='small'
        onBlur={handleRename}
      />
      {/* タイトルを表示 */}
    </S.Container>
  )
}
