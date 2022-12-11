import {Bookmark} from './type';
import {get} from './get';

/**
 * ブックマークのタイトル変更
 */
 export const renamed = (id: Bookmark['id'],title: Bookmark['title']) => {
    // ブラウザからブックマーク配列を受け取りIDキーと一致したオブジェクトのタイトルを編集
    const bookmarks = get().map(bookmark => {
      if(bookmark.id = id){
        return bookmark.title = title;
      }
    });
    // ブックマーク配列をブラウザに保存
    window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }