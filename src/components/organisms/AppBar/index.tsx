import React, { useState } from 'react'
import { IconButton, Toolbar, Menu, MenuItem } from '@mui/material'
import { useAuth } from '@hooks'
import * as S from './style'
import * as A from '@atoms'
import { useBookmarks } from './useBookmarks'
import { AccountCircle } from '@mui/icons-material'

const _AppBar: React.FC = () => {
  const { signOut } = useAuth()
  const { tags, onSearch, defaultValue: _defaultValue } = useBookmarks()
  const [defaultValue] = useState(_defaultValue)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <S.Container position='sticky'>
      <Toolbar>
        <A.Search options={tags} onChange={onSearch} defaultValue={defaultValue} />
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
      </Toolbar>
    </S.Container>
  )
}

export const AppBar = React.memo(_AppBar)
