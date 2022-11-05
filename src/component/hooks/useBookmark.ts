import {useContext} from 'react';
import {context} from '../context';

export const useBookmark = () => {
  const {bookmark} = useContext(context)
  return bookmark
}
