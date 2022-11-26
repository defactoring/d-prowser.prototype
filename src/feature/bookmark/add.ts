import {Bookmark} from './type';
import {get} from './get';

/**
 * ブックマーク追加
 * ブックマークを渡し、画面ローカルストレージにブックマークを追加する。
 */
export const add = (bookmark: Bookmark) => {
  // ブラウザからブックマーク配列を取得
  const bookmarks = get()
  // ブックマーク配列に新規ブックマークを追加し、ブラウザに保存
  window.localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, bookmark]))
}
