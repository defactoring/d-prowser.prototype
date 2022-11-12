import {Bookmark} from './type';
import {get} from './get';

export const add = (bookmark: Bookmark) => {
  const bookmarks = get()
  window.localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, bookmark]))
}
