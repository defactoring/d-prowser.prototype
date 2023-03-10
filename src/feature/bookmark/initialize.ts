import { create } from './create'

/**
 * 初期ブックマーク
 */
export const INITIAL_BOOKMARKS = [
  create({ name: 'youtube', url: 'https://www.youtube.com/' }),
  create({ name: 'facebook', url: 'https://www.facebook.com' }),
  create({ name: 'amazon', url: 'https://www.amazon.co.jp/' }),
  create({ name: 'twitter', url: 'https://www.twitter.com' }),
  create({ name: 'memo', url: 'https://keep.google.com' }),
  create({ name: 'zoom', url: 'https://zoom.us' }),
  create({ name: 'instagram', url: 'https://instagram.com' }),
  create({ name: 'Maps', url: 'https://map.google.com' }),
]

/**
 * ブックマークを初期化
 */
export const initialize = async () => {
  window.localStorage.setItem('bookmarks', JSON.stringify(INITIAL_BOOKMARKS))
}
