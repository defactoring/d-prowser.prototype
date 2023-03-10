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
  const target: Bookmark | undefined = bookmarks.find((bookmark) => bookmark.id === id)
  if (target !== undefined) {
    await storage.update({ ...target, ...bookmark, id })
  }
}
