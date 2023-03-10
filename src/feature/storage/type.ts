import { Bookmark } from '../bookmark'

export interface BookmarkStorage {
  /**
   * DBからブックマーク配列を取得
   *
   * @returns Bookmark[]
   */
  read(): Promise<Bookmark[]>

  /**
   * DBからブックマーク配列を取得
   *
   * @returns Bookmark[]
   */
  readOne(id: string): Promise<Bookmark[]>

  /**
   * ブックマークをDBに登録
   */
  create(bookmark: Bookmark): Promise<void>

  /**
   * DBのブックマークを削除
   */
  delete(id: Bookmark['id']): Promise<void>

  /**
   * DBのブックマークを変更
   */
  update(bookmark: Bookmark): Promise<void>
}
