import {useContext} from 'react';
import {context} from '../context';

export const useDialog = () => {
  const {dialog} = useContext(context)
  return dialog
}
