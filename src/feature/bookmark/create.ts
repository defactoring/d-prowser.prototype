import { Bookmark } from './type'
import { v4 as uuid } from 'uuid'

/**
 * ファビコン表示モジュール
 */
const fetchFaviconFrom = (url: string) => {
  const { hostname } = new URL(url)
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${hostname}&size=128`
}

const buildUrlFrom = (value: string) => {
  if (value.startsWith('https://') || value.startsWith('http://')) {
    return value
  } else {
    return `https://${value}`
  }
}

/**
 * ブックマークオブジェクトを作成
 * タイトル・URL・アイコンを渡し、ブックマークを返す。
 */
export const create = (title: string, url: string, icon?: string): Bookmark => {
  const _url = buildUrlFrom(url)
  return {
    id: uuid(),
    title,
    icon: icon || fetchFaviconFrom(_url),
    url: _url,
  }
}
