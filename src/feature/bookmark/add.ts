import { Bookmark } from './type'
import { get } from './get'
import { BookmarkStorage } from '../storage'

/**
 * ブックマーク追加
 * ブックマークを渡し、画面ローカルストレージにブックマークを追加する。
 */
export const add = async (storage: BookmarkStorage, bookmark: Bookmark) => {
  // ブラウザからブックマーク配列を取得
  const bookmarks = await get(storage)
  // ブックマーク配列に新規ブックマークを追加し、保存
  await storage.write([...bookmarks, bookmark])
}
