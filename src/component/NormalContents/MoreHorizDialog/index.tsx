import React from 'react'
import * as S from './style'
import { EditDialog } from '../EditDialog'
import { Dialog } from '@mui/material'
import { useCallback, useState, MouseEventHandler } from 'react'
import { Bookmark } from '../../../feature/bookmark'
import { remove } from '../../../feature/bookmark/remove'
import { useStorage } from '../../../hooks'

/**
 * プロップス型の定義
 */
type Props = {
    open: boolean
    onClose: () => void
    name: string
    url: string
}

export const MoreHorizDialog: React.FC<Props> = (props) => {
    const {open, onClose} = props
    // 編集画面の操作
    const [isShowEditDialog, setIsEditDialogShow] = useState<boolean>(false)
    const showEditDialog = useCallback(() => setIsEditDialogShow(true), [setIsEditDialogShow])
    const closeEditDialog = useCallback(() => setIsEditDialogShow(false), [setIsEditDialogShow]) 
//   const { storage } = useStorage()
//   const handleRemove: MouseEventHandler<HTMLDivElement> = useCallback(() => {
//     remove(storage, props.bookmark.id).then(props.refresh)
//   }, [props])
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <slot>
                    <div onClick={showEditDialog}>編集</div >
                    {/* <div onClick={handleRemove}>削除</div> */}
                </slot>
            </Dialog>
            <EditDialog open={isShowEditDialog} onClose={closeEditDialog} name={props.name} url={props.url}/>
        </>
    )
}
