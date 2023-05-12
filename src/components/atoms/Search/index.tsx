import * as S from './style'
import { Search as Icon } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'

type Props = {
  options?: string[]
  onChange?: (value: string | null) => void
  defaultValue?: string
}

export const Search: React.FC<Props> = ({
  options = [],
  onChange = () => void 0,
  defaultValue,
}) => {
  return (
    <S.Container>
      <S.IconWrapper>
        <Icon color='action' />
      </S.IconWrapper>
      <S.SearchField
        placeholder='Search…'
        fullWidth
        options={options}
        onChange={(_, value) => onChange(value)}
        defaultValue={defaultValue}
        renderInput={(params) => <TextField {...params} placeholder='Search…' />}
      />
    </S.Container>
  )
}
