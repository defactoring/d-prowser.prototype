import React, {useCallback, useRef, useState} from 'react';
import {Contents} from '../Contents';
import {context} from '../context';
import {Bookmark} from '../context/type';
import {AddDialog} from '../AddDialog';

const initial = JSON.stringify({bookmarks: [
    {title:'youtube',icon:'',url:'https://www.youtube.com/'},
    {title:'facebook',icon:'',url:''},
    {title:'amazon',icon:'',url:''},
    {title:'twitter',icon:'',url:''},
    {title:'memo',icon:'',url:''},
    {title:'zoom',icon:'',url:''},
    {title:'instagram',icon:'',url:''},
    {title:'Maps',icon:'',url:''},
    {title:'iTunes',icon:'',url:''}
  ]});

const getBookmarks = () => JSON.parse(window.localStorage.getItem('bookmarks') ?? initial).bookmarks as Bookmark[]

export const App = () => {
  const addBookmark = useCallback((bookmark: Bookmark) => {
    const bookmarks = getBookmarks()
    window.localStorage.setItem('bookmarks', JSON.stringify({bookmarks: [...bookmarks, bookmark]}))
  }, [])
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const value = useRef({bookmark: {get: getBookmarks, add: addBookmark}, dialog: {open: handleOpen}}).current
  return (
    <context.Provider value={value}>
      <Contents/>
      <AddDialog open={open} onClose={handleClose}/>
    </context.Provider>
  );
}
