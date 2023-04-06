import React from 'react'
import * as S from './style'
import { Dialog, TextField, Button, Autocomplete, createFilterOptions } from '@mui/material'
import { useBookmarkForm } from './useBookmarkForm'
import { Bookmark } from '@features/bookmark'
import { Controller } from 'react-hook-form'

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
  const { register, control, onSubmit, errors, tags } = useBookmarkForm({
    bookmark,
    onSuccess: onClose,
  })
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
        <Controller
          name='tags'
          control={control}
          render={({ field: { name, value, ref, onChange, onBlur } }) => (
            <Autocomplete
              multiple
              clearOnBlur
              selectOnFocus
              handleHomeEndKeys
              freeSolo
              limitTags={2}
              value={value}
              options={tags}
              onBlur={onBlur}
              onChange={(_, newValue) => onChange(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name={name}
                  ref={ref}
                  variant='standard'
                  type='text'
                  label='tags'
                />
              )}
              filterOptions={(options, params) => {
                const filtered = createFilterOptions<string>()(options, params)
                const { inputValue } = params
                if (inputValue !== '' && options.every((option) => inputValue !== option)) {
                  filtered.push(inputValue)
                }
                return filtered
              }}
            />
          )}
        />
        <Button variant='contained' type='submit' fullWidth>
          Save
        </Button>
      </S.Form>
    </Dialog>
  )
}
