import styled from '@emotion/styled'
import { Autocomplete } from '@mui/material'

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px;
  width: 100vw;
  min-height: 100vh;
`

export const Search = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 16px auto;
`

export const SearchIconWrapper = styled.div`
  padding: 0 12px;
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

export const AppContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0;
  margin-bottom: 120px;

  @media screen and (min-width: 600px) {
    max-width: 800px;
    margin: 40px auto 120px;
    gap: 8px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 40px auto 120px;
    gap: 48px;
  }
`

export const EditContents = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 25px;
`
