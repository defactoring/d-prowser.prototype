import { Bookmark } from './type'
import { get } from './get'
import { BookmarkStorage } from '../storage'

/**
 * ブックマーク削除
 */
export const remove = async (storage: BookmarkStorage, id: Bookmark['id']) => {
  // 引数のブックマークIDを除いたブックマーク配列を変数に格納
  const bookmarks = (await get(storage)).filter((bookmark) => bookmark.id !== id)
  // ブックマーク配列をブラウザに保存
  await storage.write(bookmarks)
}
