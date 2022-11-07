import React, {useCallback, useRef, useState} from 'react';
import {Contents} from '../Contents';
import {context} from '../context';
import {Bookmark} from '../context/type';
import {AddDialog} from '../AddDialog';

const initial = JSON.stringify({bookmarks: [
    {title:'youtube',icon:'',url:'https://www.youtube.com/'},
    {title:'facebook',icon:'',url:'https://www.facebook.com'},
    {title:'amazon',icon:'',url:'https://www.amazon.co.jp/'},
    {title:'twitter',icon:'',url:'https://www.twitter.com'},
    {title:'memo',icon:'',url:'https://keep.google.com'},
    {title:'zoom',icon:'',url:'https://zoom.us'},
    {title:'instagram',icon:'',url:'https://instagram.com'},
    {title:'Maps',icon:'',url:'https://map.google.com'},
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
