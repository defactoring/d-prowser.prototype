import {rename} from './rename';
import {get} from './get';
import {INITIAL_BOOKMARKS} from './initialize';
import {Bookmark} from './type';

// UT用
describe('rename test', () => {
  test('rename target', () => {
    expect(get()).toStrictEqual(INITIAL_BOOKMARKS);
    const target: Bookmark = INITIAL_BOOKMARKS[1];
    const renamed = { ...target, title: 'renamed title'}
    rename(target.id, renamed.title);
    expect(get()[1]).toStrictEqual(renamed);
  })
});