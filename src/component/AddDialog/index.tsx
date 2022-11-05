import React, {ChangeEventHandler, FormEventHandler, useCallback, useState} from 'react';
import {Dialog} from '@mui/material';
import {Bookmark} from '../context/type';

type Props = {
  open: boolean
  onClose: () => void
}

export const AddDialog: React.FC<Props> = ({open, onClose}) => {
  const [bookmark, setBookmark] = useState<Bookmark>({
    name: '',
    url: '',
    icon: '',
  })
  const setName: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setBookmark({
    ...bookmark,
    name: e.target.value
  }), [bookmark, setBookmark])
  const setUrl: ChangeEventHandler<HTMLInputElement> = useCallback((e) => setBookmark({
    ...bookmark,
    url: e.target.value
  }), [bookmark, setBookmark])
  const handleSubmit: FormEventHandler = useCallback((e) => {
    e.preventDefault()
    console.log(bookmark)
    onClose()
  }, [bookmark, onClose])
  return <Dialog open={open} onClose={onClose} onSubmit={handleSubmit}>
    <form action='#' method='get'>
      <input type='text' onChange={setName}/>
      <input type='text' onChange={setUrl}/>
      <button type='submit'>submit</button>
    </form>
  </Dialog>
}
