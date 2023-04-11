import React, { createRef } from 'react'
import * as S from './style'
import { MoreHoriz } from '@mui/icons-material'
import { useStorage, useBookmarks } from '@hooks'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useCallback, MouseEventHandler } from 'react'
import { remove, Bookmark } from '@features/bookmark/'

type Props = {
  open: () => void
  bookmark: Bookmark
}
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<Props> = ({ open, bookmark }) => {
  const containerRef = createRef<HTMLDivElement>()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const openMenu = Boolean(anchorEl)
  const handleClick = () => {
    setAnchorEl(containerRef.current)
  }
  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setAnchorEl(containerRef.current)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { storage } = useStorage()
  const { filter } = useBookmarks()
  const handleRemove: MouseEventHandler<HTMLLIElement> = useCallback(() => {
    remove(storage, bookmark.id).then(() => filter())
  }, [])
  return (
    <S.Container onContextMenu={handleContextMenu} ref={containerRef}>
      <S.Menu onClick={handleClick}>
        <MoreHoriz fontSize='large' />
      </S.Menu>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
