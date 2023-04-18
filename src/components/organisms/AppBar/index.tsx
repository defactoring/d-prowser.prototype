import React from 'react'
import { IconButton } from '@mui/material'
import { useAuth } from '@hooks'
import * as S from './style'
import * as A from '@atoms'
import { useBookmarks } from './useBookmarks'
import { AccountCircle } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Grid2 from '@mui/material/Unstable_Grid2'

const _AppBar: React.FC = () => {
  const { signOut } = useAuth()
  const { tags, onSearch } = useBookmarks()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <S.Container container>
      <Grid2 flexGrow={1}>
        <A.Search options={tags} onChange={onSearch} />
      </Grid2>
      <Grid2 container alignItems='center' justifyContent='center'>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
        >
          <AccountCircle sx={{ fontSize: 32 }} />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={signOut}>Sign Out</MenuItem>
        </Menu>
      </Grid2>
    </S.Container>
  )
}

export const AppBar = React.memo(_AppBar)
