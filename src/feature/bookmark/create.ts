import { Bookmark } from './type'
import { v4 as uuid } from 'uuid'

/**
 * ファビコン表示モジュール
 */
const favicon = (url: string) => {
  const { hostname } = new URL(url)
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${hostname}&size=128`
}

/**
 * ブックマークオブジェクトを作成
 * タイトル・URL・アイコンを渡し、ブックマークオブジェクトを返す。
 */
export const create = (name: string, url: string, icon?: string): Bookmark => {
  return {
    id: uuid(),
    name: name,
    icon: icon || favicon(url),
    url,
  }
}
