import {create} from './create';

// 初期ブックマーク
export const INITIAL_BOOKMARKS = [
  create('youtube', 'https://www.youtube.com/'),
  create('facebook', 'https://www.facebook.com'),
  create('amazon', 'https://www.amazon.co.jp/'),
  create('twitter', 'https://www.twitter.com'),
  create('memo', 'https://keep.google.com'),
  create('zoom', 'https://zoom.us'),
  create('instagram', 'https://instagram.com'),
  create('Maps', 'https://map.google.com'),
];

// ブラウザにブックマーク配列を登録
export const initialize = () => {
  window.localStorage.setItem('bookmarks', JSON.stringify(INITIAL_BOOKMARKS))
}
