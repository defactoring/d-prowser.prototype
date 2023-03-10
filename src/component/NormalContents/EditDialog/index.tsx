import React from 'react'
import * as S from './style'
import { Dialog, TextField, Button } from '@mui/material'
import { useBookmarkForm } from './useBookmarkForm'

/**
 * プロップス型の定義
 */
type Props = {
  open: boolean
  onClose: () => void
  name: string
  url: string
}

/**
 * アプリ追加ダイアログ
 * テキストフィールドからタイトルとアプリのURLを取得しアプリアイコンを表示させる。
 */
export const EditDialog: React.FC<Props> = ({ open, onClose, name, url }) => {
  const { register, onSubmit, errors } = useBookmarkForm({ onSuccess: onClose })
  return (
    <Dialog open={open} onClose={onClose}>
      <S.Form onSubmit={onSubmit}>
        <S.Title>Edit Icon</S.Title>
        <TextField
          {...register('name')}
          label='name'
          type='text'
          variant='standard'
          fullWidth
          error={errors.name !== undefined}
          defaultValue={name}
        />
        <TextField
          {...register('url')}
          label='url'
          type='text'
          variant='standard'
          fullWidth
          error={errors.url !== undefined}
          defaultValue={url}
        />
        <Button variant='contained' type='submit' fullWidth>
          Edit
        </Button>
      </S.Form>
    </Dialog>
  )
}
