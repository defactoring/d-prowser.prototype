import React, {ChangeEventHandler, FormEventHandler, useCallback, useState} from 'react';
import {Dialog} from '@mui/material';
import {Bookmark} from '../context/type';
import {useBookmark} from '../hooks';

type Props = {
  open: boolean
  onClose: () => void
}

export const AddDialog: React.FC<Props> = ({open, onClose}) => {
  const {add} = useBookmark()
  const [bookmark, setBookmark] = useState<Bookmark>({
    title: '',
    url: '',
    icon: '',
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
    console.log(bookmark)
    add(bookmark)
    onClose()
  }, [bookmark, add, onClose])
  return <Dialog open={open} onClose={onClose} onSubmit={handleSubmit}>
    <form action='#' method='get'>
      <input autoFocus type='text' onChange={setTitle}/>
      <input type='text' onChange={setUrl}/>
      <button type='submit'>submit</button>
    </form>
  </Dialog>
}
