// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, deleteDoc, updateDoc } from 'firebase/firestore'
import { Bookmark } from '../bookmark'
import { doc, setDoc } from 'firebase/firestore'
import { BookmarkStorage } from './type'

export class FirestoreStorage implements BookmarkStorage {
  // firebase設定
  private readonly firebaseConfig = {
    apiKey: 'AIzaSyAP9LewVkw8TGZVDXZz9fyvKL8HkOki5KI',
    authDomain: 'd-prowser.firebaseapp.com',
    projectId: 'd-prowser',
    storageBucket: 'd-prowser.appspot.com',
    messagingSenderId: '627346574140',
    appId: '1:627346574140:web:7249e68584307147cfac39',
    measurementId: 'G-N30LQ2PYRT',
    //databaseURL: "https://d-prowser-default-rtdb.firebaseio.com"
  }

  // Firebase初期化
  private readonly app = initializeApp(this.firebaseConfig)

  private readonly db = getFirestore(this.app)

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
