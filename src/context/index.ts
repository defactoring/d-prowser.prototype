import {createContext} from 'react';

type Context = {
  mode: 'normal' | 'edit'
  setMode: (mode: 'normal' | 'edit') => void
}

export const context = createContext<Context>({
  mode: 'normal',
  setMode: () => {}
})
