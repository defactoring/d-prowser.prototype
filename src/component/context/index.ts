import {createContext} from 'react';
import {Bookmark} from './type';

type Context = {
  bookmark: {
    get: () => Bookmark[]
    add: (bookmark: Bookmark) => void
  }
  dialog: {
    open: () => void
  }
}

export const context = createContext<Context>({
  bookmark: {
    get: () => [],
    add: () => {
    },
  },
  dialog: {
    open: () => {
    }
  }
})
