import React from 'react'
import * as S from './style'
import { AppIcon } from '../AppIcon'
import { AddIcon } from '../AddIcon'
import { Search } from '@mui/icons-material'
import { Bookmark } from '../../../feature/bookmark'
import { useBookmarks } from './useBookmarks'
import { TextField } from '@mui/material'

type Props = {
  defaultValue?: string | null
  open: (bookmark?: Bookmark) => void
}

/**
 * コンテンツ
 * 画面にアイコンオブジェクトを表示させる。
 */
export const Contents: React.FC<Props> = ({ open, defaultValue }) => {
  const { bookmarks, tags, onSearch } = useBookmarks()
  return (
    <S.Container>
      <S.Search>
        <S.SearchIconWrapper>
          <Search />
        </S.SearchIconWrapper>
        <S.SearchField
          freeSolo
          fullWidth
          options={tags}
          defaultValue={defaultValue}
          onInputChange={(_, value) => onSearch(value)}
          renderInput={(params) => <TextField {...params} type='search' placeholder='Search…' />}
        />
      </S.Search>
      <S.AppContents>
        {bookmarks.map((bookmark) => {
          return (
            // アプリアイコン
            <AppIcon key={bookmark.id} open={() => open(bookmark)} bookmark={bookmark} />
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
