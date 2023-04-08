import { Bookmark } from '../bookmark'

export interface BookmarkStorage {
  /**
   * タグ一覧
   */
  tags: string[]

  /**
   * DBからブックマークを検索
   */
  search(q: string): Promise<Bookmark[]>

  /**
   * DBからブックマーク配列を取得
   *
   * @returns Bookmark[]
   */
  read(): Promise<Bookmark[]>

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
