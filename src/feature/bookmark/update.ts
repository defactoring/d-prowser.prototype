import { Bookmark } from './type'
import { BookmarkStorage } from '../storage'

/**
 * ブックマーク追加
 * ブックマークを渡し、画面ローカルストレージにブックマークを追加する。
 */
export const update = async (storage: BookmarkStorage, bookmark: Bookmark) => {
  // ブックマーク配列に新規ブックマークを追加し、保存
  await storage.update(bookmark)
}
