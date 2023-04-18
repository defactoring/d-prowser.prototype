import { Autocomplete } from '@mui/material'
import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 16px auto;
`

export const IconWrapper = styled.div`
  padding: 0 0 0 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchField = styled(Autocomplete)`
  & .MuiInputBase-root {
    padding-left: 42px;
    border-radius: 160px;
  }
`
