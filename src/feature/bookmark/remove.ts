import { Bookmark } from './type'
import { get } from './get'

/**
 * ブックマーク削除
 */
export const remove = (id: Bookmark['id']) => {
  // 引数のブックマークIDを除いたブックマーク配列を変数に格納
  const bookmarks = get().filter((bookmark) => bookmark.id !== id)
  // ブックマーク配列をブラウザに保存
  window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}
