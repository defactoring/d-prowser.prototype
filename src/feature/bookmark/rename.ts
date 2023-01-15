import { Bookmark } from './type'
import { BookmarkStorage } from '../storage'
import { get } from './get'

/**
 * ブックマークのタイトル変更
 */
export const rename = async (
  storage: BookmarkStorage,
  id: Bookmark['id'],
  name: Bookmark['name'],
) => {
  // ブラウザからブックマーク配列を取得
  const bookmarks: Bookmark[] = await get(storage)
  // ブックマーク配列から引数のIDと一致するブックマークオブジェクトを取得
  const target: Bookmark | undefined = bookmarks.find((bookmark) => bookmark.id === id)
  // 引数のIDと一致するブックマークオブジェクトが存在するか判定
  if (target !== undefined) {
    // 引数のタイトルに変更
    target.name = name
    // ブックマーク配列をブラウザに保存
    await storage.update(target)
  }
}
