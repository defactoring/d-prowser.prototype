import React, {useCallback, useRef, useState} from 'react';
import {Contents} from '../Contents';
import {context} from '../context';
import {Bookmark} from '../context/type';
import {AddDialog} from '../AddDialog';

export const App = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => setOpen(true), [setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const value = useRef({bookmarks, setBookmarks, dialog: { open: handleOpen }}).current
  return (
    <context.Provider value={value}>
      <Contents/>
      <AddDialog open={open} onClose={handleClose} />
    </context.Provider>
  );
}
