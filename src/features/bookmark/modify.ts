import { Bookmark } from './type'
import { BookmarkStorage } from '../storage'
import { get } from './get'

/**
 * ブックマークの変更
 */
export const modify = async (
  storage: BookmarkStorage,
  id: Bookmark['id'],
  bookmark: Partial<Omit<Bookmark, 'id'>>,
) => {
  const bookmarks: Bookmark[] = await get(storage)
  // 変更前の値
  const target: Bookmark | undefined = bookmarks.find((bookmark) => bookmark.id === id)
  if (target !== undefined) {
    // スプレット構文は複数並べた場合は、後ろの引数を優先する
    await storage.update({ ...target, ...bookmark, id })
  }
}
