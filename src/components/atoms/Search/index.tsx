import * as S from './style'
import { Search as Icon } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'

type Props = {
  options?: string[]
  onChange?: (value: string) => void
}

export const Search: React.FC<Props> = ({ options = [], onChange = () => void 0 }) => {
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon color='action' />
      </S.IconWrapper>
      <S.SearchField
        placeholder='Search…'
        freeSolo
        fullWidth
        options={options}
        onInputChange={(_, value) => onChange(value)}
        renderInput={(params) => <TextField {...params} type='search' placeholder='Search…' />}
      />
    </S.Container>
  )
}
