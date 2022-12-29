import React, {FocusEventHandler, MouseEventHandler, useCallback, useState} from 'react'
import * as S from './style'
import {remove} from '../../../feature/bookmark/remove';
import {Bookmark} from '../../../feature/bookmark';
import {rename} from '../../../feature/bookmark/rename';

type Props = {
  bookmark: Bookmark
  refresh: () => void
}
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<Props> = (props) => {
  // titleのstateを定義
  const [title, setTitle] = useState<Bookmark['title']>(props.bookmark.title);
  // titlestateの値を更新し、ブラウザに保存されているブックマークのidと一致するtitleを更新する関数を定義
  const handleRename: FocusEventHandler<HTMLInputElement> = useCallback((e) => {
    setTitle(e.target.value);
    rename(props.bookmark.id, e.target.value);
  }, [props])
  // OverlayタグのonClickで呼び出され、propsのブックマークIDを引数に渡してIDと一致するブックマークを削除する関数を定義
  const handleRemove: MouseEventHandler<SVGElement> = useCallback(() => {
    remove(props.bookmark.id);
    props.refresh();
  }, [props])
  return <S.Container>
    <S.IconImage src={props.bookmark.icon}/>{/* アイコンを表示 */}
    <S.Overlay role='button' aria-pressed={false} onClick={handleRemove} />{/* 編集モードの時表示されるバツボタン */}
    <S.Title defaultValue={title} variant='standard' size='small' onBlur={handleRename} />{/* タイトルを表示 */}
  </S.Container>
}
