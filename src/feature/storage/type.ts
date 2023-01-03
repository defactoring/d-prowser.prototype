import { Bookmark } from '../bookmark'

export interface BookmarkStorage {
  /**
   * DBからブックマーク配列を取得
   * @returns
   */
  read(): Promise<Bookmark[]>
  /**
   * ブックマークをDBに登録
   */
  write(bookmarks: Bookmark[]): Promise<void>
}
