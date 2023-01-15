import React from 'react'
import * as S from './style'
import { Dialog, TextField, Button } from '@mui/material'
import { useBookmarkForm } from './useBookmarkForm'

type Props = {
  open: boolean
  onClose: () => void
}

/**
 * アプリ追加ダイアログ
 * テキストフィールドからタイトルとアプリのURLを取得しアプリアイコンを表示させる。
 */
export const AddDialog: React.FC<Props> = ({ open, onClose }) => {
  const { register, onSubmit, errors } = useBookmarkForm({ onSuccess: onClose })
  return (
    <Dialog open={open} onClose={onClose}>
      <S.Form onSubmit={onSubmit}>
        <S.Title>Add Icon</S.Title>
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
        <Button variant='contained' type='submit' fullWidth>
          Add
        </Button>
      </S.Form>
    </Dialog>
  )
}
