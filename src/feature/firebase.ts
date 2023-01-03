import app from 'firebase/compat/app'

// firebase設定
const firebaseConfig = {
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
export const firebase = app.initializeApp(firebaseConfig)
