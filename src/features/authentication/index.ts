import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '@libs/firebase'

const auth = getAuth(app)

/**
 * サインアップ処理
 * @param email
 * @param password
 */
export const signUp = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

/**
 * ログイン処理
 * @param email
 * @param password
 */
export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

/**
 * ログアウト処理
 */
export const signOut = async () => {
  return auth.signOut()
}
