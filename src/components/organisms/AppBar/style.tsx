import styled from '@emotion/styled'
import Grid2 from '@mui/material/Unstable_Grid2'

export const Container = styled(Grid2)`
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  max-width: 1280px;
`
