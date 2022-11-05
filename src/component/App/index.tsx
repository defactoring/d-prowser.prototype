import React, {useRef, useState} from 'react';
import {Contents} from '../Contents';
import {context} from '../context';
import {Bookmark} from '../context/type';

export const App = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const value = useRef({bookmarks, setBookmarks}).current
  return (
    <context.Provider value={value}>
      <Contents/>
    </context.Provider>
  );
}
