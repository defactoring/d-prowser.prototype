import React, { createRef } from 'react'
import * as S from './style'
import { MoreHoriz } from '@mui/icons-material'
import { useStorage } from '../../../hooks'
import { useBookmarks } from '../../../hooks'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useCallback, MouseEventHandler } from 'react'
import { remove, get, Bookmark } from '../../../feature/bookmark/'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import Paper, { PaperProps } from '@mui/material/Paper'
import Draggable from 'react-draggable'

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

type Props = {
  open: () => void
  bookmark: Bookmark
}
/**
 * アプリアイコン
 */
export const AppIcon: React.FC<Props> = ({ open, bookmark }) => {
  // DOMの参照を取得
  const containerRef = createRef<HTMLDivElement>()
  // anchorEL変数とset関数を定義
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  // BooleanオブジェクトのopenMenu変数を定義
  const openMenu = Boolean(anchorEl)
  // クリックされたらanchorELにDOMの参照情報が入る関数を定義
  const handleClick = () => {
    setAnchorEl(containerRef.current)
  }
  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    // イベントに対するデフォルトのブラウザ アクションを防止
    event.preventDefault()
    // anchorELにDOMの参照情報が入る
    setAnchorEl(containerRef.current)
  }
  // anchorElにnullを代入する関数定義
  const handleClose = () => {
    setAnchorEl(null)
  }
  // FirebaseのユーザーとブックマークDBオブジェクトを取得
  const { storage } = useStorage()
  // ブックマークコンテキストを取得
  const { setBookmarks } = useBookmarks()
  //
  const handleRefresh = useCallback(() => get(storage).then(setBookmarks), [setBookmarks])
  //
  const handleRemove: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    remove(storage, bookmark.id).then(handleRefresh)
  }, [])
  const [openConfirm, setOpenConfirm] = React.useState(false)
  const handleOpenConfirm = () => {
    setOpenConfirm(true)
  }
  const handleCloseConfirm = () => {
    setOpenConfirm(false)
  }

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
        <MenuItem onClick={handleOpenConfirm}>Delete</MenuItem>
      </Menu>
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        PaperComponent={PaperComponent}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
          確認
        </DialogTitle>
        <DialogContent>
          <DialogContentText>削除してもよろしいですか？</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseConfirm}>
            Cancel
          </Button>
          <Button onClick={handleRemove}>Delete</Button>
        </DialogActions>
      </Dialog>
      <S.Link href={bookmark.url} target='_blank'>
        <S.IconImage src={bookmark.icon} />
        <S.Name>{bookmark.name}</S.Name>
      </S.Link>
    </S.Container>
  )
}
