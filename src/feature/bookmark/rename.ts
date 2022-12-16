import {Bookmark} from './type';
import {get} from './get';

/**
 * ブックマークのタイトル変更
 */
export const rename = (id: Bookmark['id'], title: Bookmark['title']) => {
  // ブラウザからブックマーク配列を受け取りIDキーと一致したオブジェクトのタイトルを編集
  const bookmarks: Bookmark[] = get();
  const target: Bookmark | undefined = bookmarks.find(bookmark => bookmark.id === id);
  if (target !== undefined) {
    target.title = title
  }
  window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
