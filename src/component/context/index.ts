import {createContext, Dispatch, SetStateAction} from 'react';
import {Bookmark} from './type';

type Context = {
  bookmarks?: Bookmark[]
  setBookmarks?: (bookmarks: Bookmark[]) => void
}

export const context = createContext<Context>({})
