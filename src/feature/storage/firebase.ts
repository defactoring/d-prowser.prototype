// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs, deleteDoc, updateDoc } from 'firebase/firestore'
import { Bookmark } from '../bookmark'
import { doc, setDoc } from 'firebase/firestore'
import { BookmarkStorage } from './type'
import { firebase } from '../firebase'

export class FirestoreStorage implements BookmarkStorage {
  private readonly db = getFirestore(firebase)

  async read(): Promise<Bookmark[]> {
    const bookmarks = await getDocs(collection(this.db, 'bookmarks')).then((snapshot) =>
      snapshot.docs.map((doc) => doc.data()),
    )
    return bookmarks as Bookmark[]
  }

  async create(bookmark: Bookmark): Promise<void> {
    await setDoc(doc(this.db, 'bookmarks', bookmark.id), bookmark)
  }

  /**
   * DBのブックマークを削除
   */
  async delete(id: Bookmark['id']): Promise<void> {
    await deleteDoc(doc(this.db, 'bookmarks', id))
  }

  /**
   * DBのブックマークを変更
   */
  async update(bookmark: Bookmark): Promise<void> {
    await updateDoc(doc(this.db, 'bookmarks', bookmark.id), bookmark)
  }
}
