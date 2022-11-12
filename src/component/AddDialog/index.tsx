import React, {ChangeEventHandler, FormEventHandler, useCallback, useState} from 'react';
import {Dialog} from '@mui/material';
import {add, create, Bookmark} from '../../feature/bookmark';

type Props = {
  open: boolean
  onClose: () => void
}

export const AddDialog: React.FC<Props> = ({open, onClose}) => {
  const [bookmark, setBookmark] = useState<Pick<Bookmark, 'title' | 'url'>>({
    title: '',
    url: '',
  })
  const setTitle: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setBookmark({
    ...bookmark,
    title: e.target.value
  }), [bookmark, setBookmark])
  const setUrl: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setBookmark({
    ...bookmark,
    url: e.target.value
  }), [bookmark, setBookmark])
  const handleSubmit: FormEventHandler = useCallback((e) => {
    e.preventDefault()
    add(create(bookmark.title, bookmark.url))
    onClose()
  }, [bookmark, onClose])
  return <Dialog open={open} onClose={onClose} onSubmit={handleSubmit}>
    <form action='#' method='get'>
      <input placeholder='name' autoFocus type='text' onChange={setTitle}/>
      <input placeholder='url' type='text' onChange={setUrl}/>
      <button type='submit'>submit</button>
    </form>
  </Dialog>
}
