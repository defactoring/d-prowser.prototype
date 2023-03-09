// Import the functions you need from the SDKs you need
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
} from 'firebase/firestore'
import { Bookmark } from '../bookmark'
import { doc, setDoc } from 'firebase/firestore'
import { BookmarkStorage } from './type'
import { firebaseApp } from '../firebase'
import firebase from 'firebase/compat'

export class FirestoreStorage implements BookmarkStorage {
  private readonly db = getFirestore(firebaseApp)

  constructor(private readonly user: firebase.User) {}

  async read(): Promise<Bookmark[]> {
    const bookmarks = await getDocs(
      query(collection(this.db, 'users', this.user.uid, 'bookmarks'), orderBy('name')),
    ).then((snapshot) => snapshot.docs.map((doc) => doc.data()))
    return bookmarks as Bookmark[]
  }

  async create(bookmark: Bookmark): Promise<void> {
    await setDoc(doc(this.db, 'users', this.user.uid, 'bookmarks', bookmark.id), bookmark)
  }

  /**
   * DBのブックマークを削除
   */
  async delete(id: Bookmark['id']): Promise<void> {
    await deleteDoc(doc(this.db, 'users', this.user.uid, 'bookmarks', id))
  }

  /**
   * DBのブックマークを変更
   */
  async update(bookmark: Bookmark): Promise<void> {
    await updateDoc(doc(this.db, 'users', this.user.uid, 'bookmarks', bookmark.id), bookmark)
  }
}
