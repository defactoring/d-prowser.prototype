import React, {useCallback} from 'react'
import * as S from './style'
import {remove} from '../../../feature/bookmark/remove';
import {Bookmark} from '../../../feature/bookmark';

type Props = {
  bookmark: Bookmark
  refresh: () => void
}
// アプリアイコン
export const AppIcon: React.FC<Props> = (props) => {
  const handleClick = useCallback(() => {
    remove(props.bookmark.id)
    props.refresh()
  }, [props])
  return <S.Container>
    <S.IconImage src={props.bookmark.icon}/>{/* アイコンを表示 */}
    <S.Overlay role='button' aria-pressed={false} onClick={handleClick} />{/* これは何？？ */}
    <S.Title value={props.bookmark.title} variant='standard' size='small' />{/* タイトルを表示 */}
  </S.Container>
}