import {Bookmark} from './type';
import {get} from './get';

export const remove = (id: Bookmark['id']) => {
  const bookmarks = get().filter(bookmark => bookmark.id !== id)
  window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}
