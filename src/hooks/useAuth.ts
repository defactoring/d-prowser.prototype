import { signIn, signOut, signUp } from '@features/authentication'

/**
 * 認証を利用するためのカスタムフック
 */
export const useAuth = () => {
  return { signUp, signIn, signOut }
}
