import {Bookmark} from './type';
import {v4 as uuid} from 'uuid'

const favicon = (url: string) => {
  const {hostname} = new URL(url)
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${hostname}&size=128`
}

export const create = (title: string, url: string, icon?: string): Bookmark => {
  return {
    id: uuid(),
    title,
    icon: icon || favicon(url),
    url,
  }
}
