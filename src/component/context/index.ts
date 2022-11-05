import {createContext} from 'react';
import {Bookmark} from './type';

type Context = {
  bookmarks: Bookmark[]
  setBookmarks: (bookmarks: Bookmark[]) => void
  dialog: {
    open: () => void
  }
}

export const context = createContext<Context>({
  bookmarks: [],
  setBookmarks: () => {
  },
  dialog: {
    open: () => {
    }
  }
})
