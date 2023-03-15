import { Bookmark } from './type'
import { BookmarkStorage } from '../storage'

/**
 * DBからブックマーク配列を取得しブックマーク配列返す。
 */
export const getOne = async (storage: BookmarkStorage, id: string): Promise<Bookmark[]> =>
  storage.readOne(id)
