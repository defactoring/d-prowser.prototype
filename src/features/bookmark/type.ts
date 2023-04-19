/**
 * ブックマーク型
 */
export type Bookmark = {
  id: string
  name: string
  url: string
  icon: string
  tags: string[]
}

/**
 * ブックマーク検索パラメータ
 */
export type BookmarkSearchParams = {
  q?: string
  tags?: string[]
}
