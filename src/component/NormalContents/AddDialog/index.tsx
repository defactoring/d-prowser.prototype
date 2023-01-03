import React, { ChangeEventHandler, FormEventHandler, useCallback, useState } from 'react'
import { add, create, get, Bookmark } from '../../../feature/bookmark'
import * as S from './style'
import { Dialog, TextField, Button } from '@mui/material'
import { useBookmarks, useStorage } from '../../../hooks'

type Props = {
  open: boolean
  onClose: () => void
}

/**
 * アプリ追加ダイアログ
 * テキストフィールドからタイトルとアプリのURLを取得しアプリアイコンを表示させる。
 */
export const AddDialog: React.FC<Props> = ({ open, onClose }) => {
  const [bookmark, setBookmark] = useState<Pick<Bookmark, 'title' | 'url'>>({
    title: '',
    url: '',
  })
  const setTitle: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) =>
      setBookmark({
        ...bookmark,
        title: e.target.value,
      }),
    [bookmark, setBookmark],
  )
  const setUrl: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) =>
      setBookmark({
        ...bookmark,
        url: e.target.value,
      }),
    [bookmark, setBookmark],
  )
  const { setBookmarks } = useBookmarks()
  const { storage } = useStorage()
  const handleSubmit: FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault()
      await add(storage, create(bookmark.title, bookmark.url))
      await get(storage).then(setBookmarks)
      onClose()
    },
    [bookmark, onClose],
  )
  return (
    <Dialog open={open} onClose={onClose} onSubmit={handleSubmit}>
      <S.FormAddDialog action='#' method='get'>
        <S.H2Title>Add Icon</S.H2Title>
        <TextField
          id='standard-search'
          label='name'
          type='text'
          variant='standard'
          fullWidth
          onChange={setTitle}
        />
        <TextField
          id='standard-search'
          label='url'
          type='text'
          variant='standard'
          fullWidth
          onChange={setUrl}
        />
        <Button variant='contained' type='submit' fullWidth>
          Add
        </Button>
      </S.FormAddDialog>
    </Dialog>
  )
}
