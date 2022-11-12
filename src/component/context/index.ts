import {createContext} from 'react';

type Context = {
  dialog: {
    open: () => void
  }
}

export const context = createContext<Context>({
  dialog: {
    open: () => {
    }
  }
})
