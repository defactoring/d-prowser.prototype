import { getFirestore, collection, getDocs, deleteDoc, updateDoc, query } from 'firebase/firestore'
import { Bookmark } from '../bookmark'
import { doc, setDoc } from 'firebase/firestore'
import { BookmarkStorage } from './type'
import { firebaseApp } from '../firebase'
import firebase from 'firebase/compat'

export class FirestoreStorage implements BookmarkStorage {
  private readonly db = getFirestore(firebaseApp)
  private _bookmarks: Bookmark[] | null = null

  constructor(private readonly user: firebase.User) {}

  get tags(): string[] {
    return [
      ...new Set((this._bookmarks ?? []).flatMap(({ tags }) => tags).filter((tag) => !!tag)),
    ].sort()
  }

  /**
   * DBのブックマークを再読み込みする
   */
  private async _refresh(): Promise<Bookmark[]> {
    const bookmarks = await getDocs(
      query(collection(this.db, 'users', this.user.uid, 'bookmarks')),
    ).then((snapshot) => snapshot.docs.map((doc) => doc.data()))
    this._bookmarks = (bookmarks as Bookmark[]).sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    )
    return this._bookmarks
  }

  /**
   * DBのブックマークを全て読み込む
   */
  async read(): Promise<Bookmark[]> {
    if (this._bookmarks === null) return this._refresh()
    return this._bookmarks
  }

  /**
   * DBにブックマークを登録
   */
  async create(bookmark: Bookmark): Promise<void> {
    await setDoc(doc(this.db, 'users', this.user.uid, 'bookmarks', bookmark.id), bookmark)
    await this._refresh()
  }

  /**
   * DBのブックマークを削除
   */
  async delete(id: Bookmark['id']): Promise<void> {
    await deleteDoc(doc(this.db, 'users', this.user.uid, 'bookmarks', id))
    await this._refresh()
  }

  /**
   * DBのブックマークを変更
   */
  async update(bookmark: Bookmark): Promise<void> {
    await updateDoc(doc(this.db, 'users', this.user.uid, 'bookmarks', bookmark.id), bookmark)
    await this._refresh()
  }
}
