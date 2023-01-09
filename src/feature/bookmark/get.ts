import { Bookmark } from './type'
import { BookmarkStorage } from '../storage'

/**
 * ブラウザからブックマーク配列を取得しブックマーク配列返す。
 * ブラウザにブックマーク配列が存在しない場合、初期ブックマーク配列を返す。
 */
export const get = async (storage: BookmarkStorage): Promise<Bookmark[]> => storage.read()
