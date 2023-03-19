import React from 'react'
import * as S from './style'
import { MoreHoriz } from '@mui/icons-material'
import { useStorage } from '../../../hooks'
import { useBookmarks } from '../../../hooks'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useCallback, MouseEventHandler } from 'react'
import { remove, get, Bookmark } from '../../../feature/bookmark/'

type Props = {
  open: () => void
  bookmark: Bookmark
}
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<Props> = ({ open, bookmark }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { storage } = useStorage()
  const { setBookmarks } = useBookmarks()
  const handleRefresh = useCallback(() => get(storage).then(setBookmarks), [setBookmarks])
  const handleRemove: MouseEventHandler<HTMLLIElement> = useCallback(() => {
    remove(storage, bookmark.id).then(handleRefresh)
  }, [])
  return (
    <S.Container>
      <S.Menu onClick={handleClick}>
        <MoreHoriz fontSize='large' />
      </S.Menu>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={open}>Edit</MenuItem>
        <MenuItem onClick={handleRemove}>Delete</MenuItem>
      </Menu>
      <S.Link href={bookmark.url} target='_blank'>
        <S.IconImage src={bookmark.icon} />
        <S.Name>{bookmark.name}</S.Name>
      </S.Link>
    </S.Container>
  )
}
