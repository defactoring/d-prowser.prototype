import {INITIAL_BOOKMARKS} from './initialize';
import {Bookmark} from './type';

export const get = (): Bookmark[] => (JSON.parse(window.localStorage.getItem('bookmarks') ?? JSON.stringify(INITIAL_BOOKMARKS)) as Bookmark[])
