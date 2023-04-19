import { Bookmark } from './type'
import { v4 as uuid } from 'uuid'

/**
 * ファビコン表示モジュール
 */
const favicon = (url: string) => {
  const { hostname, protocol } = new URL(url)
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${protocol}//${hostname}&size=128`
}

/**
 * ブックマークオブジェクトを作成
 * タイトル・URL・アイコンを渡し、ブックマークオブジェクトを返す。
 */
export const create = (
  bookmark: Pick<Bookmark, 'name' | 'url'> & Partial<Omit<Bookmark, 'id'>>,
): Bookmark => {
  return {
    id: uuid(),
    name: bookmark.name,
    url: bookmark.url,
    icon: bookmark?.icon ?? favicon(bookmark.url),
    tags: bookmark?.tags ?? [],
  }
}
