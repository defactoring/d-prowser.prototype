import {INITIAL_BOOKMARKS} from './initialize';
import {Bookmark} from './type';

// getメソッド
// ブラウザからブックマーク配列を取得しブックマーク配列返す。
// ブラウザにブックマーク配列が存在しない場合、初期ブックマーク配列を返す。
export const get = (): Bookmark[] => (JSON.parse(window.localStorage.getItem('bookmarks') ?? JSON.stringify(INITIAL_BOOKMARKS)) as Bookmark[])
