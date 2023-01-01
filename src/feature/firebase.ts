// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, snapshotEqual } from "firebase/firestore";
import { Bookmark } from './bookmark/type'
import { doc, setDoc, getDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyAP9LewVkw8TGZVDXZz9fyvKL8HkOki5KI",
  authDomain: "d-prowser.firebaseapp.com",
  projectId: "d-prowser",
  storageBucket: "d-prowser.appspot.com",
  messagingSenderId: "627346574140",
  appId: "1:627346574140:web:7249e68584307147cfac39",
  measurementId: "G-N30LQ2PYRT",
  //databaseURL: "https://d-prowser-default-rtdb.firebaseio.com"
};

// Firebase初期化
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/**
 * ブックマークをDBに登録
 */
export const writeBookmarkData = (bookmark: Bookmark) => {
    setDoc(doc(db, "bookmarks", bookmark.id), {
        id: bookmark.id,
        title: bookmark.title,
        url: bookmark.url,
        icon: bookmark.icon
    })
}
/**
 * DBからブックマーク配列を取得
 * @returns 
 */
export const getBookmarkData = (): Bookmark[] => {
    const bookmarks = getDocs(collection(db, "bookmarks")).then((snapshot) => 
    snapshot.docs.map(doc => doc.data())
    )
    return bookmarks;// ブックマークの配列をDBから取得する方法が不明です。。
}
