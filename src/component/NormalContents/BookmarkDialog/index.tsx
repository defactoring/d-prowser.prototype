import React from 'react'
import * as S from './style'
import { Dialog, TextField, Button } from '@mui/material'
import { useBookmarkForm } from './useBookmarkForm'
import { Bookmark } from '../../../feature/bookmark'

/**
 * プロップス型の定義
 */
type Props = {
  open: boolean
  onClose: () => void
  bookmark?: Bookmark
}

/**
 * アプリ追加ダイアログ
 * テキストフィールドからタイトルとアプリのURLを取得しアプリアイコンを表示させる。
 */
export const BookmarkDialog: React.FC<Props> = ({ open, onClose, bookmark }) => {
  const { register, onSubmit, errors } = useBookmarkForm({ bookmark, onSuccess: onClose })
  return (
    <Dialog open={open} onClose={onClose}>
      <S.Form onSubmit={onSubmit}>
        <S.Title>Save Bookmark</S.Title>
        <TextField
          {...register('name')}
          label='name'
          type='text'
          variant='standard'
          fullWidth
          error={errors.name !== undefined}
        />
        <TextField
          {...register('url')}
          label='url'
          type='text'
          variant='standard'
          fullWidth
          error={errors.url !== undefined}
        />
        <TextField
          {...register('tags')}
          label='tags'
          type='text'
          variant='standard'
          fullWidth
          error={errors.tags !== undefined}
        />
        <Button variant='contained' type='submit' fullWidth>
          Save
        </Button>
      </S.Form>
    </Dialog>
  )
}
