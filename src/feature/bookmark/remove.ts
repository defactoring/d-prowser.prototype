import { Bookmark } from './type'
import { BookmarkStorage } from '../storage'

/**
 * ブックマーク削除
 */
export const remove = async (storage: BookmarkStorage, id: Bookmark['id']) => {
  // ブックマーク配列をブラウザに保存
  await storage.delete(id)
}
