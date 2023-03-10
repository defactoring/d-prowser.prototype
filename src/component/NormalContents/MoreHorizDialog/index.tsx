import React from 'react'
import { Dialog } from '@mui/material'
import { useCallback, MouseEventHandler } from 'react'
import { Bookmark } from '../../../feature/bookmark'
import { remove, get } from '../../../feature/bookmark/'
import { useStorage } from '../../../hooks'
import { useBookmarks } from '../../../hooks'

/**
 * プロップス型の定義
 */
type Props = {
    open: boolean
    onClose: () => void
    openDialog: () => void
    bookmark: Bookmark
}

export const MoreHorizDialog: React.FC<Props> = (props) => {
    const {open, onClose, openDialog} = props
  const { storage } = useStorage()
  const { bookmarks, setBookmarks } = useBookmarks()
  const handleRefresh = useCallback(() => get(storage).then(setBookmarks), [setBookmarks])
  const handleRemove: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    remove(storage, props.bookmark.id).then(handleRefresh)
  }, [props])
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <slot>
                    <div onClick={openDialog}>編集</div >
                    <div onClick={handleRemove}>削除</div>
                </slot>
            </Dialog>
        </>
    )
}
